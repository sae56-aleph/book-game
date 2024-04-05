import {
  RouterProvider,
  createHashRouter,
  createMemoryRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageChapitre, {
  loader as chapterLoader,
} from "./pages/PageChapitre.jsx";
import LivreProvider from "./contexts/LivreProvider.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chapitre/:chapterId",
    loader: chapterLoader,
    element: <PageChapitre />,
  },
]);

function App() {
  return (
    <LivreProvider>
      <RouterProvider router={router} />;
    </LivreProvider>
  );
}

export default App;
