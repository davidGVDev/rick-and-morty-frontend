import { StarIcon } from "lucide-react";

export const CardCharachter = () => {
  return (
    <div className="card w-[260px] h-[294px] bg-white rounded-md m-1 p-1 flex flex-col justify-center items-center pt-2">
      <div className="image w-[240px] h-[240px] shrink-0 bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Character"
          className="w-full h-full max-w-[240px] max-h-[240px] object-cover object-center"
        />
      </div>
      <div className="content w-full h-full flex justify-between items-center p-2">
        <h3 className="text-[14px]">Rick Sanchez</h3>
        <div className="icon flex shrink-0 w-[32px] h-[32px] rounded-full bg-[#F7F7F8] items-center justify-center cursor-pointer">
          <StarIcon
            className="w-[14px] h-[14px] text-[#FFFFF]"
            strokeWidth={2}
            fill="#f7f7f8"  // Al marcar como favorito, el icono se vuelve azul #2D68A2
          />
        </div>
      </div>
    </div>
  );
};
