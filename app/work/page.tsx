"use client";

import Link from "next/link";
import { useState } from "react";
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
import { ArrowRight } from "lucide-react";
import {
  caseStudies,
  getCaseStudiesByCategory,
  type CaseStudyCategory,
} from "@/data/caseStudies";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const categories: CaseStudyCategory[] = [
  "FinTech",
  "AI Testing",
  "Energy",
  "Marketing",
];

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
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CaseStudyCategory | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredStudies = selectedCategory
    ? getCaseStudiesByCategory(selectedCategory)
    : caseStudies;

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <NavBar />
      {/* Hero Section */}
      <AnimatedSection className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              My Work
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">
              Case studies from my work building reliable test automation,
              AI testing frameworks, and high-quality release pipelines across
              FinTech, AI, Energy, and Marketing industries.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Category Filters */}
      <AnimatedSection className="container mx-auto px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              type="button"
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className={
                selectedCategory === null
                  ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                  : ""
              }
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                type="button"
                variant={
                  selectedCategory === category ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies Grid */}
      <AnimatedSection className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-6 sm:grid-cols-2"
          >
            {filteredStudies.map((study) => (
              <motion.div key={study.slug} variants={fadeUp}>
                <Card className="group h-full hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {study.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {study.company}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 space-y-2">
                      {study.highlights.slice(0, 3).map((highlight, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-cyan-500 mt-1">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.techStack.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white"
                        asChild
                      >
                        <Link href={`/work/${study.slug}`}>
                          Read case study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
      <Footer />
    </main>
  );
}

