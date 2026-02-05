import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

export const portfolioData = {
    hero: {
        name: "Dedeepya Penumaka",
        title: "Data Science",
        description: "Undergrad CS student skilled in software development & ML, research intern with an IEEE publication, seeking collaborative and challenging roles to grow.",
        socials: [
            { id: 1, icon: FaGithub, link: "https://github.com/dedeepya026", label: "GitHub" },
            { id: 2, icon: FaLinkedin, link: "http://www.linkedin.com/in/dedeepyapenumaka", label: "LinkedIn" },
            { id: 3, icon: FaEnvelope, link: "mailto:penumakadedeepya@gmail.com", label: "Email" },
        ]
    },

    about: {
        text: [
            "I am a Computer Science undergraduate at VIT Chennai with a strong interest in Machine Learning, Deep Learning, and Software Development. I have research experience as a Research Intern, where I worked on predictive healthcare models using various ML and DL techniques.",
            "My project work includes developing an industry-specific dynamic risk index prediction system using ensemble learning, building a full-stack MERN-based URL shortener, and designing an NLP-driven cyberbullying detection system focused on privacy-aware deployment. I am proficient in Python, Java, C/C++. I also have strong foundations in core computer science subjects including DSA, OS, DBMS, and Computer Networks.",
            "I have published an IEEE paper on non-invasive blood glucose monitoring using Terahertz Spectroscopy and earned certifications such as Microsoft Azure AI Fundamentals. Beyond academics, I have held leadership roles as the Treasurer of the Dance Club and as a Management Lead and Marketing Team Member at VIT Chennai. I am actively seeking opportunities in AI/ML, Data Science, and Software Engineering to contribute and grow in collaborative, challenging environments."
        ],
        resumeLink: "https://drive.google.com/file/d/1R4usxCaGA6q8tLrOC20a-z4GiYGGGTA3/view?usp=drive_link"
    },

    skills: [
        {
            category: "Programming Languages",
            items: ["C", "C++", "Java", "Python"]
        },
        {
            category: "Web Development",
            items: ["HTML", "CSS", "JavaScript", "ReactJS", "Node JS", "Express JS"]
        },
        {
            category: "Database Management",
            items: ["SQL", "MySQL", "MongoDB"]
        },
        {
            category: "CS Fundamentals",
            items: ["Data Structures & Algorithms", "Object Oriented Programming", "Operating Systems", "Computer Networks", "Computer Architecture", "Theory of Computation", "Database Management Systems"]
        },
        {
            category: "Machine Learning and AI",
            items: ["Deep Learning", "Neural Networks", "NLP", "Pytorch", "Keras", "NumPy", "Pandas", "TensorFlow", "Scikit-learn", "Matplotlib", "Seaborn", "LLMs"]
        },
        {
            category: "Cloud Computing and Tools",
            items: ["AWS", "Azure", "Git", "Github", "Vercel", "Netlify"]
        },
        {
            category: "Data Analytics",
            items: ["Tableau", "Power BI", "Excel"]
        },
        {
            category: "Others",
            items: ["Linux", "R", "Flask", "Streamlit"]
        },
    ],

    experience: [
        {
            id: 1,
            title: "Research Intern",
            employer: "Dr.Sasithradevi A, Vellore Institute of Technology, Chennai",
            year: "May 2024 - April 2025",
            description: "Engineered a model to predict diabetes using Machine Learning and Deep Learning techniques. Implemented 6 models including LGBM, CatBoost, Lasso, Ridge, Logistic Regression, Random Forest(RF), trained on PIMA Indian Diabetes Dataset and achieved an accuracy of 97.9% with RF."
        }
    ],

    projects: [
        {
            id: 1,
            title: "Industry-Specific Dynamic Risk Index Prediction",
            description: "Built an advanced ensemble-based risk prediction system integrating XGBoost, Random Forest, Gradient Boosting, and Neural Networks to model industry-specific risks using economic indicators. Deployed an interactive tool with real-time predictions and visual risk assessments (0–100 scale) for seven key industries, achieving R² scores between 0.4 and 0.7 across models.",
            techStack: ["Deep Learning", "Machine Learning", "Python"],
            link: "https://github.com/dedeepya026/industry-specific-dynamic-risk-index-prediciton",
            deployment: ""
        },
        {
            id: 2,
            title: "URL Shortener",
            description: "Built a full-stack URL shortener that allows users to convert long URLs into short, shareable links using React for the frontend and Node, Express, MongoDB for backend processing. Implemented API routes for URL shortening and redirection, integrated shortid for unique code generation, and created a clean, responsive UI for smooth user interaction.",
            techStack: ["MongoDB", "ReactJS", "NodeJS", "ExpressJS"],
            link: "https://github.com/dedeepya026/url-shortener",
            deployment: ""
        },
        {
            id: 3,
            title: "Cyberbullying Detection System",
            description: "Designed a real-time cyberbullying detection system using NLP and Machine Learning, leveraging fog-edge computing to minimize data transmission while enhancing privacy. Trained and evaluated 3 ML models (KNN, Logistic Regression, Linear SVC), achieving a peak accuracy of 85%, with Flask-Streamlit integration for seamless deployment.",
            techStack: ["NLP", "Machine Learning", "Streamlit", "Flask"],
            link: "https://github.com/dedeepya026/Cyberbullying-detection-project",
            deployment: ""
        }
    ],

    publications: [
        {
            name: "A Study on Non-invasive Blood Glucose Monitoring using Terahertz Spectroscopy",
            link: "https://ieeexplore.ieee.org/document/11265316",
            description: "Published a paper that explores non-invasive blood glucose monitoring. Was presented at IEEE sponsored CISES-2025 conference at GL University Noida in 2025. Published the paper on Dec 5 2025."
        }
    ],

    education: [
        {
            id: 1,
            school: "Vellore Institute of Technology, Chennai",
            degree: "Bachelor of Science in Computer Science",
            year: "2022 - 2026",
            grade: "GPA: 8.36/10.0"
        },
        {
            id: 2,
            school: "Sri Chaitanya Junior College",
            degree: "Intermediate (Maths, Physics, Chemistry)",
            year: "2020 - 2022",
            grade: "Percentage: 97.7%"
        }
    ],

    certifications: [
        {
            id: 1,
            name: "SQL for Data Science",
            issuer: "UC Davis, Coursera",
            link: "https://coursera.org/share/40726515284469e4c1f79d6cbb09e5a9"
        },
        {
            id: 2,
            name: "Microsoft Certified: Azure AI Fundamentals",
            issuer: "Microsoft",
            link: "https://www.credly.com/badges/1be047b2-d811-4445-b3a0-67faf9a14dae/public_url"
        }
    ],

    achievements: [
        {
            id: 1,
            title: "Presented Research Work at IEEE Conference",
            description: "Link to presentation",
            year: "2025",
            link: "https://drive.google.com/file/d/1tkCfpluWyACvp0p--r2Rita_prfzm9y5/view?usp=sharing"
        },
        {
            id: 2,
            title: "Won Fresher's Ideathon",
            description: "VIT University",
            year: "2022"
        },
        {
            id: 3,
            title: "Cleared PRMO (Pre-Regional Mathematics Olympiad)",
            description: "",
            year: "2019"
        },
        {
            id: 4,
            title: "Worked as Treasurer",
            description: "Dance Club, VIT Chennai",
            year: "2024-2025"
        },
        {
            id: 5,
            title: "Worked as Management Lead",
            description: "Bionary Club, VIT Chennai",
            year: "2023-2024"
        }
    ],

    contact: {
        email: "penumakadedeepya@gmail.com",
        phone: "+91 7075719098"
    }
};
