# Rick and Morty — Base de datos de personajes

Aplicación web de frontend que consume [The Rick and Morty API](https://rickandmortyapi.com/) para listar personajes de la serie, marcarlos como favoritos y consultar la lista de favoritos. El estado (personajes y favoritos) se persiste en el navegador.

---

## Descripción de la aplicación

- **Objetivo:** Explorar el catálogo de personajes de Rick and Morty, buscar por nombre, marcar favoritos y ver solo los favoritos en una página dedicada.
- **Fuente de datos:** [The Rick and Morty API](https://rickandmortyapi.com/) (personajes, paginación).
- **Funcionalidades principales:**
  - **Inicio:** Encabezado con título “Base de datos de personajes”, barra de búsqueda y enlace “Mis favoritos” que lleva a la página de favoritos.
  - **Listado de personajes:** Grid de tarjetas (cards) con imagen, nombre y estrella para marcar/desmarcar favorito. Los datos se cargan por página desde el API y se guardan en Redux (con persistencia).
  - **Favoritos:** Página “Mis favoritos” que muestra solo los personajes marcados con la estrella, reutilizando el mismo grid. Incluye botón “Volver” para regresar al inicio.
  - **Persistencia:** Redux Persist guarda el estado (personajes cargados y lista de favoritos) en `localStorage`, de modo que al recargar la página se mantienen los favoritos y, si aplica, la última lista cargada.

---

## Tecnologías

| Tecnología        | Uso principal                          |
|-------------------|----------------------------------------|
| **React 18**      | UI y componentes                       |
| **TypeScript**    | Tipado estático                       |
| **Vite**          | Build y dev server                    |
| **Tailwind CSS v4** | Estilos y diseño responsive          |
| **Redux Toolkit** | Estado global (personajes, favoritos)  |
| **redux-persist** | Persistir estado en localStorage       |
| **React Router DOM v7** | Rutas (/ y /favorites)          |
| **Lucide React**  | Iconos (búsqueda, estrella, home)      |
| **shadcn/ui**     | Componentes UI (Radix, Tailwind)       |

Otras dependencias disponibles en el proyecto: Axios, Formik, Yup, Motion, etc., para ampliar formularios, animaciones o peticiones HTTP si se desea.

---

## Estructura del proyecto

```
src/
├── App.tsx                    # Raíz: Provider (Redux, PersistGate), BrowserRouter
├── main.tsx                   # Punto de entrada (React, App)
├── index.css                  # Estilos globales, Tailwind, variables (fuente Arial, etc.)
├── vite-env.d.ts
├── components/
│   ├── CardCharachter.tsx     # Tarjeta de personaje: imagen, nombre, estrella (toggle favorito)
│   ├── GridListCharacters.tsx # Grid de tarjetas; puede mostrar lista del store o lista pasada por props (ej. favoritos)
│   ├── HeaderComponent.tsx    # Encabezado: título, subtítulo, búsqueda, enlace "Mis favoritos"
│   └── ui/                    # Componentes shadcn/ui (button, input, card, etc.)
├── hooks/
│   └── use-mobile.ts
├── lib/
│   └── utils.ts               # Utilidades (cn, etc.)
├── pages/
│   ├── HomePage.tsx           # Página principal: Header + GridListCharacters (lista completa)
│   └── FavoritesPage.tsx      # "Mis favoritos": título, botón Volver, GridListCharacters con lista de favoritos
├── router/
│   └── AppRouter.tsx          # Rutas: / (Home), /favorites (Favorites), * → redirect /
├── services/
│   └── apiClient.ts           # Cliente HTTP (Axios) si se centralizan llamadas
└── store/
    ├── store.ts               # configureStore, rootReducer, persist, persistor, RootState, AppDispatch
    └── characteresSlce.ts    # Slice: characters, favorites, fetchCharacters (thunk), toggleFavorite
```

---

## Modelo de datos (store)

- **Personaje (`Character`):**  
  `id`, `name`, `status`, `species`, `type`, `gender`, `image`, `origin` (string), `location` (string), `isFavorite` (boolean).
- **Estado del slice `charachteres`:**
  - `characters`: array de personajes cargados desde el API (normalizados con `isFavorite` y `origin`/`location` como string).
  - `favorites`: array de personajes que tienen `isFavorite === true` (se mantiene sincronizado al hacer toggle y al recibir nueva data del API).
  - `isLoading`, `error`: estado del fetch.

La respuesta del API se mapea para añadir `isFavorite: false` y guardar solo `origin.name` y `location.name` como strings en el store.

---

## Rutas

| Ruta          | Página        | Contenido                                                                 |
|---------------|---------------|----------------------------------------------------------------------------|
| `/`           | HomePage      | Header (título, búsqueda, "Mis favoritos") + grid con todos los personajes cargados. |
| `/favorites`  | FavoritesPage | Título "Mis favoritos", botón "Volver" (home), grid solo con personajes favoritos (o mensaje si está vacío). |
| Cualquier otra | —           | Redirección a `/`.                                                         |

---

## Flujos principales

1. **Carga inicial (Home):** Al montar la vista se dispara `fetchCharacters(1)`. Los resultados se guardan en `characters` y, si ya había estado persistido, se conservan los `isFavorite` y se actualiza `favorites` con `characters.filter(c => c.isFavorite)`.
2. **Marcar/desmarcar favorito:** En una card se hace clic en la estrella → `toggleFavorite(id)` actualiza `isFavorite` en `characters` y añade o quita el personaje de `favorites`.
3. **Ver favoritos:** El usuario navega a “Mis favoritos” → FavoritesPage lee `state.charachteres.favorites` y pasa esa lista a `<GridListCharacters characters={favorites} />`, que no hace fetch y solo pinta las cards de esos personajes.
4. **Volver:** En FavoritesPage, “Volver” navega a `/` (HomePage).

---

## Instalación

```bash
npm install
```

---

## Desarrollo

```bash
npm run dev
```

Abre la URL que indique Vite (por ejemplo `http://localhost:5173`).

---

## Build

```bash
npm run build
```

Salida en `dist/`. Para previsualizar el build:

```bash
npm run preview
```

---

## Agregar componentes shadcn/ui

```bash
npx shadcn@latest add <nombre-componente>
```

---

## Referencias

- [The Rick and Morty API](https://rickandmortyapi.com/) — Documentación y endpoints de personajes.
- [Redux Toolkit](https://redux-toolkit.js.org/) — createSlice, createAsyncThunk.
- [React Router](https://reactrouter.com/) — Rutas y navegación.
- [Tailwind CSS](https://tailwindcss.com/) — Clases de utilidad.
- [shadcn/ui](https://ui.shadcn.com/) — Componentes basados en Radix y Tailwind.
