import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// Tipo que usamos en la app (respuesta de la API + isFavorite)
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  isFavorite: boolean;
  origin: string;
  location: string;
}

// Respuesta del API (solo lo que usamos)
interface ApiCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
}

interface ApiResponse {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: ApiCharacter[];
}

interface CharactersState {
  characters: Character[];
  favorites: Character[];
  isLoading: boolean;
  error: string | null;
}

const BASE_URL = "https://rickandmortyapi.com/api/character";


export const fetchCharacters = createAsyncThunk<
  Character[],
  number | void,
  { rejectValue: string }
>("charachteres/fetchCharacters", async (page = 1, { rejectWithValue }) => {
  const res = await fetch(`${BASE_URL}?page=${page}`);
  if (!res.ok) return rejectWithValue("Error al cargar personajes");
  const data: ApiResponse = await res.json();
  // Mapear la respuesta a nuestro tipo y añadir isFavorite
  return data.results.map((c) => ({
    id: c.id,
    name: c.name,
    status: c.status,
    species: c.species,
    type: c.type,
    gender: c.gender,
    image: c.image,
    isFavorite: false,
    origin: c.origin.name,
    location: c.location.name,
  }));
});

const charachteresSlice = createSlice({
  name: "charachteres",
  initialState: {
    characters: [],
    favorites: [],
    isLoading: false,
    error: null,
  } as CharactersState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const char = state.characters.find((c) => c.id === action.payload);
      if (char) char.isFavorite = !char.isFavorite;
      if (char?.isFavorite) {
        state.favorites.push(char);
      } else {
        state.favorites = state.favorites.filter((c) => c.id !== action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        // Mantener isFavorite de personajes que ya estaban en el estado (persist)
        state.characters = action.payload.map((c) => {
          const existing = state.characters.find((x) => x.id === c.id);
          return { ...c, isFavorite: existing?.isFavorite ?? false };
        });
        state.favorites = state.characters.filter((c) => c.isFavorite);
        
        state.error = null;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Error desconocido";
      });
  },
});

export const { setCharacters, setIsLoading, setError, toggleFavorite } =
  charachteresSlice.actions;

export default charachteresSlice.reducer;
