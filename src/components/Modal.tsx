import { X } from "lucide-react";
import { ReactNode } from "react";


interface ModalProps {

  setIsOpen: (value: boolean) => void;
  title: string
  children: ReactNode;

}
export function Modal({
  setIsOpen,
  children,
  title
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center ">
      <div className="bg-zinc-900 px-6 py-5 w-[360px]">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">{title}</h1>
          <button className="size-3"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-4 text-zinc-300 hover:text-zinc-600" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}