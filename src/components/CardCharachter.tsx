import { StarIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import type { Character } from "../store/characteresSlce";
import { toggleFavorite } from "../store/characteresSlce";
import { AppDispatch } from "../store/store";
import { ModalCharachter } from "./ModalCharachter";

interface CardCharachterProps {
  character: Character;
}

export const CardCharachter = ({ character }: CardCharachterProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStarClick = () => {
    dispatch(toggleFavorite(character.id));
    
  };

  return (
    <div className="card w-[260px] h-[294px] bg-white rounded-md m-1 p-1 flex flex-col justify-start items-center pt-2">
      <div className="image w-[240px] h-[240px] shrink-0 bg-gray-200 rounded-md overflow-hidden">
        <ModalCharachter character={character} />
      </div>
      <div className="content w-full flex justify-between items-center p-2">
        <h3 className="text-[14px]">{character.name}</h3>
        <button
          type="button"
          onClick={handleStarClick}
          className="icon flex shrink-0 w-[32px] h-[32px] rounded-full bg-[#F7F7F8] items-center justify-center cursor-pointer border-0"
          aria-label={character.isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <StarIcon
            className="w-[14px] h-[14px]"
            strokeWidth={2}
            fill={character.isFavorite ? "#2D68A2" : "#f7f7f8"}
            stroke={character.isFavorite ? "#2D68A2" : "currentColor"}
          />
        </button>
      </div>
    </div>
  );
};
