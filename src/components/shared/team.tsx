import Image from "next/image";

const teamImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80&fm=webp",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80&fm=webp",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80&fm=webp",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80&fm=webp",
];

export function Team({
  title,
  members,
}: {
  title: string;
  members: readonly { name: string; role: string }[];
}) {
  return (
    <section className="border-b border-border bg-bg-elevated py-20 sm:py-24">
      <div className="container-page">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl bg-surface-2">
                <Image
                  src={teamImages[i % teamImages.length]}
                  alt={member.name}
                  title={member.name}
                  fill
                  className="object-cover grayscale-[15%]"
                  sizes="220px"
                  quality={65}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-text">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
