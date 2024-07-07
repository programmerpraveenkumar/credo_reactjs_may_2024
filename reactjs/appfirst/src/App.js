import Home from "./Pages/Home";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path:"",element:<Home/>,
	},
	{
		path:"/home",element:<Home/>
	},
	{
		path:"/about",element:<Home/>,
	},
	

]);
export default function App(){
	return (
		<>
		
			<RouterProvider router={router}/>
		</>
	)
}

//npm start to run the react app