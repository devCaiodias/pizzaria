import Image from "next/image"
import logo from "../../../public/logopizza.png"

export default function Cardapio() {
    return (
        <div id="cardapio" className="text-center m-12">
            <h1 className="font-bold text-4xl">Cardápio</h1>
            <h2 className="font-semibold text-3xl">Nossa <span className="text-yellow-300">Pizzas</span></h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-7 mt-19">
                <div className=" border-2 border-gray-500 hover:border-black hover:animate-pulse rounded-2xl p-5 m-5">
                    <Image src={logo} alt="pizaa" width={200} className="m-auto"  />
                    <h2 className="font-bold m-4">Pizza</h2>
                    <p className="text-center font-semibold">Mussarela, frango, milho, tomate, catupiry e orégano. </p>
                    <p className="m-2 font-extrabold text-2xl">R$35.00</p>
                </div>
                <div className=" border-2 border-gray-500 hover:border-black hover:animate-pulse rounded-2xl p-5 m-5">
                    <Image src={logo} alt="pizaa" width={200} className="m-auto"  />
                    <h2 className="font-bold m-4">Pizza</h2>
                    <p className="text-center font-semibold">Mussarela, frango, milho, tomate, catupiry e orégano. </p>
                    <p className="m-2 font-extrabold text-2xl">R$35.00</p>
                </div>
                <div className=" border-2 border-gray-500 hover:border-black hover:animate-pulse rounded-2xl p-5 m-5">
                    <Image src={logo} alt="pizaa" width={200} className="m-auto"  />
                    <h2 className="font-bold m-4">Pizza</h2>
                    <p className="text-center font-semibold">Mussarela, frango, milho, tomate, catupiry e orégano. </p>
                    <p className="m-2 font-extrabold text-2xl">R$35.00</p>
                </div>

            </div>
        </div>
    )
}