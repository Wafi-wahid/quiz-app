import React from "react";
import { Text } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Timer = ({ timeLeft }) => {
  return (
    <Text style={globalStyles.timerText}>Time Left: {timeLeft} seconds</Text>
  );
};

export default Timer;
