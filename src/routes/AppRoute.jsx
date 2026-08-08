import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Noticias } from "../pages/Noticias";





export const AppRoute = createBrowserRouter([
    {path:'/',element:<App />,children:[
        {index:true,element:<Home />},
        {path:'Noticias',element:<Noticias />}
    ]}
    
])