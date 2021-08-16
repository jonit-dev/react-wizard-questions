import React from "react";

import { QuestionButton } from "./QuestionButton";

interface IProps {
  onClick: () => void;
  isDisabled: boolean;
}

export const PreviousButton: React.FC<IProps> = ({ onClick, isDisabled }) => {
  return (
    <QuestionButton type="previous" onClick={onClick} isDisabled={isDisabled} />
  );
};
