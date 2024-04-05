import {
  RouterProvider,
  createHashRouter,
  createMemoryRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageChapitre, {
  loader as chapterLoader,
} from "./pages/PageChapitre.jsx";
import PageError404 from "./components/PageErreur404.jsx";
import CustomErrorBoundary from "./components/CustomErrorBoundary.jsx";
import LivreProvider from "./contexts/LivreProvider.jsx";

const createRouter = import.meta.env.DEV
  ? createHashRouter
  : createMemoryRouter;

const router = createRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chapitre/:chapterId",
    loader: chapterLoader,
    element: <PageChapitre />,
  },
  {
    path: "/*",
    element: <PageError404 />,
  },
]);

function App() {
  return (
    <CustomErrorBoundary>
      <LivreProvider>
        <RouterProvider router={router} />;
      </LivreProvider>
    </CustomErrorBoundary>
  );
}

export default App;
