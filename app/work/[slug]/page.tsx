import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getCaseStudyBySlug,
  caseStudies,
  type CaseStudyCategory,
} from "@/data/caseStudies";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | ${study.company}`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | ${study.company}`,
      description: study.summary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | ${study.company}`,
      description: study.summary,
    },
  };
}

function getNextCaseStudy(
  currentSlug: string,
  category?: CaseStudyCategory
): typeof caseStudies[number] | null {
  const filteredStudies = category
    ? caseStudies.filter((s) => s.category === category)
    : caseStudies;
  const currentIndex = filteredStudies.findIndex((s) => s.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === filteredStudies.length - 1) {
    return null;
  }
  return filteredStudies[currentIndex + 1] ?? null;
}

function getPreviousCaseStudy(
  currentSlug: string,
  category?: CaseStudyCategory
): typeof caseStudies[number] | null {
  const filteredStudies = category
    ? caseStudies.filter((s) => s.category === category)
    : caseStudies;
  const currentIndex = filteredStudies.findIndex((s) => s.slug === currentSlug);
  if (currentIndex <= 0) {
    return null;
  }
  return filteredStudies[currentIndex - 1] ?? null;
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const nextStudy = getNextCaseStudy(params.slug, study.category);
  const prevStudy = getPreviousCaseStudy(params.slug, study.category);

  return (
    <main className="min-h-dvh bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/work">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Link>
          </Button>

          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="outline">{study.category}</Badge>
            <Badge variant="secondary">{study.company}</Badge>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            {study.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            {study.headlineOutcome}
          </p>

          {/* Key Metrics */}
          <div className="grid gap-4 sm:grid-cols-3 mb-12">
            {study.keyMetrics.map((metric, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Context */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Context</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.context}
            </p>
          </div>

          <Separator />

          {/* Problem */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Problem and Constraints</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
          </div>

          <Separator />

          {/* Approach */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Approach and Architecture
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.approach}
            </p>
          </div>

          <Separator />

          {/* Implementation */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Implementation Details
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {study.implementation}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Testing Strategy */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Testing Strategy and Automation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.testingStrategy}
            </p>
          </div>

          <Separator />

          {/* Results */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Results and Concrete Numbers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.results}
            </p>
          </div>

          <Separator />

          {/* Learnings */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              What I Learned and How It Applies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.learnings}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Separator className="mb-8" />
          <div className="flex justify-between items-center">
            {prevStudy ? (
              <Button variant="outline" asChild>
                <Link href={`/work/${prevStudy.slug}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous: {prevStudy.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextStudy ? (
              <Button variant="outline" asChild>
                <Link href={`/work/${nextStudy.slug}`}>
                  Next: {nextStudy.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Required for structured data
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: study.title,
            description: study.summary,
            author: {
              "@type": "Person",
              name: "Tirth Bhatt",
            },
            datePublished: "2024",
            about: {
              "@type": "Thing",
              name: study.category,
            },
          }),
        }}
      />
    </main>
  );
}

