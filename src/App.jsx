import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import PageChapitre, {
  loader as chapterLoader,
} from "./pages/PageChapitre.jsx";
import PageError404 from "./components/PageErreur404.jsx";
import CustomErrorBoundary from "./components/CustomErrorBoundary.jsx";

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
  {
    path: "/*",
    element: <PageError404 />,
  },
]);

function App() {
  return (
    <CustomErrorBoundary>
      <RouterProvider router={router} />;
    </CustomErrorBoundary>
  );
}

export default App;
