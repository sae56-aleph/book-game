import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageChapitre, {
  loader as chapterLoader,
} from "./pages/PageChapitre.jsx";

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
  return <RouterProvider router={router} />;
}

export default App;
