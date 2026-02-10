import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { Character, fetchCharacters } from "../store/characteresSlce";
import { CardCharachter } from "./CardCharachter";


interface GridListCharactersProps {
  characters?: Character[];
}

export const GridListCharacters = ({ characters }: GridListCharactersProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    characters: charactersFromStore,
    isLoading,
    error,
  } = useSelector((state: RootState) => state.charachteres);

  const list = characters ?? charactersFromStore;
  const isFetchingList = characters !== undefined;

  useEffect(() => {
    if (isFetchingList) {
      dispatch(fetchCharacters(1));
    }
  }, [dispatch, isFetchingList]);

  if (isLoading) return <p className="p-4">Cargando personajes...</p>;
  if (error) return <p className="p-4 text-red-600">{error}</p>;

  return (
    <div className="w-[60%] h-auto flex bg-[#F7F7F8] flex-wrap p-4 rounded-md gap-2">
      {list.map((character) => (
            <CardCharachter key={character.id} character={character} />
        
      ))}
    </div>
  );
};
