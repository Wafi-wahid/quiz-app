import React from "react";
import { Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const ScoreDisplay = ({ score, totalQuestions }) => {
  return (
    <Text style={globalStyles.scoreText}>
      Your Score: {score}/{totalQuestions}
    </Text>
  );
};

export default ScoreDisplay;
