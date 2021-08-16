# Getting Started

## Basic Usage

```

const questionWizardQuestions: IQuestion[] = [
  {
    title: "What's your goal?",
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


<QuestionWizard
  questions={questionWizardQuestions}
  className="custom-question-wizard"
  onChange={() => console.log('changed step!')}
  onFinish={(results) => console.log(results)}
  themeProps={{
    ...defaultWizardThemeProps,
    titleColor: colors.light,
  }}
/>

```
