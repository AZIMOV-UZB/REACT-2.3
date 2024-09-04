import { Route, Routes } from "react-router-dom";
import Layout from "./companents/layout/Layout";
import Home from "./pages/home/home";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/auth";
import Admin from "./pages/admin/Admin";
import Profil from "./pages/admin/Profil";
import User from "./pages/admin/User";
import Not from "./companents/not-found/Not";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<Auth />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Not/>}/>
          </Route>
          <Route path="/Admin/*" element={<Admin/>}>
          <Route path="profil" element={<Profil/>} />
          <Route path="user" element={<User/>} />
        </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
