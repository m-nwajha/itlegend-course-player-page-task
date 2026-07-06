import { WeekCardItemProps } from "@/components/atoms/WeekCardItem";

export const COURSE_WEEKS: {
  id: number;
  isExpanded: boolean;
  title: string;
  description: string;
  items: WeekCardItemProps[];
}[] = [
  {
    id: 1,
    isExpanded: true,
    title: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    items: [
      {
        title: "Introduction",
        href: "/course/1/lesson/1",
        isLocked: true,
      },
      {
        title: "Overview PDF ",
        filePDF: "/assets/pdfs/Mohamed-ALNawjha.pdf",
        isPopup: true,
        typePopup: "pdf",
      },
      {
        title: "Course Overview",
        isPopup: true,
        typePopup: "exam",
        questions: [
          {
            id: 1,
            text: "Among the following states of India, which one has the oldest rock formations in the country?",
            options: ["Assam", "Bihar", "Karnataka", "Uttar Pradesh"],
          },
          {
            id: 2,
            text: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
          },
          {
            id: 3,
            text: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
          },
          {
            id: 4,
            text: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Computer Style Sheets",
              "Creative Style Sheets",
              "Colorful Style Sheets",
            ],
          },
          {
            id: 5,
            text: "What year was React first released?",
            options: ["2011", "2013", "2015", "2017"],
          },
        ],
        minuteCount: 10,
      },
      {
        title: "Course Exercise / Reference Files",
        href: "/course/1/lesson/4",
        isLocked: true,
      },
      {
        title: "Code Editor Installation (Optional if you have one)",
        href: "/course/1/lesson/5",
        isLocked: true,
      },
      {
        title: "Embedding PHP in HTML",
        href: "/course/1/lesson/6",
        isLocked: true,
      },
    ],
  },
  {
    id: 2,
    isExpanded: false,
    title: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    items: [
      {
        title: "Defining Functions",
        href: "/course/1/lesson/7",
        isLocked: true,
      },
      {
        title: "Function Parameters",
        href: "/course/1/lesson/8",
        isLocked: true,
      },
      {
        title: "Return Values From Functions",
        isPopup: true,
        typePopup: "exam",
        questions: [
          {
            id: 1,
            text: "Among the following states of India, which one has the oldest rock formations in the country?",
            options: ["Assam", "Bihar", "Karnataka", "Uttar Pradesh"],
          },
          {
            id: 2,
            text: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
          },
          {
            id: 3,
            text: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
          },
          {
            id: 4,
            text: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Computer Style Sheets",
              "Creative Style Sheets",
              "Colorful Style Sheets",
            ],
          }
        ],
        minuteCount: 5,
      },
      {
        title: "Global Variable and Scope",
        href: "/course/1/lesson/10",
        isLocked: true,
      },
      {
        title: "Newer Way of creating a Constant",
        href: "/course/1/lesson/11",
        isLocked: true,
      },
      {
        title: "Constants",
        href: "/course/1/lesson/12",
        isLocked: true,
      },
    ],
  },
  {
    id: 3,
    isExpanded: false,
    title: "Week 8-12",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    items: [
      {
        title: "Defining Functions",
        href: "/course/1/lesson/13",
        isLocked: true,
      },
      {
        title: "Function Parameters",
        href: "/course/1/lesson/14",
        isLocked: true,
      },
      {
        title: "Return Values From Functions",
        isPopup: true,
        typePopup: "exam",
        questions: [
          {
            id: 1,
            text: "Among the following states of India, which one has the oldest rock formations in the country?",
            options: ["Assam", "Bihar", "Karnataka", "Uttar Pradesh"],
          },
          {
            id: 2,
            text: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
          },
          {
            id: 3,
            text: "Which language runs in a web browser?",
            options: ["Java", "C", "Python", "JavaScript"],
          },
          {
            id: 4,
            text: "What does CSS stand for?",
            options: [
              "Cascading Style Sheets",
              "Computer Style Sheets",
              "Creative Style Sheets",
              "Colorful Style Sheets",
            ],
          },
          {
            id: 5,
            text: "What year was React first released?",
            options: ["2011", "2013", "2015", "2017"],
          },
        ],
        minuteCount: 7,
      },
      {
        title: "Global Variable and Scope",
        href: "/course/1/lesson/10",
        isLocked: true,
      },
      {
        title: "Newer Way of creating a Constant",
        href: "/course/1/lesson/11",
        isLocked: true,
      },
      {
        title: "Constants",
        href: "/course/1/lesson/12",
        isLocked: true,
      },
    ],
  },
];
