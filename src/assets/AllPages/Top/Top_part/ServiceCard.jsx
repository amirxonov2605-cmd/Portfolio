export default function ServiceCard({ icon: Icon, title, description, items }) {
  return (
    <article className="border-t border-neutral-200 pt-6">
      <div className="mb-7 flex size-12 items-center justify-center bg-[#fff1eb] text-neutral-950">
        <Icon aria-hidden="true" size={25} strokeWidth={2.2} />
      </div>
      <h3 className="text-lg font-bold tracking-tight text-neutral-950">{title}</h3>
      <p className="mt-3 min-h-14 max-w-sm text-sm leading-6 text-neutral-600">
        {description}
      </p>
      <ul className="mt-4 space-y-2 text-sm font-medium text-neutral-800">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-1 text-[#ef8060]">■</span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}