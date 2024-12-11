import React, { useState, useEffect } from "react";
import { Button, Alert, View, Text } from "react-native";
import Timer from "./components/Timer";
import QuizQuestion from "./components/QuizQuestion";
import ScoreDisplay from "./components/ScoreDisplay";
import { globalStyles } from "./styles/globalStyles";

const quiz = [
  {
    id: 1,
    question: "What library is used for navigation in React Native?",
    answer: "React-Navigation",
  },
  {
    id: 2,
    question: "What core feature allows styling in React Native?",
    answer: "Stylesheet",
  },
  {
    id: 3,
    question: "What is used for asynchronous data fetching in React Native?",
    answer: "Fetch",
  },
  {
    id: 4,
    question: "Which component is used to scroll content in React Native?",
    answer: "ScrollView",
  },
  {
    id: 5,
    question:
      "What is the default language used to write React Native applications?",
    answer: "JavaScript",
  },
];

export default function App() {
  const [userAnswers, setUserAnswers] = useState(Array(quiz.length).fill(""));
  const [score, setScore] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  const handleInputChange = (text, index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = text;
    setUserAnswers(updatedAnswers);
  };

  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted]);

  const handleSubmit = () => {
    let newScore = 0;
    quiz.forEach((q, index) => {
      if (userAnswers[index].trim().toLowerCase() === q.answer.toLowerCase()) {
        newScore++;
      }
    });
    setScore(newScore);
    setIsSubmitted(true);
    Alert.alert(
      "Quiz Completed",
      `Your final score is: ${newScore}/${quiz.length}`
    );
  };

  const isFormComplete = userAnswers.every((answer) => answer.trim() !== "");

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.welcomeText}>Welcome to Quiz App</Text>
      <Timer timeLeft={timeLeft} />
      {quiz.map((q, index) => (
        <QuizQuestion
          key={index}
          question={q}
          answer={q.answer}
          userAnswer={userAnswers[index]}
          onAnswerChange={handleInputChange}
          isSubmitted={isSubmitted}
        />
      ))}
      {!isSubmitted && (
        <Button
          onPress={handleSubmit}
          title="Submit"
          color="#841584"
          disabled={!isFormComplete || isSubmitted}
        />
      )}
      {score !== null && (
        <ScoreDisplay score={score} totalQuestions={quiz.length} />
      )}
    </View>
  );
}
