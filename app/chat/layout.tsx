import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask AI about Tirth",
  description:
    "Ask Tirth's AI assistant about his work, skills, experience, and case studies. Perfect for hiring managers and recruiters.",
  openGraph: {
    title: "Ask AI about Tirth",
    description:
      "Ask Tirth's AI assistant about his work, skills, experience, and case studies.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ask AI about Tirth",
    description:
      "Ask Tirth's AI assistant about his work, skills, experience, and case studies.",
  },
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

