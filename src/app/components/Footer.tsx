import { Button } from "@/components/ui/button";
import { CopyrightIcon, Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex items-center justify-between">
            <h3 className="flex items-center p-4"><CopyrightIcon className="m-2"/> 2025 Pizzaria Serra Azul</h3>

            <div className="m-5">
                <Link href="https://api.whatsapp.com/send?phone=5566992044950" target="_blank">
                    <Button className="m-2" variant="outline" size="icon">
                        <Phone />
                    </Button>
                </Link>
                <Link href="https://www.instagram.com/pizzaria_serraazul/" target="_blank">
                    <Button className="m-2" variant="outline" size="icon">
                        <Instagram />
                    </Button>
                
                </Link>
                
            </div>
        </div>
    )
}