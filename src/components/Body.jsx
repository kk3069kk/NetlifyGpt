import { createBrowserRouter } from "react-router-dom";
import Login from "./Login.jsx";
import Browse from "./browse.jsx";
import { RouterProvider } from "react-router-dom";
import Reactking from "./Reactking.jsx";



const Body = () => {
 
  const appRouter = createBrowserRouter([
    {
       path:"/",
       element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/reactking",
      element:<Reactking/>
    }
  ])


  return (
    <div>
      <RouterProvider router={appRouter}/>
      </div>
  )
}

export default Body;