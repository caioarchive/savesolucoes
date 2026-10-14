import Image from "next/image";

/**
 * @typedef {Object} TeamMember
 * @property {string} name
 * @property {string} role
 * @property {string} image
 * @property {boolean} [placeholder]
 */

/** @type {TeamMember[]} */
// TODO: substituir nomes, cargos e imagens pelos dados reais da equipe Save.
const teamMembers = [
  {
    name: "Nome a confirmar",
    role: "Cargo ou especialidade",
    image: "/brand/save-symbol.png",
    placeholder: true,
  },
  {
    name: "Nome a confirmar",
    role: "Cargo ou especialidade",
    image: "/brand/save-symbol.png",
    placeholder: true,
  },
  {
    name: "Nome a confirmar",
    role: "Cargo ou especialidade",
    image: "/brand/save-symbol.png",
    placeholder: true,
  },
  {
    name: "Nome a confirmar",
    role: "Cargo ou especialidade",
    image: "/brand/save-symbol.png",
    placeholder: true,
  },
];

export default function TeamGrid() {
  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member, index) => (
        <article key={`${member.name}-${index}`}>
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] bg-surface-secondary">
            <Image
              src={member.image}
              alt={
                member.placeholder
                  ? "Imagem do profissional a inserir"
                  : `Foto de ${member.name}`
              }
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={
                member.placeholder
                  ? "object-contain p-16 opacity-20 grayscale"
                  : "object-cover grayscale transition-[filter] duration-300 ease-out group-hover:grayscale-0"
              }
            />
          </div>
          <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-foreground">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">{member.role}</p>
        </article>
      ))}
    </div>
  );
}
