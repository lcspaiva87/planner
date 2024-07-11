"use client"
import { EventStartModal } from "@/components/EventStartModal";
import { format } from "date-fns";
import { ArrowRight, UserPlus2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
export default function Home() {
  const [location, setLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to, "d' de 'LLL"))
    : null


  return (
    <main className=" flex justify-center items-center h-screen  bg-[url('../../public/bg.png')] bg-cover ">
      <div className="text-center max-w-3xl px-6 flex flex-col gap-10 ">
        <div className="flex flex-col items-center gap-1.5">
          <Image src='logo.svg' width={172} height={100} quality={100} alt="Logo plann.er" />
          <p className="font-normal text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>


        <EventStartModal
          displayedDate={displayedDate}
          location={location}
          setIsGuestsInputOpen={setIsGuestsInputOpen}
          setLocation={setLocation}

          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setEventStartAndEndDates={setEventStartAndEndDates}
          eventStartAndEndDates={eventStartAndEndDates}
        />

        {isGuestsInputOpen && (
          <div className="bg-zinc-900 shadow-shape items-center gap-5 pl-4 pr-4 h-16 flex rounded-xl ">
            <div className="flex items-center gap-2 flex-1">
              <UserPlus2 className="text-zinc-400 size-7" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Quem estará na viagem?"
                className="placeholder:text-zinc-400 text-zinc-100 font-normal text-lg bg-transparent w-full focus:outline-none placeholder:text-sm"
              />
            </div>

            <button
              onClick={() => setIsGuestsInputOpen(false)}
              disabled={!location || !eventStartAndEndDates}
              className=" flex gap-2 px-5 py-2 bg-lime-300 items-center justify-center rounded-lg text-zinc-950 ">
              Confirmar viagem
              <ArrowRight className="size-4" />
            </button>
          </div>
        )}
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>

      </div>


    </main>
  );
}
