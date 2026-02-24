import {
  FaLaptopCode,
  FaHtml5,
  FaServer,
  FaDesktop,
  FaWordpress,
  FaHubspot,
  FaRocket,
  FaTools,
  FaPlus,
} from "react-icons/fa";

const servicesData = [
  {
    slug: "website-development",
    title: "Website Development & Maintenance Services",
    subtitle: "Build Your Dream Website With Us",
    image:
      "https://arrayblocks.net/wp-content/uploads/al_opt_content/IMAGE/www.q5infotech.com//wp-content/uploads/2020/09/website-design-and-development.png.bv.webp",
    description:
      "We create powerful, modern, and high-performance websites that help your business grow online. From design to development and ongoing support — we handle everything professionally.",

    features: [
      {
        title: "Full Website Development",
        text: "Business websites, portfolios, landing pages, company sites & e-commerce.",
        icon: <FaLaptopCode />,
      },
      {
        title: "Frontend Development",
        text: "HTML, CSS, JavaScript, React/Next.js & UI/UX improvements.",
        icon: <FaHtml5 />,
      },
      {
        title: "Backend Development",
        text: "Laravel/Node.js APIs, databases, authentication & admin panels.",
        icon: <FaServer />,
      },
      {
        title: "Web App Development",
        text: "Dashboards, login/signup, wallet & payment gateway integrations.",
        icon: <FaDesktop />,
      },
      {
        title: "WordPress Development",
        text: "WordPress setup, theme customization & plugin integrations.",
        icon: <FaWordpress />,
      },
      {
        title: "HubSpot Services",
        text: "CRM setup, marketing automation, forms, and integrations.",
        icon: <FaHubspot />,
      },
      {
        title: "Optimization Services",
        text: "Speed optimization, SEO setup, bug fixing & security upgrades.",
        icon: <FaRocket />,
      },
      {
        title: "Maintenance & Support",
        text: "Regular updates, backups, monitoring & full technical support.",
        icon: <FaTools />,
      },
      {
        title: "Extra Add-On Services",
        text: "Domain/hosting setup, Google Analytics, email setup & cloud deployment.",
        icon: <FaPlus />,
      },
    ],

    testimonials: [
      {
        name: "John Anderson",
        role: "CEO, TechSolutions",
        text: "TechHubbix transformed our idea into a fully functional website with exceptional speed and performance.",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      },
      {
        name: "Maria Gonzalez",
        role: "Founder, CreativeApps",
        text: "Professional team, clean code, and responsive support. Delivered ahead of schedule.",
        avatar:
          "https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg",
      },
      {
        name: "David Miller",
        role: "CTO, NexaSoft",
        text: "Professional team, clean code, and responsive support. Delivered ahead of schedule.",
        avatar:
          "https://up.yimg.com/ib/th/id/OIP.HoAVdRc6Zn_KoR2Bhu4QuwHaJ5?pid=Api&rs=1&c=1&qlt=95&w=89&h=119",
      },
    ],

    faqs: [
      {
        q: "Do you offer custom website development?",
        a: "Yes! We create fully custom, high-performance websites tailored to your business.",
      },
      {
        q: "Are your websites SEO optimized?",
        a: "Absolutely. Speed, SEO structure, schema & mobile optimization are included.",
      },
    ],
  },
];

export default servicesData;
