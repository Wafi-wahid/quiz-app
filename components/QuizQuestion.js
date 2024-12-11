import React from "react";
import { View, Text, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const QuizQuestion = ({
  question,
  answer,
  userAnswer,
  onAnswerChange,
  isSubmitted,
}) => {
  return (
    <View style={{ marginBottom: 20, width: "100%" }}>
      <Text style={globalStyles.questionText}>
        Q.{question.id} {question.question}
      </Text>
      <TextInput
        style={globalStyles.answerText}
        placeholder="Write your answer here"
        value={userAnswer}
        onChangeText={(text) => onAnswerChange(text, question.id - 1)}
        editable={!isSubmitted}
      />
      {isSubmitted && (
        <Text
          style={{
            color:
              userAnswer.trim().toLowerCase() === answer.toLowerCase()
                ? "green"
                : "red",
          }}
        >
          {userAnswer.trim().toLowerCase() === answer.toLowerCase()
            ? "Correct!"
            : `Incorrect. Correct answer: ${answer}`}
        </Text>
      )}
    </View>
  );
};

export default QuizQuestion;
