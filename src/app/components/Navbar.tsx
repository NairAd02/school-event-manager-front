import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SearchInput from "@/components/inputs/search-input";
import CujaeLogo from "@/components/assets/cujae-logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-primary border-b z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 h-16">
          {/* Logo */}
          <Link href="/">
          CUJAE
            <CujaeLogo />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="flex gap-6 items-center">
            <SearchInput />
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="hidden md:flex gap-10 items-center text-lg">
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>Sobre Nosotros</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink>Contáctanos</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg">
                    Cursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Login Button */}

          {/* Mobile Menu Button */}
          <div className="flex gap-2">
            <Button asChild className="bg-primary text-lg" size={"lg"}>
              <Link href="/login">Login</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
