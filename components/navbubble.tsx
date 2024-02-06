// components/navBubble.tsx
"use client"

import * as React from "react"
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTriggerHamburger,
  navBubbleTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { ColorModeToggle } from "./color-mode-toggle";

const NavBubble: React.FC = () => {
  return (
    <div className="sticky flex top-2 inset-x-0 items-center justify-center m-4">
      <NavigationMenu className="sticky">
      <NavigationMenuList className="flex w-max bg-gray-200/75 backdrop-filter backdrop-blur-lg rounded-[1.5rem] px-7">
        <NavigationMenuItem>
          <NavigationMenuTriggerHamburger className="bg-transparent" />
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <Link href="/home" legacyBehavior passHref>
            <NavigationMenuLink className={navBubbleTriggerStyle()}>
              <HomeIcon />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <Link href="/profile" legacyBehavior passHref>
            <NavigationMenuLink className={navBubbleTriggerStyle()}>
              <PersonIcon className="hover:color-red hover:h-4"/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent">
          <ColorModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default NavBubble;
