import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-yellow-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3572A5]" /> },
        { name: "JavaScript", icon: <FaReact className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "SQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Frameworks",
      color: "text-green-400",
      skills: [
        { name: "Django", icon: <FaPython className="w-4 h-4 text-[#092E20]" /> },
        { name: "Django REST", icon: <FaPython className="w-4 h-4 text-[#4B8BBE]" /> },
        { name: "FastAPI", icon: <FaPython className="w-4 h-4 text-[#009688]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MySQL", icon: <SiPostgresql className="w-4 h-4 text-[#00758F]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "SQLite", icon: <SiPostgresql className="w-4 h-4 text-[#003B57]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Technologies",
      color: "text-blue-400",
      skills: [
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E44D26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#264DE4]" /> },
        { name: "JavaScript", icon: <FaReact className="w-4 h-4 text-[#F7DF1E]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & API Integration",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Postman", icon: <BsGrid1X2 className="w-4 h-4 text-orange-400" /> },
        { name: "REST APIs", icon: <SiGraphql className="w-4 h-4 text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Libraries & Automation",
      color: "text-pink-400",
      skills: [
        { name: "BeautifulSoup", icon: <FaPython className="w-4 h-4 text-green-400" /> },
        { name: "Selenium", icon: <FaPython className="w-4 h-4 text-[#43B02A]" /> },
        { name: "Requests", icon: <FaPython className="w-4 h-4 text-[#0072C6]" /> },
        { name: "Pandas", icon: <SiRedux className="w-4 h-4 text-[#150458]" /> },
        { name: "NumPy", icon: <SiFirebase className="w-4 h-4 text-[#013243]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Development Environment",
      color: "text-purple-400",
      skills: [
        { name: "Virtualenv", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "CSV Handling", icon: <FaPython className="w-4 h-4 text-[#5A9FD4]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
