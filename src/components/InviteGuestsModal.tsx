import { ArrowRight, AtSign, Plus, UserPlus2, X } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Modal } from "./Modal";
interface InviteGuestsModalProps {
  emailsToInvite: string[];
  setIsGuestsInputOpen: (isOpen: boolean) => void;
  location: string;
  eventStartAndEndDates: DateRange | undefined;

}
export function InviteGuestsModal({
  emailsToInvite,
  eventStartAndEndDates,
  location,

  setIsGuestsInputOpen
}: InviteGuestsModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="bg-zinc-900 shadow-shape items-center gap-5 pl-4 pr-4 h-16 flex rounded-xl ">
      <div className="flex items-center gap-2 flex-1">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-left w-[240px]"
        >
          <UserPlus2 className="text-zinc-400 size-4" />
          <span
            className="text-sm text-zinc-400 w-40 flex-1 "
          >
            {'Quem estará na viagem?'}
          </span>
        </button>

      </div>

      <button
        onClick={() => setIsGuestsInputOpen(false)}
        disabled={!location || !eventStartAndEndDates}
        className=" flex gap-2 px-5 py-2 bg-lime-300 items-center justify-center rounded-lg text-zinc-950 ">
        Confirmar viagem
        <ArrowRight className="size-4" />
      </button>
      {
        isOpen && (
          <Modal
            width="640px"
            title="Selecionar convidados"
            subTitle="Os convidados irão receber e-mails para confirmar a participação na viagem."
            setIsOpen={setIsOpen}           >
            <div className="flex w-full flex-col">
              <div className="flex flex-wrap w-[596px] gap-2">
                {emailsToInvite.map((email) => (
                  <div key={email} className="px-2.5 py-1.5 flex justify-center gap-2.5 rounded-md bg-zinc-800 items-center">
                    <span className="text-zinc-300">{email}</span>
                    <button>
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-zinc-800" />
              <div className=" rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 flex justify-between mt-2">
                <div className="flex items-center gap-2">
                  <AtSign className="text-zinc-400 size-4" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Digite o e-mail do convidado"
                    className="placeholder:text-zinc-400 text-zinc-100 font-normal text-lg bg-transparent w-full focus:outline-none placeholder:text-sm"
                  />
                </div>
                <button
                  onClick={() => setIsGuestsInputOpen(true)}
                  disabled={!location || !eventStartAndEndDates}
                  className=" flex gap-2 px-5 py-2 bg-lime-300 items-center justify-center rounded-lg text-zinc-950">
                  Convidar
                  <Plus className="size-4" />
                </button>
              </div>
            </div>
          </Modal>
        )
      }
    </div>
  )
}