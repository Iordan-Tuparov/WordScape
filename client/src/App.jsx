import "./App.css";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ListProvider } from "./context/listContext";

import FooterComponent from "./components/Footer/FooterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import HomeComponent from "./components/Home/HomeComponent";
import LoginComponent from "./components/Login/LoginComponent";
import RegisterComponent from "./components/Register/RegisterComponent";
import ProfileComponent from "./components/Profile/ProfileComponent";
import CreateComponent from "./components/Create/CreateComponent";

function App() {
  return (
    <AuthProvider>
      <main>
        <HeaderComponent />

        <ListProvider>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/auth/login" element={<LoginComponent />} />
            <Route path="/auth/register" element={<RegisterComponent />} />
            <Route path="/auth/profile" element={<ProfileComponent />} />
            <Route path="/list-create" element={<CreateComponent />} />
          </Routes>
        </ListProvider>

        <FooterComponent />
      </main>
    </AuthProvider>
  );
}

export default App;
