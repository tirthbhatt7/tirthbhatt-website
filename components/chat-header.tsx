"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { useWindowSize } from "usehooks-ts";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusIcon, MenuIcon, HomeIcon } from "./icons";
import { useSidebar } from "./ui/sidebar";
import { VisibilitySelector, type VisibilityType } from "./visibility-selector";

function PureChatHeader({
  chatId,
  selectedVisibilityType,
  isReadonly,
}: {
  chatId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
}) {
  const router = useRouter();
  const { open } = useSidebar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { width: windowWidth } = useWindowSize();

  const handleNewChat = () => {
    setIsMenuOpen(false);
    router.push("/chat");
    router.refresh();
  };

  const handleGoHome = () => {
    setIsMenuOpen(false);
    router.push("/");
  };

  const handleGoToWork = () => {
    setIsMenuOpen(false);
    router.push("/work");
  };

  const handleHireMe = () => {
    setIsMenuOpen(false);
    window.location.href = "/#contact";
  };

  return (
    <header className="sticky top-0 flex items-center gap-2 bg-background px-2 py-1.5 md:px-2">
      <SidebarToggle />

      {(!open || windowWidth < 768) && (
        <Button
          className="order-2 ml-auto h-8 px-2 md:order-1 md:ml-0 md:h-fit md:px-2"
          onClick={handleNewChat}
          variant="outline"
        >
          <PlusIcon />
          <span className="md:sr-only">New Chat</span>
        </Button>
      )}

      {!isReadonly && (
        <VisibilitySelector
          chatId={chatId}
          className="order-1 md:order-2"
          selectedVisibilityType={selectedVisibilityType}
        />
      )}

      <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
        <SheetTrigger asChild>
          <Button
            className="order-4 ml-auto h-8 px-2 md:h-fit md:px-2"
            type="button"
            variant="outline"
          >
            <MenuIcon size={20} />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4">
            <Button
              className="w-full justify-start"
              onClick={handleGoHome}
              type="button"
              variant="outline"
            >
              <span className="mr-2">
                <HomeIcon size={16} />
              </span>
              Home
            </Button>
            <Button
              className="w-full justify-start"
              onClick={handleGoToWork}
              type="button"
              variant="outline"
            >
              Work
            </Button>
            <Button
              className="w-full justify-start bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={handleHireMe}
              type="button"
            >
              Hire me
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return (
    prevProps.chatId === nextProps.chatId &&
    prevProps.selectedVisibilityType === nextProps.selectedVisibilityType &&
    prevProps.isReadonly === nextProps.isReadonly
  );
});
