"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'experience',
        path: '/experience',
    },
    {
        name: 'research interests',
        path: '/research_interests',
    },
    {
        name: 'education',
        path: '/education',
    },
    {
        name: 'publications',
        path: '/publications',
    },
    {
        name: 'projects',
        path: '/projects',
    },

];


const MobileNav = () => {
    const pathname = usePathname();

    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger> 
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/"></Link>
                <h1 className="text-4xl font-semibold">
                    Nazrul<span className="text-accent">.</span>
                </h1>
            </div>
                
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-6">
                {links.map((link, index)=>{
                return (
                    <Link 
                        href={link.path} 
                        key={index} 
                        className={ `${link.path === pathname && "text-accent border-b-2 border-accent"
                        } text-xl capitalize hover:text-accent transition-all`} 
                    > 
                        {link.name}
                    </Link>
                );
                })}
            </nav>
        </SheetContent> 
    </Sheet>
};

export default MobileNav;