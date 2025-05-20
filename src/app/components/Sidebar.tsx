
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
        <div className="flex items-center justify-around m-4">
            
            
            <div className="flex items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={`${navigationMenuTriggerStyle()} mx-2`}>
                                inicio
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <Link href="/docs" legacyBehavior passHref>
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