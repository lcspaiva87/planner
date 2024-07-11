import { X } from "lucide-react";
import { ReactNode } from "react";


interface ModalProps {
  setIsOpen: (value: boolean) => void;
  title: string
  children: ReactNode;
  subTitle?: string
  width?: string

}
export function Modal({
  setIsOpen,
  children,
  title,
  subTitle,
  width = '360px'
}: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center ">
      <div className={`bg-zinc-900 px-6 py-5 w-[${width}]`}>
        <div className="flex justify-between w-full">
          <div className="flex flex-col text-start gap-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            <h2 className="text-sm text-zinc-400">{subTitle}</h2>
          </div>
          <button className="size-3"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-4 text-zinc-300 hover:text-zinc-600" />
          </button>
        </div>
        {children}
      </div>
    </div >
  )
}