import './App.css'
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";

const route = createBrowserRouter([
	// {"path":"/home",element:<Home/>},
	{"path":"/home2",element:<Home2/>}
]);
export default function App(){
	return (
		<>
			 {/* <Home/>		 */}
			{/* <Home2/> */} 
			<RouterProvider route={route}></RouterProvider>
		</>
	)
}

//npm start to run the react app