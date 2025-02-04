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
import UserIcon from "@heroicons/react/24/outline/UserIcon";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-primary gradient-bg border-b z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-1 mt-1 gap-4 h-16">
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
              className="bg-white hover:bg-secondary text-black text-lg flex items-center"
              size={"lg"}
            >
              <Link href="/login" className="flex items-center">
                <UserIcon className="h-5 w-5 text-black mr-2" /> {/* Ícono de usuario */}
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
