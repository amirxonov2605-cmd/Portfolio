import BlogItem from "./BlogItem";
import { blogsData } from "./BlogsData";

export default function Mid_second() {
    return (
        <section id="blog" className="bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Левая колонка */}
                <div>
                    <p className="text-orange-400 text-sm font-semibold uppercase tracking-[0.3em] mb-4">Blogs</p>
                    <h2 className="text-5xl font-bold mb-6">Latest Blogs</h2>
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:underline">
                        View all <span>→</span>
                    </a>
                </div>

                {/* Список статей */}
                <div>
                    {blogsData.map((blog) => (
                        <BlogItem key={blog.id} {...blog} />
                    ))}
                </div>
            </div>
        </section>
    )
}