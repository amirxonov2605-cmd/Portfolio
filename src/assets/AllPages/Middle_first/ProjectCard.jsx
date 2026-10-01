export default function ProjectCard({ image, category, title, projectUrl }) {
    return (
        <article className="bg-white flex-1">
            <img src={image} alt={title} className="w-full h-52 object-cover" />
            <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 mb-2">{category}</p>
                <h3 className="text-lg font-medium text-black mb-3">{title}</h3>
                <a
                    href={projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-black hover:underline"
                >
                    View Project <span>→</span>
                </a>
            </div>
        </article>
    )
}
