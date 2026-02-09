# Shell React App

Cascarón base de React listo para clonar y empezar a programar.

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4** (estilos)
- **shadcn/ui** (componentes UI)
- **Redux Toolkit** + **redux-persist** (estado global)
- **React Router DOM v7** (rutas)
- **Axios** (peticiones HTTP)
- **Formik** + **Yup** (formularios y validación)
- **Lucide React** (iconos)
- **Motion** (animaciones)

## Estructura del proyecto

```
src/
├── App.tsx                    # Componente raíz (providers)
├── main.tsx                   # Punto de entrada
├── index.css                  # Estilos globales + Tailwind + shadcn
├── vite-env.d.ts              # Tipos de Vite
├── components/                # Componentes reutilizables
│   ├── ExampleComponent.tsx   # Componente de ejemplo
│   └── ui/                    # Componentes shadcn/ui
│       └── button.tsx
├── hooks/                     # Custom hooks
│   └── use-mobile.ts
├── lib/                       # Utilidades
│   └── utils.ts               # cn() para clases de Tailwind
├── pages/                     # Páginas de la app
│   └── HomePage.tsx
├── router/                    # Configuración de rutas
│   └── AppRouter.tsx
├── services/                  # Servicios API
│   └── apiClient.ts           # Instancia de Axios configurada
└── store/                     # Estado global (Redux Toolkit)
    ├── store.ts               # Configuración del store + persist
    ├── hooks.ts               # useAppDispatch y useAppSelector tipados
    └── exampleSlice.ts        # Slice de ejemplo
```

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Agregar componentes shadcn/ui

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

## Build

```bash
npm run build
```
