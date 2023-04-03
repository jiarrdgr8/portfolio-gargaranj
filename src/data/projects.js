import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'


export const projects = [
    {
        image: p1,
        title: "Facebuko",
        description: '- a mini social media platform that serves as a parody of Facebook. Anyone can register, make friends, post content, and engage with others on the platform. The design is responsive and the project is built using modern web development technologies, with a frontend developed using React, Redux Toolkit, and Material UI. The backend was developed using Node JS and Express JS and the database is powered by MongoDB. The project uses JSON Web Tokens (JWT) for authentication and authorization, and also employs security measures like Helmet and CORS.',
        demo: 'https://facebuko.vercel.app/',
        github: 'https://github.com/jiarrdgr8/fullstack-SocMed/'
    },
    {
        image: p2,
        title: "AI Image Generator",
        description: "- a web-based application that allows users to generate high-quality images using the power of OpenAI's machine learning algorithms. Built with Vanilla JavaScript and Node.js, the application is designed to be fast, responsive, and easy to use. Users can specify a wide range of options, including image size, color scheme, subject matter, and more, to create their desired image. The application then sends a request to the backend, which calls the OpenAI API to generate the image.",
        demo: 'https://ai-image-generator-fsw2.onrender.com',
        github: 'https://github.com/jiarrdgr8/ai-image-generator'
    },
    {
        image: p3,
        title: "Chad-GPT",
        description: "- an enhanced version of ChatGPT, a chatbot application powered by OpenAI's machine learning algorithms. Built with ReactJS and Node.js, the application allows users to select a specific AI model to chat with. With its dynamic and responsive user interface, ChadGPT is an innovative chatbot application that showcases the power of modern machine learning technology.",
        demo: 'https://chad-gpt-client-chi.vercel.app/',
        github: 'https://github.com/jiarrdgr8/chadGPT'
    },
    {
        image: p4,
        title: "Portolio Website",
        description: '- a responsive showcase of my skills and projects. Built using ReactJS and Tailwind CSS, it features a brief introduction and overview of my skills, experience, and projects. The website includes a functional contact me component and a downloadable CV for visitors to easily access and a light/dark mode toggle.',
        demo: 'https://gargaran.netlify.app/',
        github: 'https://github.com/jiarrdgr8/portfolio-gargaranj'
    },
    {
        image: p5,
        title: "Contact Management App",
        description: "- a pure backend web application that provides an API for managing one's contacts. Built using Node.js and MongoDB, the app uses the bcrypt library for secure password hashing and JWT for authentication. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on their contacts, such as adding new contacts, updating existing ones, and deleting them.",
        demo: 'https://github.com/jiarrdgr8/contact-management-app',
        github: 'https://github.com/jiarrdgr8/contact-management-app'
    },
    // {
    //     image: p6,
    //     title: "Ecommerce Website",
    //     description: "A comprehensive multi-vendor platform designed to provide a seamless and user-friendly shopping experience. The website is built using a powerful technology stack, including ReactJS, Redux Toolkit, TailwindCSS, and Node.js, and features secure authentication and authorization using bcrypt and JWT.",
    //     demo: 'https://github.com/jiarrdgr8/mern-ecommerce-frontend',
    //     github: 'https://github.com/jiarrdgr8/mern-ecommerce-backend'
    // }
  ]

  export default projects