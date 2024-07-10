"use client"
import { Modal } from "@/components/Modal";
import { format } from "date-fns";
import { ArrowRight, Calendar, MapPin, UserPlus2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
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

        <div className="bg-zinc-900 shadow-shape items-center gap-5 pl-4 pr-4 h-16 flex rounded-xl ">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="text-zinc-400 size-7" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              placeholder="Para onde você vai?"
              className="placeholder:text-zinc-400 text-zinc-100 font-normal text-lg bg-transparent w-full focus:outline-none placeholder:text-sm"
            />
          </div>


          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-left w-[240px]"
          >
            <Calendar className="text-zinc-400 size-5" />
            <span
              className="text-lg text-zinc-400 w-40 flex-1"
            >
              {displayedDate || 'Quando'}
            </span>
          </button>


          <button
            onClick={() => setIsGuestsInputOpen(true)}
            disabled={!location || !eventStartAndEndDates}
            className=" flex gap-2 px-5 py-2 bg-lime-300 items-center justify-center rounded-lg text-zinc-950">
            Continuar
            <ArrowRight className="size-4" />
          </button>
        </div>
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

        <p className="text-zinc-500 text-sm font-normal">Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos <a href="#" className="underline text-zinc-300">
          termos de uso</a> e
          <a href="#" className="underline text-zinc-300 ml-1">
            políticas de privacidade
          </a>
          .</p>

      </div>
      {
        isOpen && (
          <Modal
            title="Selecione a data de viagem"
            setIsOpen={setIsOpen}           >
            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </Modal>
        )
      }


    </main>
  );
}
