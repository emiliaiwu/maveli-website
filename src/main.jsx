import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HeaderProvider } from './context/HeaderContext.jsx';
import { BlogProvider } from './context/BlogContext.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
	<BlogProvider>
		<HeaderProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</HeaderProvider>
	</BlogProvider>
);
