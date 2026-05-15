import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowDown, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/servicesData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Services`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 h-24 md:h-34 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground hover:text-foreground -ml-2">
            <Link href="/#services">
              <ArrowLeft className="size-3.5" />
              Back to services
            </Link>
          </Button>
          <Badge variant="secondary" className="gap-1.5 text-xs">
            <span>{service!.icon}</span>
            {service!.title}
          </Badge>
        </div>
      </header>

      <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service!.image} alt={service!.title} fill priority className="object-cover object-center" style={{ filter: "brightness(0.25)" }} />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-r from-background/50 via-transparent to-transparent" />
        </div>
        <div className="absolute left-12 bottom-0 w-px h-32 bg-linear-to-b from-primary/40 to-transparent" />
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6 pb-20 md:pb-28">
          <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-4">Our Services</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-5">{service!.title}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg mb-10">{service!.tagline}</p>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="rounded-full gap-2">
              <a href="#features">Explore service <ArrowDown className="size-4" /></a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground rounded-full">
              <Link href="/contact">Get a proposal <ArrowRight className="size-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
            <div className="space-y-3">
              <span className="text-5xl leading-none block">{service!.icon}</span>
              <p className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-medium">Overview</p>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl">{service!.description}</p>
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-3">What&apos;s included</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need, <span className="text-muted-foreground font-light italic">nothing you don&apos;t</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-border border border-border rounded-xl overflow-hidden">
            {service!.features.map((feat, i) => (
              <div key={i} className="p-7 bg-card hover:bg-accent/30 transition-colors duration-300 group">
                <span className="text-[11px] font-mono text-muted-foreground/40 mb-4 block tracking-wider">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-sm font-semibold text-card-foreground mb-2.5 group-hover:text-primary transition-colors duration-200">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A process built for <span className="text-muted-foreground font-light italic">results</span></h2>
          </div>
          <div className="max-w-2xl">
            {service!.process.map((step, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center pt-0.5">
                  <div className="size-9 rounded-full border border-border flex items-center justify-center text-[11px] font-mono text-muted-foreground flex-shrink-0 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-accent/50 transition-all duration-300">
                    {String(step.step).padStart(2, "0")}
                  </div>
                  {i < service!.process.length - 1 && <div className="w-px flex-1 min-h-10 bg-border my-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium mb-3">Explore more</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Other services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.filter((s) => s.slug !== service!.slug).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:bg-accent/40 hover:border-primary/30 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">{s.title}</span>
                </div>
                <MoveUpRight className="size-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <div className="relative rounded-2xl border border-border bg-card p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05)_0%,transparent_65%)]" />
          <Badge variant="outline" className="mb-6 text-xs tracking-wider uppercase">Ready to get started?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Let&apos;s build something <span className="text-muted-foreground font-light italic">great together</span></h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto mb-10 leading-relaxed">Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored proposal.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full gap-2 px-8">
              <Link href="/contact">Start a project <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-muted-foreground rounded-full">
              <Link href="/#services">← View all services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}