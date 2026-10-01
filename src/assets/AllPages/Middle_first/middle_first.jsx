import ProjectCarousel from "./ProjectCarousel"

export default function Mid_first() {
    return (
        <section className="bg-linear-to-b from-white from-60% to-black to-60% pb-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Заголовок с кнопкой */}
                <div className="flex justify-between items-start pt-16 mb-12">
                    <div>
                        <p className="text-purple-500 text-sm font-semibold uppercase tracking-[0.3em] mb-4">Projects</p>
                        <h1 className="text-5xl font-bold leading-tight text-black">
                            I bring results.<br />My clients are proof.
                        </h1>
                    </div>
                    <button className="bg-black text-white text-sm px-6 py-3 hover:bg-gray-800">
                        View all projects
                    </button>
                </div>

                {/* Карусель */}
                <ProjectCarousel />
            </div>
        </section>
    )
}
