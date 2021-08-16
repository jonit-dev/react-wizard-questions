import { Meta, Story } from "@storybook/react";
import React from "react";

import { defaultWizardThemeProps, IQuestionWizardProps, QuestionWizard } from "../src";
import { IQuestion } from "../src/Wizard/questionWizard.types";

const meta: Meta = {
  title: 'UI/Question Wizard',
  component: QuestionWizard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IQuestionWizardProps> = (args) => (
  <QuestionWizard {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const questionWizardQuestions: IQuestion[] = [
  {
    title: "What's your goal?",
    description: <p>Forever learning</p>,
    options: [
      {
        id: '1',
        imageUrl: '/images/online-learning.png',
        label: 'Learn the Basics',
        isSelected: false,
      },
      {
        id: '2',
        imageUrl: '/images/portfolio.png',
        label: 'Track my Portfolio',
        isSelected: false,
      },
      {
        id: '3',
        imageUrl: '/images/portfolio.png',
        label: 'Track my Portfolio',
        isSelected: false,
      },
    ],
  },
  {
    title: "What's the meaning of life?",
    description: <p>Code as much as you can!</p>,
    options: [
      {
        id: '4',
        imageUrl: '/images/online-learning.png',
        label: 'Eat & Code',
        isSelected: false,
      },
    ],
  },
  {
    title: "What's the meaning of life?",
    description: <p>Code as much as you can!</p>,
    options: [
      {
        id: '4',
        imageUrl: '/images/online-learning.png',
        label: 'Eat & Code',
        isSelected: false,
      },
    ],
  },
];

Default.args = {
  questions: questionWizardQuestions,
  onChange: (questions) => console.log(questions),
  onFinish: (q) => console.log(q),
};

export const Custom = Template.bind({});

Custom.args = {
  questions: questionWizardQuestions,
  onChange: (questions) => console.log(questions),
  onFinish: (q) => console.log(q),
  themeProps: {
    ...defaultWizardThemeProps,
    primary: 'green',
    titleColor: 'red',
    questionOptionColor: 'red',
  },
  children: <p>This is a custom text here</p>,
};
