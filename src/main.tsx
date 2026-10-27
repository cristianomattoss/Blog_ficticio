import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//routes
import Home from "./routes/Home.tsx";
import NewPost from "./routes/NewPost.tsx";
import Post from "./routes/Post.tsx";
import Admin from "./routes/Admin.tsx";
import EditPost from "./routes/EditPost.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/new", element: <NewPost /> },
        { path: "/posts/:id", element: <Post /> },
        { path: "/Admin", element: <Admin /> },
        { path: "/posts/edit/:id", element: <EditPost /> },
      ],
    },
  ],
  { basename: "/Blog_ficticio" },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
