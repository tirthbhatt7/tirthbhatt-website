import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work | Case Studies",
  description:
    "Case studies from Tirth Bhatt's work building reliable test automation, AI testing frameworks, and high-quality release pipelines across FinTech, AI, Energy, and Marketing industries.",
  openGraph: {
    title: "My Work | Case Studies",
    description:
      "Case studies from Tirth Bhatt's work building reliable test automation, AI testing frameworks, and high-quality release pipelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Work | Case Studies",
    description:
      "Case studies from Tirth Bhatt's work building reliable test automation, AI testing frameworks, and high-quality release pipelines.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

