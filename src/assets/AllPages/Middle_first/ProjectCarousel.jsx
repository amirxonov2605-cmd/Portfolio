import { useState } from "react";
import { projectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0); // state для позиции

    const maxIndex = projectsData.length - 3; // ограничение макс индекс

    // Функции для переключения
    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    // Функции для переключения
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Получаем видимые проекты
    const visibleProjects = projectsData.slice(currentIndex, currentIndex + 3);

    return (
        <div>
            {/* Карточки */}
            <div className="flex gap-8">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>

            {/* Стрелки навигации */}
            <div className="flex gap-2 justify-end mt-4">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-gray-200 disabled:opacity-40"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === maxIndex}
                    className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-gray-200 disabled:opacity-40"
                >
                    →
                </button>
            </div>
        </div>
    )
}