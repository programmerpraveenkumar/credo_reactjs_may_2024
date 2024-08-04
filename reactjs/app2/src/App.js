import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Services from './Pages/Services';
import { About } from './Pages/About';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Provider } from 'react-redux';
import { myStore } from './reduxconfig/config';
const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/service",element:<Services/>},
  {path:"/about",element:<About/>}
 
]);


const client = new ApolloClient({
  uri: 'http://localhost:8080/admin/index', // Replace with your GraphQL API endpoint
  cache: new InMemoryCache()
});
function App() {
  return (
    <div>
      <Provider store={myStore}>
        <RouterProvider router={config}/>   
      </Provider>    
    </div>
  );
}

export default App;
