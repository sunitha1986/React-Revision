import UserProvider from "./context/UserContext";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Login from "./components/Login";

const App = () => {
  return (
    <UserProvider>
      <Navbar />
      <Profile />
      <Login />
    </UserProvider>
  );
};

export default App;
