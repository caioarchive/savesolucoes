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

import { footerNavigation } from "@/data/navigation";

const footerLinkClass =
  "transition-colors duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <Container>
        <FadeUp className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.15fr_1fr] lg:gap-10 lg:py-16">
          <div className="min-w-0">
            <div className="w-fit rounded-sm focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-white">
              <Logo light />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-300">
              Soluções contábeis e empresariais com organização, tecnologia e
              atendimento próximo.
            </p>
            <a
              className={`mt-7 inline-flex items-center gap-2 text-sm ${footerLinkClass}`}
              href="https://www.instagram.com/save.solucoes/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="↗"
            >
              <Instagram size={17} aria-hidden="true" />
              @save.solucoes
            </a>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-sm font-semibold text-white">Navegação</h3>
            <div className="mt-5 grid gap-3">
              {footerNavigation.map((item) => (
                <Link
                  className={`w-fit text-sm ${footerLinkClass}`}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white">Atendimento</h3>
            <div className="mt-5 grid gap-4 text-sm leading-6">
              <a
                className={`flex w-fit items-start gap-3 ${footerLinkClass}`}
                href="https://wa.me/558234351890"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
              >
                <MessageCircle
                  size={17}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />
                (82) 3435-1890
              </a>
              <a
                className={`flex min-w-0 w-fit items-start gap-3 break-all ${footerLinkClass}`}
                href="mailto:contato@savesolucoes.com.br"
              >
                <Mail size={17} className="mt-1 shrink-0" aria-hidden="true" />
                contato@savesolucoes.com.br
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-white">Onde estamos</h3>
            <div className="mt-5 flex gap-3 text-sm leading-6">
              <MapPin size={18} className="mt-1 shrink-0" aria-hidden="true" />
              <address className="not-italic">
                <span className="block">
                  Av. Menino Marcelo, 9350, Sala 315
                </span>
                <span className="block">Empresarial Humberto Lobo</span>
                <span className="block">Maceió - AL, CEP 57046-000</span>
              </address>
            </div>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm">
              <a
                className={`inline-flex items-center gap-2 ${footerLinkClass}`}
                href="https://www.google.com/maps/search/?api=1&query=Av.%20Menino%20Marcelo%2C%209350%2C%20Macei%C3%B3%20AL"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
              >
                Como chegar <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a
                id="acessos-do-cliente"
                className={`inline-flex items-center gap-2 font-medium text-white ${footerLinkClass}`}
                href="https://meucontador.nibo.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="↗"
              >
                Área do cliente <ExternalLink size={14} aria-hidden="true" />
              </a>
              <a
                className={`inline-flex min-h-11 items-center gap-2 leading-6 ${footerLinkClass}`}
                href="https://prosoltecnologia.com.br/LancamentoEventos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Lançamento de eventos da folha</span>
                <ExternalLink
                  size={14}
                  className="shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">(abre em nova aba)</span>
              </a>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-xs text-neutral-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Save Soluções. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link className={footerLinkClass} href="/politica-de-privacidade">
              Privacidade
            </Link>
            <Link className={footerLinkClass} href="/termos-de-uso">
              Termos de uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
