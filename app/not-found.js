import Button from "@/components/ui/Button";
export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Erro 404
        </p>
        <h1 className="mt-4 text-5xl font-semibold">Página não encontrada.</h1>
        <p className="mt-4 text-muted">
          O endereço informado não existe ou foi alterado.
        </p>
        <Button href="/" className="mt-8">
          Voltar ao início
        </Button>
      </div>
    </main>
  );
}
