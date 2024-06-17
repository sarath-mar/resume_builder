import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersDashboard from "./Users/Pages/Dashboard/UsersDashboard";
import UsersLogin from "./Users/Pages/Login/UsersLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Template from "./Users/Pages/Templates/Template";
import UserHeader from "./Users/Components/UserHeader";

function App() {
  return (
    <>
      {/* <UserHeader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<UsersLogin />} />
          <Route path="/" element={<Template />} />
          <Route path="/" element={<UsersDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
