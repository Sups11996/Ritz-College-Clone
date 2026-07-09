import { useEffect } from "react";
import type { RefObject } from "react";

export const useCloseMenu = (
  isMenuOpen: boolean,
  menuRef: RefObject<HTMLDivElement | null>,
  hamburgerRef: RefObject<HTMLDivElement | null>,
  closeMenu: () => void,
) => {
  useEffect(() => {
    if (!isMenuOpen) return;

    const handlePointerDown = (event: Event) => {
      const target = event.target as Node;

      if (
        menuRef.current?.contains(target) ||
        hamburgerRef.current?.contains(target)
      ) {
        return;
      }

      closeMenu();
    };

    const handleScroll = () => {
      closeMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("touchmove", handlePointerDown);
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("touchmove", handlePointerDown);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, menuRef, hamburgerRef, closeMenu]);
};
