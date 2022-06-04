import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alluser from "./alluser/Alluser";
import "./App.css";
import Create from "./create/Create";
import Read from "./read/Read";
import Update from "./update/Update";
import Users from "./users/Users";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Alluser />} />
          <Route path="/users" element={<Users />} />
          <Route path="/newuser" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
