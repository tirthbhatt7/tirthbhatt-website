import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function Footer() {
  return (
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
                href="https://github.com/tirthbhatt7"
                target="_blank"
                rel="noopener"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <SiGithub className="h-5 w-5" />
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
  );
}

