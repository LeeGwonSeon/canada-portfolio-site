import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Rocky Mountain Toure",
    image: "/images/projects/rocky.jpg",
    tags: ["Nature", "Adventure"]
  },
  {
    id: 2,
    title: "Toronto City Guide",
    image: "/images/projects/toronto.jpg",
    tags: ["Urban", "Culture"]
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">My Canada Projects</h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "Nature", "Urban"].map((tab) =>(
          <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full ${activeTab === tab ? "bg-red-600 text-white" : "bg-gray-200 hover:bg-gray-300"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.filter(project => activeTab === "All" || project.tags.includes(activeTab)).map((project) => (
          <motion.div key={project.id} whileHover={{ y: -5 }} className="border rounded-lg overflow-hidden shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-xl">{project.title}</h3>
              <div className="flex gap-2 mt-2">
                {project.tags.map(tag =>(
                  <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;