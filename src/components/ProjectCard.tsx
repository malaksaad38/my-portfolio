"use client";

import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import projectsData from "@/components/data/projects.json"; // adjust path
import {BarChart2,} from "lucide-react";

interface ProjectCardProps {
    projectId: string; // ID or num from JSON
}

interface Project {
    num: string;
    title: string;
    desc: string;
    tags: string[];
    impact: string;
    icon: string;
    image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({projectId}) => {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const data = projectsData.find((p) => p.num === projectId);
        if (data) setProject(data);
    }, [projectId]);

    if (!project) return null;

    return (
        <motion.div
            whileHover={{scale: 1.03}}
            whileTap={{scale: 0.97}}
            className="group border-2 border-yellow-500/50 rounded-xl overflow-hidden bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-500/40 transition-all cursor-pointer flex flex-col"
        >
            {/* IMAGE */}
            {project.image && (
                <div className="relative w-full h-48 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            )}

            <div className="p-6 flex flex-col flex-1 justify-between">
                {/* ICON & NUMBER */}
                <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
                        Project {project.num}
                    </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl font-extrabold text-gray-200 mb-2 group-hover:text-yellow-300 transition-colors">
                    {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs md:text-sm text-gray-400 mb-4 flex-1">{project.desc}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-yellow-500/20">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[11px] md:text-xs px-2 py-1 bg-yellow-500/20 text-yellow-200 rounded font-semibold"
                        >
              {tag}
            </span>
                    ))}
                </div>

                {/* IMPACT */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-yellow-300 font-bold">
                    <BarChart2 className="w-4 h-4 md:w-5 md:h-5"/>
                    {project.impact}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
