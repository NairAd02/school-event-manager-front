import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SearchInput from "@/components/inputs/search-input";
import CujaeLogo from "@/components/assets/cujae-logo";
import { noticies } from "@/lib/data/noticies";
import { ListItem } from "./ListItem/ListItem";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-primary border-b z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 h-16">
          {/* Logo */}
          <Link href="/">
            <CujaeLogo />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="flex gap-6 items-center">
            <SearchInput />
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="hidden md:flex gap-10 items-center text-lg">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-lg">
                    Noticias
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[330px] lg:grid-cols-2 lg:w-[480px] xl:w-[600px] ">
                      {noticies.map((notice, index) => (
                        <ListItem
                          key={index}
                          title={notice.name}
                          href={notice.href}
                        >
                          {notice.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Login Button */}

          {/* Mobile Menu Button */}
          <div className="flex gap-2">
            <Button
              asChild
              className="bg-white hover:bg-secondary text-black text-lg"
              size={"lg"}
            >
              <Link href="/login">Login</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-secondary"
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
