import "./App.css";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Nuestros Helados" />}
        />
        <Route
          path="/category/:catid"
          element={<ItemListContainer greeting="Según su sabor" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

      <footer>
        <small>Created by Llarin Gonzalo 2025.</small>
      </footer>
    </BrowserRouter>
  );
}

export default App;