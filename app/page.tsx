"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useReducedMotion } from "framer-motion";
import {
  Gauge,
  Bolt,
  Mail,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Clock,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

// Note: Using client components for animations, but content is static-friendly

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function AnimatedSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <Card className="group hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-cyan-500/10 p-3 group-hover:bg-cyan-500/20 transition-colors">
            <Icon className="h-6 w-6 text-cyan-500" />
          </div>
          <div className="flex-1">
            <div className="text-3xl font-bold tracking-tight">{value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{label}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  outcome,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  outcome: string;
  link?: string;
}) {
  const cardContent = (
    <Card className="group hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{outcome}</p>
        {link && (
          <div className="flex items-center gap-2 text-sm text-cyan-500 group-hover:text-cyan-600 transition-colors">
            Learn more
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

const testimonials = [
  {
    quote:
      "Tirth brought structure to our AI testing. His harness caught issues that would have been impossible to see with manual review alone.",
    author: "Lead AI QA",
    company: "Diabolocom",
  },
  {
    quote:
      "He treated our AI assistant like a critical product. The safety and reliability improvements were immediately visible to our academic team.",
    author: "Lead QA Engineer",
    company: "Syntea (IU)",
  },
  {
    quote:
      "Tirth's test frameworks made complex fraud scenarios repeatable and safe. We gained real confidence in each release of our investigation platform.",
    author: "Senior QA Engineer",
    company: "Mastercard",
  },
  {
    quote:
      "Tirth combines deep testing expertise with clear communication. Clients trust our results because his automation makes the outcomes so reproducible.",
    author: "CEO",
    company: "Testend Ltd.",
  },
];

function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      // Handle selection if needed
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={`${testimonial.company}-${testimonial.author}`}
            className="md:basis-1/2"
          >
            <Card className="border-cyan-500/20 h-full">
              <CardContent className="p-8">
                <p className="text-lg italic text-muted-foreground mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-sm font-medium">
                  — {testimonial.author}, {testimonial.company}
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

export default function Page() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Top-right AI Chat button */}
      {/* <div className="pointer-events-none fixed right-4 top-20 z-50 md:right-8 md:top-24">
        <Button
          asChild
          className="pointer-events-auto"
          size="sm"
          variant="default"
        >
          <Link aria-label="Go to AI Chat" href="/chat">
            AI Chat
          </Link>
        </Button>
      </div> */}

      <NavBar />

      {/* Hero Section */}
      <AnimatedSection className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm">
              <span className="text-cyan-500">QA Engineer</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-cyan-500">SDET</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-cyan-500">AI Testing</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              I build reliable, testable, and scalable release pipelines.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">
              Using robust automation and pragmatic AI tooling, I help teams
              eliminate flaky tests, speed up CI, and ship with confidence.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                <Link href="#work">View work</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#contact">Hire me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Impact Stats */}
      <AnimatedSection
        id="impact"
        aria-labelledby="impact-heading"
        className="container mx-auto px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              id="impact-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Outcomes I deliver
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={fadeUp}>
              <StatCard
                icon={TrendingDown}
                value="-35%"
                label="reduction in prod incidents"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatCard
                icon={Clock}
                value="Faster"
                label="releases and test feedback cycle"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatCard
                icon={TrendingUp}
                value="80%"
                label="coverage of AI use cases"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatCard
                icon={CheckCircle2}
                value="High"
                label="campaign launch confidence"
              />
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Project */}
      <AnimatedSection
        id="work"
        aria-labelledby="work-heading"
        className="container mx-auto px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2
              id="work-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            >
              Featured Project
            </h2>
            <Card className="border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Stabilizing E2E for a high-traffic SaaS
                </CardTitle>
                <CardDescription className="text-base">
                  Rebuilt test architecture with Playwright + resilient
                  selectors, introduced hermetic test data, and parallelized CI.
                  Result: -70% flakiness and 30% faster pipelines.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Playwright</Badge>
                  <Badge variant="outline">GitHub Actions</Badge>
                  <Badge variant="outline">Testcontainers</Badge>
                  <Badge variant="outline">Docker</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/work">
                    View all case studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Selected Work */}
      <AnimatedSection
        aria-labelledby="selected-work-heading"
        className="container mx-auto px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2
                id="selected-work-heading"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Selected Work
              </h2>
              <Button variant="outline" size="sm" asChild>
                <Link href="/work">
                  View all
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="Mastercard UI Testing Framework"
                  description="Playwright-based framework that reduced UI-related production incidents by 35% over two quarters."
                  tags={["Playwright", "TypeScript", "Jenkins"]}
                  outcome="Built comprehensive UI regression suite with Page Object Models, cross-browser coverage, and HTML email reporting."
                  link="/work/mastercard-ui-testing-framework"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="Diabolocom Agent Assist Platform"
                  description="AI testing framework for speech-to-text, summarization, and CRM integration flows."
                  tags={["Python", "Playwright", "AI Testing"]}
                  outcome="Created test harnesses that uncovered compliance gaps in AI summaries before production deployment."
                  link="/work/diabolocom-agent-assist"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="OVO Energy Trading Platform"
                  description="Kubernetes-based test environments enabling high-volume scenarios without production trade limits."
                  tags={["Kubernetes", "Docker", "Python"]}
                  outcome="Built mocked trading services allowing teams to run comprehensive tests in minutes instead of waiting for daily limits."
                  link="/work/ovo-energy-trading-platform"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="WPP Campaign Orchestration"
                  description="End-to-end UI and API testing for campaign workflows across multiple regions."
                  tags={["Playwright", "API Testing", "CI/CD"]}
                  outcome="Reduced UI regression issues and improved confidence for rolling out new features to marketers."
                  link="/work/wpp-campaign-orchestration-ui"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Approach */}
      <AnimatedSection
        id="approach"
        aria-labelledby="approach-heading"
        className="container mx-auto px-6 py-16"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2
              id="approach-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            >
              How I work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A pragmatic three-step framework for building reliable test
              systems
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-3"
          >
            <motion.div variants={fadeUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                    <Gauge className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle>Assess</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Map coverage, find bottlenecks, and quantify flakiness. I
                    analyze your current test suite to identify pain points and
                    measure baseline metrics.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                    <CheckCircle2 className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle>Stabilize</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fix flaky roots, standardize fixtures, hermetic data, and
                    observability. I eliminate sources of instability and build
                    reliable foundations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                    <Bolt className="h-6 w-6 text-cyan-500" />
                  </div>
                  <CardTitle>Scale</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Parallelize, shard, and accelerate with smart selection and
                    AI assistance where it truly helps. I optimize for speed
                    without sacrificing reliability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Social Proof */}
      <AnimatedSection className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              What People Say
            </h2>
          </motion.div>
          <TestimonialsCarousel />
        </div>
      </AnimatedSection>

      {/* About */}
      <AnimatedSection
        id="about"
        aria-labelledby="about-heading"
        className="container mx-auto px-6 py-16"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-6"
            >
              About Myself
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a QA Engineer and SDET who works on automation, AI testing,
              and high reliability systems. I build test frameworks that help
              teams eliminate flaky tests, speed up CI, and ship with
              confidence. My work spans FinTech, AI platforms, Energy, and
              Marketing industries, where I've helped teams reduce production
              incidents, improve test coverage, and accelerate feedback cycles.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline">Playwright</Badge>
              <Badge variant="outline">Cypress</Badge>
              <Badge variant="outline">Python</Badge>
              <Badge variant="outline">TypeScript</Badge>
              <Badge variant="outline">GitHub Actions</Badge>
              <Badge variant="outline">Docker</Badge>
              <Badge variant="outline">Kubernetes</Badge>
              <Badge variant="outline">Testcontainers</Badge>
            </div>
            <div className="flex gap-4">
              <Button
                variant="default"
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                asChild
              >
                <Link href="/chat">Ask AI about Tirth</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Contact CTA */}
      <AnimatedSection
        id="contact"
        aria-labelledby="contact-heading"
        className="container mx-auto px-6 py-16"
      >
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              id="contact-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
            >
              Let&apos;s improve your test pipeline
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Great fit for teams with growing CI costs, flaky suites, or
              monorepo complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white"
                asChild
              >
                <Link href="mailto:tirthbhatt7@gmail.com?subject=Let's%20discuss%20your%20test%20pipeline">
                  <Mail className="mr-2 h-4 w-4" />
                  Book a 20-min call
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="mailto:tirthbhatt7@gmail.com">Email</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
