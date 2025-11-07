"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion, useReducedMotion } from "framer-motion";
import {
  Gauge,
  Bolt,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  TrendingUp,
  Clock,
} from "lucide-react";

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
}: {
  title: string;
  description: string;
  tags: string[];
  outcome: string;
}) {
  return (
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
        <p className="text-sm text-muted-foreground">{outcome}</p>
      </CardContent>
    </Card>
  );
}

function NavBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold">
          Tirth Bhatt
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("approach")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Approach
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            size="sm"
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
          >
            Hire me
          </Button>
        </div>
        <div className="md:hidden">
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            size="sm"
            variant="outline"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
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
            className="grid gap-6 sm:grid-cols-3"
          >
            <motion.div variants={fadeUp}>
              <StatCard
                icon={TrendingDown}
                value="-42%"
                label="Flaky tests in 6 weeks"
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatCard icon={TrendingUp} value="+28%" label="CI throughput" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <StatCard
                icon={Clock}
                value="-33%"
                label="95th percentile test time"
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
                  <Link href="#work">
                    Read case study
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
            <h2
              id="selected-work-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-8"
            >
              Selected Work
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="Intelligent test selection for monorepo"
                  description="Reduced CI cost by 22% via change-based test targeting and caching."
                  tags={["Playwright", "GitHub Actions", "Turborepo"]}
                  outcome="Implemented smart test selection that only runs tests affected by code changes, reducing CI costs and execution time."
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="AI-assisted test authoring"
                  description="Cut authoring time 40% with structured prompts and trace-driven retries."
                  tags={["OpenAI", "LangChain", "Tracetools"]}
                  outcome="Built a framework that uses AI to generate test cases from requirements, with human review and validation loops."
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="Speech testing harness for voice analytics"
                  description="Automated TTS → Chromium testing pipeline with WER evaluation for accuracy regressions."
                  tags={["Playwright", "PulseAudio", "Python"]}
                  outcome="Created end-to-end voice testing system that validates speech recognition accuracy across multiple accents and noise scenarios."
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <ProjectCard
                  title="LLM pipeline testing framework"
                  description="Dynamic prompt-driven testing with anomaly detection and sentiment monitoring."
                  tags={["Python", "OpenAI", "Jenkins"]}
                  outcome="Designed comprehensive testing framework for LLM features including hallucination detection and context-match scoring."
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
          >
            <Card className="border-cyan-500/20">
              <CardContent className="p-8">
                <p className="text-lg italic text-muted-foreground mb-4">
                  &ldquo;We went from &lsquo;retry and pray&rsquo; to confident
                  green builds. CI is 30% faster and far less noisy.&rdquo;
                </p>
                <p className="text-sm font-medium">
                  — Head of Engineering, SaaS Platform
                </p>
              </CardContent>
            </Card>
          </motion.div>
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
              About Tirth
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              QA/SDET focused on durable E2E systems, CI optimization, and
              practical AI in testing. I value reliability over hype and help
              teams scale quality without slowing delivery.
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
              <Button variant="outline" asChild>
                <Link href="mailto:tirthbhatt7@gmail.com">Resume</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/chat">Writing</Link>
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

      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <p className="text-sm font-semibold">Tirth Bhatt</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  QA Engineer / SDET
                </p>
              </div>
              <div className="flex items-center gap-6">
                <Link
                  href="mailto:tirthbhatt7@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email Tirth Bhatt"
                >
                  <Mail className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/tirthbhatt"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/tirthbhatt7"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tirth Bhatt. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
