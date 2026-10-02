const partners = [
  { name: "Logo Ipsum", mark: "◒" },
  { name: "logoipsum", mark: "✣" },
  { name: "Logo Ipsum", mark: "▰" },
  { name: "logoipsum", mark: "≋" },
];

export default function TrustedBy() {
  return (
    <section aria-label="Selected clients" className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 md:pb-28">
      <p className="text-center text-xs font-medium text-neutral-500">Trusted by</p>
      <ul className="mx-auto mt-7 grid max-w-3xl grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4">
        {partners.map((partner, index) => (
          <li
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center gap-2 text-neutral-700"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {partner.mark}
            </span>
            <span className="text-sm font-bold tracking-tight">{partner.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}