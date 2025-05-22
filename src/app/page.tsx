import Image from "next/image";
import logo from '../../public/logopizza.png'
import Sidebar from "./components/Sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";
import Cardapio from "./components/Cardapio";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div id="home" className="grid min-h-svh md:grid-cols-2">
      <div className="relative bg-img hidden bg-muted lg:block">
        <Image
          src={logo}
          alt="Image"
          className="absolute w-24 m-4"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <Sidebar />
        <Separator />

        <div className="w-1/2 flex flex-col justify-center items-start p-16">
        <h1 className="text-5xl font-bold w-lg leading-tight text-black">
          O sabor, <br />
          que vai até<span className="text-red-600"> você</span>
        </h1>
        <p className="mt-6 text-base text-gray-700">
          O melhor serviço de entrega de comida da cidade!
        </p>
        <div className="flex items-center">
          <Link href="#cardapio">
            <Button className="mt-6 mr-4 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all flex items-center gap-2">
              Ver Cardápio
              <span className="text-xl">→</span>
            </Button>
          </Link>
          <Button variant="link" className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all flex items-center gap-2">
            <PhoneCall /> <Link href="https://api.whatsapp.com/send?phone=5566992044950" target="_blank">(66) 99204-4950</Link>
          </Button>
          
        </div>
      </div>
      </div>
    </div>
    <Cardapio /> 
    <Separator />
    <Footer />
    
    </>

  );
}
