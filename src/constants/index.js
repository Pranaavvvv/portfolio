import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ML Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {

  "title": "Guardian School",
  "company_name": "ICSE",
  "iconBg": "#383E56",
  "date": "March 2020 - April 2021",
  "points": [
    "Completed 10th Standard with an outstanding score of 98.20% in the ICSE board exams.",
    "Secured 1st rank in school and was honored with the prestigious ICSE School Toppers Award.",
    "Received the AKS Education Student Award for ranking among the top students in ICSE schools nationwide with a remarkable score."
    ],
  },
  {
   "title": "Royal Junior College",
  "company_name": "HSC",
  "iconBg": "#E6DEDD",
  "date": "Jan 2021 - Feb 2022",
  "points": [
    "Completed high school education (11th and 12th) with an impressive 80% in the HSC board exams.",
    "Achieved a remarkable 98.07 percentile in MHTCET and an 89 percentile in JEE Mains.",
    "Secured an overall rank of 4985 across India and a Home University Rank of 1600 in MHTCET."
    ],
  },
  {
    "title": "Dwarkadas Jivanlal Sanghvi College of Engineering",
  "company_name": "B.Tech in Information Technology",
  "icon": shopify,
  "iconBg": "#383E56",
  "date": "Jan 2022 - Present",
  "points": [
    "Currently pursuing a B.Tech degree in Information Technology with a strong academic performance, maintaining an overall CGPA of 9.4.",
    "Actively exploring Artificial Intelligence and Machine Learning alongside development to expand technical expertise.",
    "Engaged in projects and initiatives to enhance skills in software development and innovative technologies."
    ],
  },
  {
    "title": "Research Intern",
  "company_name": "University of Southern California",
  "icon": meta,
  "iconBg": "#E6DEDD",
  "date": "Jan 2023 - Present",
  "points": [
    "Contributing as a Machine Learning/AI Programming Intern, applying analytical and programming skills to support project development.",
    "Collaborating with a team to analyze data and explore innovative approaches in the research and development field.",
    "Assisting in creating comprehensive reports and summaries, making complex insights accessible for academic discussions and presentations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Pranav D",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Pranav D",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Pranav D",
  },
];

const projects = [
  {
    name: "Nirvana AI",
    description:
      "An advanced mental health platform offering personalized support using AI-powered virtual chatbots. Features include real-time stress assessment, tailored coping strategies, and mental health exercises for improved well-being.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie Recommendation System",
    description:
      "A content-based recommendation system that suggests movies based on user preferences. Integrated with a user-friendly web interface for real-time interaction and efficient handling of large datasets.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
  {
    "name": "LSTM Stock Price Prediction",
    "description": "A deep learning-based system that predicts stock prices using historical data and Long Short-Term Memory (LSTM) neural networks. Features include real-time data visualization, trend forecasting, and interactive charts.",
    "tags": [
        {
            "name": "python",
            "color": "blue-text-gradient"
        },
        {
            "name": "tensorflow",
            "color": "orange-text-gradient"
        },
        {
            "name": "lstm",
            "color": "purple-text-gradient"
        },
        {
            "name": "matplotlib",
            "color": "red-text-gradient"
        },
    ],
    image: stock,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
