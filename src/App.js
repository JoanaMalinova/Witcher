import './App.css';
import Home from './pages/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: ":mediaName",
          element: <Home />
        }
      ]
    },

  ])

  return (
    <RouterProvider router={router}></RouterProvider>

  )
}

export default App;
