
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCallIcon } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="flex items-center md:justify-between justify-start m-4 w-full">
            
            
            <div className="flex items-center justify-between">
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="#home" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} mx-2`}>
                                inicio
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="#" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} mx-2`}>
                                Pedidos
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} mx-2`}>
                                Contato
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Button className="cursor-pointer">
                <PhoneCallIcon /> Peça aqui
            </Button>

        </div>
    ) 
}