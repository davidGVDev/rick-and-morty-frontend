import { HeaderComponent } from "@/components/HeaderComponent";
import { GridListCharacters } from "@/components/GridListCharacters";

export const HomePage = () => {
  
  return (
    <>
      <HeaderComponent />
      <div className="flex justify-center items-center ">
        <GridListCharacters />
      </div>
    </>
  );
};
