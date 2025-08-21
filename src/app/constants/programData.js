// data/btechData.js

import {
    FaGraduationCap,
    FaClipboardCheck,
    FaBuilding,
    FaFlask,
    FaUserTie,
    FaQuestionCircle
} from "react-icons/fa";

export const ProgramData = {
    btech: {
        hero: {
            title: "Bachelor of Technology (B.Tech)",
            subtitle:
                "Prepare for a successful engineering career with our industry-focused B.Tech program offering specializations in Computer Science, AI, ECE, Civil, and more.",
        },

        about: {
            image: "/images/banner/alumni__banner.jpg",
            heading: "B.Tech Program",
            paragraphs: [
                "B.Tech, offered by Sengol International University, is a four-year full-time program aimed at preparing students with a solid foundation in engineering principles and practical know-how. The course blends theoretical learning with hands-on experience in modern laboratories and industry internships.",
                "Our B.Tech curriculum covers a variety of engineering disciplines including Computer Science, AI, Civil, Mechanical, and ECE, ensuring a diverse and multidisciplinary approach to technical education. Students are mentored by industry-experienced faculty.",
                "Located in a well-connected educational hub, the university offers a serene, green environment ideal for academic growth and innovation.",
            ],
        },

        sections: [
            {
                title: "Eligibility Criteria",
                icon: FaClipboardCheck,
                content: `Candidate must have clearly passed intermediate examination of U.P. Board or 10+2 level examination or its equivalent from any recognized Board/University...`,
                table: [
                    {
                        left: "40% marks for SC/ST Category candidates and",
                        right: "45% marks for SC/ST Category candidates and",
                    },
                    {
                        left: "45% marks for other categories candidates",
                        right: "50% marks for other categories candidates",
                    },
                ],
            },
            {
                title: "Admission Procedure",
                icon: FaGraduationCap,
                content:
                    "Admission Criteria for B.Tech Admission in GNIOT - JEE MAINS Score, UPSEE Score, On line test of GNIOT or Academic performance in 12th standard.",
            },
            {
                title: "Infrastructure",
                icon: FaBuilding,
                content:
                    "The campus of GNIOT is spread over a vast area of 17 acres and is distributed into number of buildings and blocks...",
            },
            {
                title: "Laboratories And Workshops",
                icon: FaFlask,
                content:
                    "This department is equipped with state of art laboratories and workshops with latest technology...",
            },
            {
                title: "Faculty",
                icon: FaUserTie,
                content: [
                    "For any educational and professional institution, the most significant aspect is the quality of faculty...",
                    "The faculty at GNIOT is absorbed from academia and industry offers a diverse talent...",
                    "Guest Speakers from public and private sectors are also invited to the institute...",
                ],
            },
        ],

        faq: {
            title: "Frequently Asked Questions",
            icon: FaQuestionCircle,
            items: [
                {
                    question: "What are the eligibility criteria for B.Tech admission?",
                    answer:
                        "Candidate must have passed intermediate examination... Physics and Mathematics and one optional subject.",
                },
                {
                    question: "What is the admission procedure?",
                    answer:
                        "Admission Criteria for B.Tech Admission in GNIOT - JEE MAINS Score, UPSEE Score...",
                },
                {
                    question: "What specializations are offered in the B.Tech program?",
                    answer:
                        "Our B.Tech curriculum covers Computer Science, AI, Civil, Mechanical, and ECE.",
                },
                {
                    question: "What is the fee structure for the B.Tech program?",
                    answer:
                        "The approximate tuition fee is INR 90,000 per year. Scholarships are available.",
                },
                {
                    question: "Are internships part of the curriculum?",
                    answer:
                        "Yes, including hands-on experience, modern labs, and capstone project.",
                },
            ],
        },
    }
};
  