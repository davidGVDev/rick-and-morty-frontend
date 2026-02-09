import { SearchIcon, StarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <div className="flex flex-col w-full gap-2 pt-3">
          <h1 className="text-center text-[32px] font-bold">
            Ejercició de frontend
          </h1>
          <h2 className="text-center text-[24px] font-bold tracking-wider">
            Base de datos de personajes
          </h2>
        </div>
      </header>
      <main className="flex justify-center items-center">
        <div className="actions w-[60%] h-auto flex flex-row justify-between p-1">
          <div className="search h-auto m-1 p-1 w-[200px] h-[40px] bg-[#F7F7F8] rounded-md flex flex-row justify-between items-center gap-1">
            <div className="icon">
              <SearchIcon className="w-[16px] h-[16px] shrink-0 m-1" />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full h-full bg-transparent outline-none text-sm font-medium"
              />
            </div>
          </div>
          <div
            className="favorites m-1 w-[154px] h-[40px] bg-[#F7F7F8] rounded-md flex flex-row justify-between items-center px-3 gap-2 cursor-pointer"
            onClick={() => navigate("/favorites")}
          >
            <span className="label text-sm font-medium text-gray-900 truncate">
              Mis favoritos
            </span>
            <div className="icon flex shrink-0 w-[32px] h-[32px] rounded-md bg-[#4339F2] items-center justify-center">
              <StarIcon
                className="w-[24px] h-[24px] text-white"
                strokeWidth={3}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
