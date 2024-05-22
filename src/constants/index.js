import linkedinIcon from "/images/social-icons/linkedin.svg";
import githubIcon from "/images/social-icons/github.svg";
import mailIcon from "/images/social-icons/mail.svg";
import projectImg1 from "/images/homepage/projects/CircleCue.png"
import projectImg2 from "/images/homepage/projects/Next-nanny.png"
import projectImg3 from "/images/homepage/projects/Matcheron.png"
import projectImg4 from "/images/homepage/projects/Al-hisab.png"
import projectImg5 from "/images/homepage/projects/Karkonex.png"
import projectImg6 from "/images/homepage/projects/Mmixer.png"
import projectImg7 from "/images/homepage/projects/Muslimmm.png"
import arrowIcon from "/images/homepage/projects/arrow.svg";
import testimonialImg1 from "/images/homepage/testimonials/maxime-loiselle.jpg";
import testimonialImg2 from "/images/homepage/testimonials/salman.jpeg";

export const socialLinks = [
    {
        id: 0,
        iconURL: linkedinIcon,
        linkURL: "https://www.linkedin.com/in/tahabaigdev"
    },

    {
        id: 1,
        iconURL: githubIcon,
        linkURL: "https://github.com/tahabaigdev"
    },

    {
        id: 2,
        iconURL: mailIcon,
        linkURL: "mailto:connectmtb@gmail.com"
    },
]

export const projects = [
    {
        id: 0,
        imgURL: projectImg1,
        title: "CircleCue",
        subTitle: "Social Media Platform",
        details: "Social Media • Design, Development",
        linkURL: "https://www.circlecue.com/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },

    {
        id: 1,
        imgURL: projectImg2,
        title: "Next Nannies",
        subTitle: "Childcare Service Provider",
        details: "Childcare • Design, Development",
        linkURL: "https://nextnannies.com/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },

    {
        id: 2,
        imgURL: projectImg3,
        title: "Matcheron",
        subTitle: "Dating Website",
        details: "Dating • Design, Development",
        linkURL: "https://matcheron.com/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },

    {
        id: 3,
        imgURL: projectImg4,
        title: "Al-Hisab",
        subTitle: "Student Management Solution",
        details: "Ai Generator • Design, Development",
        linkURL: "https://stupendous-piroshki-68a2c1.netlify.app/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },

    {
        id: 4,
        imgURL: projectImg5,
        title: "Karkonex",
        subTitle: "Rent Sell Cars Platform",
        details: "Business • Design, Development",
        linkURL: "https://karkonex.com/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },

    {
        id: 5,
        imgURL: projectImg6,
        title: "Mmixer",
        subTitle: "Muslim Marriage Platform",
        details: "Marriage • Design, Development",
        linkURL: "https://mmixer.app/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },

    {
        id: 6,
        imgURL: projectImg7,
        title: "Muslimmm",
        subTitle: "Muslim Marriage Platform",
        details: "Marriage • Design, Development",
        linkURL: "https://muslimmm.com/",
        iconURL: arrowIcon,
        btnText: "Visit Site"
    },
]

export const testimonials = [
    {
        id: 0,
        imgURL: testimonialImg1,
        title: "Nicholas Shook",
        subTitle: "Attorney, Software Developer",
        des: "Taha is a fantastic UI developer and engineer. He helped our website become ARIA-compliant by enforcing accessibility standards in a thorough, test-driven way. We appreciated his clear communication and his awesome work product in our time spent together. I highly recommend booking Taha for UI needs."
    },

    {
        id: 1,
        imgURL: testimonialImg2,
        title: "Salman A",
        subTitle: "CRM, Zoho Process Automation",
        des: "Did excellent work! very flexible with how things turned out. I would recommend taha and hire in future!"
    },
]

export const navLinks = [
    {
        id: 0,
        text: "PROJECTS",
        arg: "projects"
    },

    {
        id: 1,
        text: "ABOUT",
        arg: "about"
    },

    {
        id: 2,
        text: "CONTACT",
        arg: "contact"
    },
]

