import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate
          loading={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-4 text-gray-600">Cargando...</p>
              </div>
            </div>
          }
          persistor={persistor}
        >
          <AppRouter />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};
