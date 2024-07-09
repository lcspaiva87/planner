
import Image from "next/image";
export default function Home() {
  return (
    <main className=" flex justify-center items-center h-screen  bg-[url('../../public/bg.png')] bg-cover ">
      <div className="text-center max-w-3xl px-6  ">
        <div className="flex flex-col items-center gap-1.5">
          <Image src='logo.svg' width={172} height={100} quality={100} alt="Logo plann.er" />
          <p className="font-normal text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
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
