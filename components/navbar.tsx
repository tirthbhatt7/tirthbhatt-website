"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, HomeIcon, MessageIcon } from "./icons";

export function NavBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWorkClick = () => {
    setIsOpen(false);
    router.push("/work");
  };

  const handleChatClick = () => {
    setIsOpen(false);
    router.push("/chat");
  };

  const handleHomeClick = () => {
    setIsOpen(false);
    router.push("/");
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
          <Link
            href="/chat"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            AI Chat
          </Link>
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
          <Sheet onOpenChange={setIsOpen} open={isOpen}>
            <SheetTrigger asChild>
              <Button size="sm" variant="outline" type="button">
                <MenuIcon size={20} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                {!isHomePage && (
                  <Button
                    className="w-full justify-start"
                    onClick={handleHomeClick}
                    type="button"
                    variant="outline"
                  >
                    <span className="mr-2">
                      <HomeIcon size={16} />
                    </span>
                    Home
                  </Button>
                )}
                <Button
                  className="w-full justify-start"
                  onClick={handleWorkClick}
                  type="button"
                  variant="outline"
                >
                  Work
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => scrollToSection("approach")}
                  type="button"
                  variant="outline"
                >
                  Approach
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={() => scrollToSection("about")}
                  type="button"
                  variant="outline"
                >
                  About
                </Button>
                <Button
                  className="w-full justify-start"
                  onClick={handleChatClick}
                  type="button"
                  variant="outline"
                >
                  <span className="mr-2">
                    <MessageIcon size={16} />
                  </span>
                  AI Chat
                </Button>
                <Button
                  className="w-full justify-start bg-cyan-500 hover:bg-cyan-600 text-white"
                  onClick={() => scrollToSection("contact")}
                  type="button"
                >
                  Hire me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

