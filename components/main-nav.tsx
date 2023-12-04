"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import blackLogo from '../public/kuzzi_black_logo.png';
import whiteLogo from '../public/kuzzi_white_logo.png';
import { useTheme } from "next-themes";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathname = usePathname();
  const params = useParams();
  const { theme } = useTheme();

  let image = blackLogo;
  if (theme === "light") {
    image = whiteLogo;
  }

  const routes = [
    {
      href: `/`,
      label: 'coming soon.',
      active: pathname === `/`,
    }
    /*
    {
      href: `/`,
      label: 'KUZZI.',
      active: pathname === `/`,
    },
   */
  ];
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}    
    >
      <Link
          key={"/"}
          href={"/"}
          className="w-1/12 mt-1"
        >
          <Image src={image} alt="KUZZI Logo"/>
        </Link>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}

    </nav>
  )
}