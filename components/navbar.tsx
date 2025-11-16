"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </Link>
          {isHomePage && (
            <>
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
            </>
          )}
          <Link
            href="/chat"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            AI Chat
          </Link>
          {isHomePage && (
            <Button
              type="button"
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              Hire me
            </Button>
          )}
        </div>
        <div className="md:hidden">
          <Button size="sm" variant="outline" asChild>
            <Link href="/chat">Chat</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

