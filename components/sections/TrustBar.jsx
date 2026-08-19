import Container from "@/components/layout/Container";

const trustItems = [
  "Atendimento em todo o Brasil",
  "Conhecimento tributário",
  "Tecnologia e proximidade",
  "Informações mais claras",
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-white">
      <Container>
        <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {trustItems.map((item) => (
            <p
              key={item}
              className="px-5 py-5 text-center text-sm font-medium text-foreground"
            >
              {item}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
