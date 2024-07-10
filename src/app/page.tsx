
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <main className=" flex justify-center items-center h-screen  bg-[url('../../public/bg.png')] bg-cover ">
      <div className="text-center max-w-3xl px-6 flex flex-col gap-10 ">
        <div className="flex flex-col items-center gap-1.5">
          <Image src='logo.svg' width={172} height={100} quality={100} alt="Logo plann.er" />
          <p className="font-normal text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="bg-zinc-900 shadow-shape items-center gap-5 pl-4 pr-4 h-16 flex rounded-xl ">
          <div className="flex items-center gap-2">
            <MapPin className="text-zinc-400 size-6" />
            <input type="text"
              placeholder="Para onde você vai?"
              className="text-zinc-400 font-normal text-lg bg-transparent w-full focus:outline-none placeholder:text-sm"
            />
            <div className="flex items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                type="text"
                placeholder="Quando?"
                className="text-zinc-400 font-normal text-lg bg-transparent w-full focus:outline-none placeholder:text-sm"
              />

            </div>
            <button className=" flex gap-2 px-5 py-2 bg-lime-300 items-center justify-center rounded-lg text-zinc-950">
              Continuar
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <p className="text-zinc-500 text-sm font-normal">Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos <a href="#" className="underline text-zinc-300">
          termos de uso</a> e
          <a href="#" className="underline text-zinc-300 ml-1">
            políticas de privacidade
          </a>
          .</p>
      </div>
    </main>
  );
}
