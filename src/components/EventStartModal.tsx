import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { DateRange, DayPicker } from "react-day-picker";
import { Modal } from "./Modal";
interface EventStartModalProps {
  isOpen: boolean;
  location: string;
  setLocation: (location: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  eventStartAndEndDates: DateRange | undefined;
  setEventStartAndEndDates: (eventStartAndEndDates: DateRange | undefined) => void;
  displayedDate: string | null;
  setIsGuestsInputOpen: (isOpen: boolean) => void;

}

export function EventStartModal({
  eventStartAndEndDates,
  setEventStartAndEndDates,
  isOpen,
  setIsOpen,
  location,
  setLocation,
  displayedDate,
  setIsGuestsInputOpen

}: EventStartModalProps) {
  return (
    <div>
      <div className="bg-zinc-900 shadow-shape items-center gap-5 pl-4 pr-4 h-16 flex rounded-xl ">
        <div className="flex items-center gap-2 flex-1">
          <MapPin className="text-zinc-400 size-4" />
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
          <Calendar className="text-zinc-400 size-4" />
          <span
            className="text-sm text-zinc-400 w-40 flex-1 "
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
      {
        isOpen && (
          <Modal
            title="Selecione a data de viagem"
            setIsOpen={setIsOpen}           >
            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </Modal>
        )
      }
    </div>

  )
}