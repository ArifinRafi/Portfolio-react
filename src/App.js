import './App.css';
import Home from './components/Home';
import About from './components/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './components/Main';
import Skills from './components/Skills';
import Career from './components/Career';

function App() {
  const router = createBrowserRouter(
    [ {
      path:'/', element:<Main></Main>,
      children: [
        {path:'/', element:<Home></Home>},
        {path:'/About', element:<About></About>},
        {path:'/Skills', element:<Skills></Skills>},
        {path:'/Career', element:<Career></Career>}
      ]
    },
    ]
  )
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
