import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ErsielMotors from "./pages/ErsielMotors.jsx";
import ErsielBeauty from "./pages/ErsielBeauty.jsx";
import ErsielDerma from "./pages/ErsielDerma.jsx";
import "./i18n";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/ersiel_motors", element: <ErsielMotors /> },
			{ path: "/ersiel_beauty", element: <ErsielBeauty /> },
			{ path: "/ersiel_derma", element: <ErsielDerma /> },
		],
	},
]);
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
