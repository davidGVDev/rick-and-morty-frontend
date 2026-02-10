import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Character } from "@/store/characteresSlce";
import { X } from "lucide-react";

interface ModalCharachterProps {
  character: Character;
}

export const ModalCharachter = ({ character }: ModalCharachterProps) => {
  return (
    <Dialog>
      <DialogTrigger type="button">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full max-w-[240px] max-h-[240px] object-cover object-center cursor-pointer"
        />
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="p-1 m-0 w-[260px] h-auto gap-0"
      >
        <DialogHeader>
          <DialogClose asChild>
            <span className="flex justify-end items-center p-0 m-0">
              <button
                type="button"
                className="flex justify-center items-center gap-1 rounded-md cursor-pointer w-[79px] h-[22px] text-[10px]  bg-[#FFE1E1] text-[#C73A3A] font-bold border-0 hover:no-underline"
              >
                CERRAR
                <X size={14} strokeWidth={4} />
              </button>
            </span>
          </DialogClose>
        </DialogHeader>

        <img
          src={character.image}
          alt={character.name}
          className="w-[240px] h-[240px] mx-auto mt-2 object-cover object-center rounded-md"
        />

        <div className="info w-[240px] mx-auto mt-2 pb-2">
          {/* Nombre */}
          <p className="text-[14px] text-center font-medium text-[#222222]">
            {character.name}
          </p>

          {/* Fila 1: Estado / Género */}
          <div className="mt-1 flex justify-center gap-2">
            <div className="flex justify-center items-center p-1 rounded-full bg-[#BAE6FD]">
              <span className="text-[11px]">
                <span className="font-semibold">Estado:</span> {character.status}
              </span>
            </div>
            <div className="flex justify-center items-center p-1 rounded-full bg-[#D2D7F9]">
              <span className="text-[11px]">
                <span className="font-semibold">Género:</span> {character.gender}
              </span>
            </div>
          </div>

          {/* Fila 2: Especie / Origen */}
          <div className="mt-1 flex justify-center gap-2">
            <div className="flex justify-center items-center p-1 rounded-full bg-[#CFF9DB]">
              <span className="text-[11px]">
                <span className="font-semibold">Especie:</span> {character.species}
              </span>
            </div>
            <div className="flex justify-center items-center p-1 rounded-full bg-[#FBFACD]">
              <span className="text-[11px]">
                <span className="font-semibold">Origen:</span> {character.origin}
              </span>
            </div>
          </div>

          {/* Fila 3: Ubicación (centrado solo) */}
          <div className="mt-1 flex justify-center">
            <div className="flex justify-center items-center p-1 rounded-full bg-[#FCE8D0]">
              <span className="text-[11px]">
                <span className="font-semibold">Ubicación:</span>{" "}
                {character.location}
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
