import { Articles } from "./Components/Articles";
import { Header } from "./Components/Header";
import { RoutesContainer } from "./Components/RoutesContainer";
import { UserProvider } from "./contexts/userContext";
import { useState } from "react";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    console.log("User selected:", user);
  };
  return (
    <div className="page-container">
      <UserProvider>
        <Header />
        <RoutesContainer />
      </UserProvider>
    </div>
  );
}

export default App;
