import React from "react";

export interface IQuestionOption {
  id: string;
  imageUrl: string;
  label: string;
  isSelected: boolean;
}

export interface IQuestion {
  title: string;
  description?: React.ReactNode;
  options: IQuestionOption[];
}

export interface IQuestionButton {
  onClick: () => void;
  isDisabled?: boolean;
  type: 'next' | 'previous' | 'finish';
  children?: React.ReactNode;
  color?: string;
}

export interface IWizardTheme {
  primary: string;
  secondary: string;
  lightGray: string;
  darkGray: string;
  gray: string;
  mediumGray: string;
  titleColor: string;
  questionOptionColor: string;
}

export interface IWizardOptions {
  questionLabel: string;
}
