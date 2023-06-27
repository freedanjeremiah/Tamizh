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
    // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    gssoc,
    qwiklabs,
    lgmsoc,
    aimage,
    openai,
    threejs,
    me,
  } from "../assets";
  
  export const myGithub = "";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Tracks",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "cv",
      title: "CV",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Embedded systems",
      icon: web,
    },
    {
      title: "Airtificial Inteligence",
      icon: mobile,
    },
    {
      title: "Extended Reality",
      icon: backend,
    },
    {
      title: "Dev Services",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      title: "Kaipesi",
      company_name: "From Tamizh",
      icon: gssoc,
      iconBg: "#E6DEDD",
      date: "June 2023 - ongoing",
      points: [
        "Extending the UI to an other level.",
        "Gesture to its max",
        "Litrel tamil meaning 'hands talk'",
      ],
    },
    {
      title: "Embeded systems",
      company_name: "Tamizh",
      icon: qwiklabs,
      iconBg: "#E6DEDD",
      date: "June 2023 - Jun 2021",
      points: [
        "Improvising to the clouds ☁️ ",
         " Infrastructure optimizing",
          "Dev Track",
           "Big Data & Machine Learning Track.",
      ],
    },
    // {
    //   title: "LetsGrowMore Summer of Code (Open Source)",
    //   company_name: "lgmsoc",
    //   icon: lgmsoc,
    //   iconBg: "#E6DEDD",
    //   date: "Jun 2021 - Aug 2021",
    //   points: [
    //     "Learned how to work with open-source projects.",
    //     "Learnt how to maintain a clean coding format, readable by me and others",
    //     " Collaborated on Git and GitHub for open source development.",
    //     "Contributed to Daily-Coding-DS-ALGO-Practice Project by creating pull requests for the project. Tech Stack - C++.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  const myWords = [
    {
      text: "Here you can download my СV by clicking on Download button. I will be glad to our cooperation.",
      name: "Rohit Dey",
      designation: "CSE Student",
      company: "MCKV Institute of Engineering",
      image: me,
    },
  ]

  const projects = [
    {
      name: "Aimage",
      description:
        "A modern image generating web Application to generate images from prompt or your imagination.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "orange-text-gradient",
        },
      ],
      image: aimage,
      website_image: openai,
      source_code_link: "https://github.com/Myself-Rohit-Dey/aimage",
      website_link: "http://myselfrohitdey.000webhostapp.com/"
    },
    
  ];
  
  export { services, technologies, experiences,myWords, testimonials, projects };