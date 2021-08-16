import React from "react";

import { QuestionButton } from "./QuestionButton";

interface IProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const FinishButton: React.FC<IProps> = ({ onClick, isDisabled }) => {
  return (
    <QuestionButton type="finish" onClick={onClick} isDisabled={isDisabled} />
  );
};
