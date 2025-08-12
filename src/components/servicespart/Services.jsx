// src/components/sections/Services.tsx
import { FaCode, FaServer, FaLayerGroup, FaLink, FaBolt, FaShoppingBag } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="w-10 h-10 text-heading" />,
    title: "Frontend Development",
    description:
      "I build responsive, interactive, and visually appealing web interfaces using React.js, Next.js, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    icon: <FaServer className="w-10 h-10 text-heading" />,
    title: "Backend Development",
    description:
      "I create robust and scalable server-side applications using Node.js, Express, and MongoDB, ensuring secure and efficient data handling.",
  },
  {
    icon: <FaLayerGroup className="w-10 h-10 text-heading" />,
    title: "Full-Stack Web Applications",
    description:
      "From concept to deployment — I develop complete web solutions with seamless integration between frontend and backend.",
  },
  {
    icon: <FaLink className="w-10 h-10 text-heading" />,
    title: "API Integration & Development",
    description:
      "I design and integrate RESTful APIs, connecting your applications with third-party services for enhanced functionality.",
  },
  {
    icon: <FaBolt className="w-10 h-10 text-heading" />,
    title: "Website Optimization",
    description:
      "I optimize website performance, load speed, and SEO to improve user experience and search engine ranking.",
  },
  {
    icon: <FaShoppingBag className="w-10 h-10 text-heading" />,
    title: "E-Commerce Development",
    description:
      "I build secure and scalable online stores with shopping carts, payment gateways, and product management.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          My Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4 text-text">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
