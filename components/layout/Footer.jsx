import Link from "next/link";
import {
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Container from "@/components/layout/Container";
import FadeUp from "@/components/motion/FadeUp";
import Logo from "@/components/ui/Logo";

import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 text-neutral-300">
      <Container>
        <FadeUp className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-6 max-w-xs leading-7 text-neutral-400">
              Soluções contábeis e empresariais com organização, tecnologia e
              atendimento próximo.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Navegação</h3>
            <div className="mt-4 grid gap-3">
              {navigation.slice(1).map((item) => (
                <Link
                  className="text-sm hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Contato</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                className="flex gap-2 hover:text-white"
                href="https://wa.me/558234351890"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
              >
                <MessageCircle size={17} /> (82) 3435-1890
              </a>
              <a
                className="flex gap-2 hover:text-white"
                href="mailto:contato@savesolucoes.com.br"
              >
                <Mail size={17} /> contato@savesolucoes.com.br
              </a>
              <a
                className="flex gap-2 hover:text-white"
                href="https://www.instagram.com/save.solucoes/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
              >
                <Instagram size={17} /> @save.solucoes
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">Onde estamos</h3>
            <p className="mt-4 flex gap-2 text-sm leading-6 text-neutral-400">
              <MapPin size={18} className="shrink-0" />
              Av. Menino Marcelo, 9350, Sala 315
              <br />
              Empresarial Humberto Lobo
              <br />
              Maceió – AL, CEP 57046-000
            </p>
            <a
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
              href="https://meucontador.nibo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
            >
              Área do cliente <ExternalLink size={14} />
            </a>
          </div>
        </FadeUp>
        <div className="flex flex-col gap-4 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Save Soluções. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidade">Privacidade</Link>
            <Link href="/termos-de-uso">Termos de uso</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
