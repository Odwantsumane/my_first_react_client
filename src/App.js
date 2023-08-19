import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Upload from "./pages/upload";
import Display from "./pages/display";
import NoPage from "./pages/noPage";

function App() {

  return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="allEmployees" element={<Display />} />
            <Route path="uploadEmployees" element={<Upload />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
