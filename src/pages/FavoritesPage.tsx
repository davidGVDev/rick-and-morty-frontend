import { HomeIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { GridListCharacters } from "../components/GridListCharacters";

export const FavoritesPage = () => {
  const navigate = useNavigate();
  const favorites = useSelector(
    (state: RootState) => state.charachteres.favorites
  );

  return (
    <>
      <header>
        <div className="flex flex-col w-full gap-2 pt-3">
          <h1 className="text-center text-[32px] font-bold">Mis favoritos</h1>
        </div>
      </header>
      <main className="flex justify-center items-center">
        <div className="actions w-[60%] h-auto flex flex-row justify-between p-1">
          <div
            className="favorites m-1 w-[109px] h-[40px] bg-[#F7F7F8] rounded-md flex flex-row items-center px-3 gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="icon flex shrink-0 w-[32px] h-[32px] rounded-md bg-[#4339F2] items-center justify-center">
              <HomeIcon
                className="w-[24px] h-[24px] text-white"
                strokeWidth={3}
              />
            </div>
            <span className="font-medium text-gray-900">Volver</span>
          </div>
        </div>
      </main>
      <div className="flex justify-center items-center">
        {favorites.length === 0 ? (
          <p className="p-4 text-gray-600">Aún no tienes favoritos.</p>
        ) : (
          <GridListCharacters characters={favorites} />
        )}
      </div>
    </>
  );
};
