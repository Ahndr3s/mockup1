import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { PublicRouter } from "../pages/routes/PublicRouter";
import { PrivateRoutes } from "./PrivateRoutes";



export const AppRouter = () => {
  
  return (
    <>      
      <Routes> 
        {/* <Route path="/*" element={<PrivateRoutes><PublicRouter/></PrivateRoutes>} /> */}
        <Route path="/*" element={<PublicRouter><PrivateRoutes/></PublicRouter>} />
        <Route path="login" element={<Login />} />
        {/* <Route path="/*" element={<PublicRouter/>} /> */}
      </Routes>
    </>
  );
};
