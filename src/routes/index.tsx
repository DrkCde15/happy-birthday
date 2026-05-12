import { createFileRoute } from "@tanstack/react-router";
import {
  Car,
  ChevronLeft,
  ChevronRight,
  Flag,
  Fuel,
  Gauge,
  MapPinned,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import { type ComponentType, useEffect, useState } from "react";

import car1 from "@/assets/foto1.jpg";
import car2 from "@/assets/foto2.jpg";
import car3 from "@/assets/foto3.jpg";
import car4 from "@/assets/foto4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Feliz Aniversário! 🏁🎉" },
      {
        name: "description",
        content: "Uma comemoração com tema de carros para a aniversariante!",
      },
    ],
  }),
});

type Icon = ComponentType<{ className?: string }>;

const cars = [
  { src: car1, label: "Acelerando rumo a um novo ano!", spec: "" },
  { src: car2, label: "Brilhando como as luzes da cidade", spec: "" },
  { src: car3, label: "Clássica, atemporal, inesquecível", spec: "" },
  { src: car4, label: "Com estilo e velocidade total!", spec: "" },
];

const pitStops: Array<{ icon: Icon; title: string; text: string }> = [
  {
    icon: Fuel,
    title: "Tanque cheio",
    text: "Energia, risadas e boas histórias para a viagem toda.",
  },
  {
    icon: Wrench,
    title: "Pit stop caprichado",
    text: "Carinho nos detalhes e uma pausa só para comemorar você.",
  },
  {
    icon: MapPinned,
    title: "Rota dos sonhos",
    text: "Novos lugares, caminhos bonitos e liberdade no volante.",
  },
  {
    icon: Trophy,
    title: "Pódio garantido",
    text: "Vitórias grandes, pequenas conquistas e muita coisa boa chegando.",
  },
];

const dashboardStats = [
  { label: "Alegria", value: "100%" },
  { label: "Carinho", value: "V8" },
  { label: "Sorrisos", value: "∞" },
];

function Index() {
  const [idx, setIdx] = useState(0);
  const [turboMode, setTurboMode] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % cars.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="race-shell min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative px-6 pb-20 pt-10 text-center md:pt-14">
        <div className="track-glow" aria-hidden="true" />
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <Flag className="h-4 w-4" />
            Birthday Grand Prix
          </span>
          <span className="hidden items-center gap-2 sm:flex">
            <Car className="h-4 w-4" />
            Grid 01
          </span>
        </div>

        <div className="racing-lights mx-auto mt-9" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-racing-yellow">
          Start your engines
        </p>
        <h1
          className="mx-auto mt-5 max-w-5xl text-5xl font-black leading-none md:text-8xl"
          style={{
            backgroundImage: "var(--gradient-gold)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Feliz Aniversário,
          <br />
          Aniversariante!
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Mais um ano com o pé no acelerador. Que essa nova volta venha com pista livre, luz verde,
          motor feliz e uma chegada digna de campeã.
        </p>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="dashboard-panel text-left">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-racing-yellow">
                  Painel de corrida
                </p>
                <h2 className="mt-2 text-2xl font-black md:text-3xl">Modo festa no painel</h2>
              </div>
              <button
                type="button"
                onClick={() => setTurboMode((value) => !value)}
                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-black uppercase tracking-widest transition hover:scale-105"
                style={{
                  borderColor: "var(--racing-yellow)",
                  color: turboMode ? "var(--racing-yellow)" : "var(--foreground)",
                  boxShadow: turboMode ? "var(--shadow-neon)" : "none",
                }}
              >
                <Sparkles className="h-4 w-4" />
                {turboMode ? "Turbo ligado" : "Ligar turbo"}
              </button>
            </div>

            <div className="mt-7 grid gap-6 sm:grid-cols-[0.85fr_1fr]">
              <div className="speedometer mx-auto">
                <Gauge className="h-10 w-10" />
                <strong>{turboMode ? "300" : "220"}</strong>
                <span>km/h de alegria</span>
              </div>

              <div className="grid content-center gap-3">
                {dashboardStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </span>
                    <strong className="text-xl text-racing-yellow">{stat.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-6 gap-2" aria-label="Conta-giros decorativo">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="h-3 rounded-full"
                  style={{
                    background:
                      i < (turboMode ? 12 : 8)
                        ? i > 8
                          ? "var(--racing-red)"
                          : "var(--racing-yellow)"
                        : "oklch(1 0 0 / 0.12)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="road-lane mx-auto mb-10 max-w-5xl" aria-hidden="true" />
        <div className="mx-auto mb-8 flex max-w-5xl flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-racing-yellow">
              Garagem especial
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-wide md:text-4xl">
              A volta das máquinas
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Cada foto entra como um carro na pista: luz, estilo, potência e uma boa dose de
            comemoração.
          </p>
        </div>

        <div
          className="carousel-shell mx-auto max-w-5xl"
          style={{ boxShadow: "var(--shadow-neon)" }}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {cars.map((c, i) => (
                <div key={i} className="relative min-w-full bg-black">
                  <img
                    src={c.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-xl"
                  />
                  <div className="relative flex h-[360px] items-center justify-center bg-black/35 p-3 md:h-[560px] md:p-5">
                    <img
                      src={c.src}
                      alt={c.label}
                      className="h-full w-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-5 pt-24 md:p-7 md:pt-28">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-racing-yellow">
                      {c.spec}
                    </p>
                    <p className="mt-2 max-w-3xl text-2xl font-black text-white md:text-3xl">
                      {c.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIdx((i) => (i - 1 + cars.length) % cars.length)}
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white shadow-xl backdrop-blur transition hover:scale-110 hover:bg-black/75 md:left-5 md:h-12 md:w-12"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={() => setIdx((i) => (i + 1) % cars.length)}
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white shadow-xl backdrop-blur transition hover:scale-110 hover:bg-black/75 md:right-5 md:h-12 md:w-12"
              aria-label="Próximo"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-racing-yellow">
                Pit stop da sorte
              </p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Checklist para o novo ano</h2>
            </div>
            <div className="finish-line h-14 w-36 rounded-md" aria-hidden="true" />
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {pitStops.map((item) => {
              const IconComponent = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-card/95 p-6 text-center text-card-foreground transition-transform hover:-translate-y-2"
                  style={{ boxShadow: "0 16px 35px -20px oklch(0.7 0.22 25 / 0.6)" }}
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-racing-red text-white">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <Flag className="h-4 w-4 text-racing-yellow" />
          Feito com motor, carinho e pista livre para comemorar. Parabéns!
        </span>
      </footer>
    </main>
  );
}
