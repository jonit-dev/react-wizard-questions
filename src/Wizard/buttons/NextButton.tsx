import React from "react";

import { QuestionButton } from "./QuestionButton";

interface IProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const NextButton: React.FC<IProps> = ({ onClick, isDisabled }) => {
  return (
    <QuestionButton type="next" onClick={onClick} isDisabled={isDisabled} />
  );
};
