import { ArrowRight, UserPlus2 } from "lucide-react";
import { DateRange } from "react-day-picker";
interface SelectguestsProps {
  email: string;
  setEmail: (email: string) => void;
  setIsGuestsInputOpen: (isOpen: boolean) => void;
  location: string;
  eventStartAndEndDates: DateRange | undefined;

}
export function Selectguests({
  email,
  eventStartAndEndDates,
  location,
  setEmail,
  setIsGuestsInputOpen
}: SelectguestsProps) {
  return (
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
  )
}