import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BlogProvider } from "./context/BlogContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BlogProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BlogProvider>
);
