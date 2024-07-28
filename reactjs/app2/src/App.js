import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './Pages/Services';
import { About } from './Pages/About';
const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/service",element:<Services/>},
  {path:"/about",element:<About/>}
])
function App() {
  return (
    <div>
      <RouterProvider router={config}/>
    </div>
  );
}

export default App;
