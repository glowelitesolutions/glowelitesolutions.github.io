import { facebook, linkedIn, whatsApp, instagram, handshake, here, ideaSharing, lightAutomation, management, toDo, ticTacToe, greenEarth} from "../assets/icons";
import { christineBrown, stacyWhite, matthewFischer } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#our-solutions", label: "Our Solutions" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact-us", label: "Contact Us" },
];

export const ourSolutions = [
    {
        imgURL: ticTacToe,
        label: "Strategic Integration Consulting",
        subtext: "Discover how to seamlessly combine agritech and biotech processes to develop cutting-edge health products"
    },
    {
        imgURL: lightAutomation     ,
        label: "Product Development Advisory",
        subtext: "From concept to commercialization, we guide you in creating innovative health solutions using agricultural inputs."
    },
    {
        imgURL: greenEarth,
        label: "Sustainability Consulting",
        subtext: "Implement sustainable practices throughout your product sourcing, development, and distribution."
    },
    {
        imgURL: toDo,
        label: "Regulatory Compliance",
        subtext: "Navigate regulatory challenges with our expertise, ensuring your natural health products meet all necessary certifications."
    },
    {
        imgURL: handshake,
        label: "Education and Training",
        subtext: "We provide education and training that links agritech and biotech industries with research to drive innovation."
    },
    {
        imgURL: here,
        label: "Market Entry Consulting",
        subtext: "Develop strategies for launching your agritech-biotech products in new markets, focusing on regulatory compliance and consumer needs."
    },
];

export const testimonials = [
    { 
        imgURL: christineBrown,
        label: "Christine Brown",
        company: "AgriCo Company",
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta."
    },
    { 
        imgURL: stacyWhite,
        label: "Stacy White",
        company: "AgriTech LLC",
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta."
    },
    { 
        imgURL: matthewFischer,
        label: "Matthew Fischer",
        company: "BioTech LLC",
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta."
    },
];

export const statistics = [
    { 
        icon: ideaSharing,
        value: '5', 
        label: 'Customers'
    },
    { 
        icon: handshake,
        value: '7', 
        label: 'Partners'
    },
    { 
        icon: management,
        value: '12', 
        label: 'Solutions'
    },
];

export const contactUs = [
    { 
        label: "Address",
        subtext: "6403 Sierra Bianca Dr, Apt 1720, Houston TX 77083",
        link: "#"
    },
    { 
        label: "Email",
        subtext: "admin@glowelitesolutions.com",
        link: "mailto:admin@glowelitesolutions.com"
    },
    { 
        label: "Phone",
        subtext: "+18325206484",
        link: "tel:+18325206484"
    },
];

export const socialMedia = [
    {
        href: "#",
        src: facebook,
        alt: "facebook logo"

    },
    {
        href: "#",
        src: linkedIn,
        alt: "linkedin logo"

    },
    {
        href: "#",
        src: instagram,
        alt: "instagram logo"

    },
    {
        href: "#",
        src: whatsApp,
        alt: "whatsapp logo"

    },
];
