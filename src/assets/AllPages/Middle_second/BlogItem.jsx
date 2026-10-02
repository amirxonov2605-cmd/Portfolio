export default function BlogItem({ date, readTime, title, url }) {
    return (
        <article className="py-8 border-b border-gray-700">
            <p className="text-xs text-gray-400 mb-3">{date} · {readTime}</p>
            <h3 className="text-2xl font-medium text-white mb-6 max-w-md">{title}</h3>
            <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:underline">
                Read the article <span>→</span>
            </a>
        </article>
    )
}