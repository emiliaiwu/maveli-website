import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { RootLayout } from "./layout/RootLayout";
import {
	About,
	Blog,
	BlogpostPage,
	Contact,
	Home,
	Page404,
	Pricing,
	Product,
} from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path='/' element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='pricing' element={<Pricing />} />
					<Route path='product' element={<Product />} />
					<Route path='contact' element={<Contact />} />
					<Route path='blog' element={<Blog />} />
					<Route path='blog/:slug/' element={<BlogpostPage />} />
				</Route>
				<Route path='*' element={<Page404 />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
