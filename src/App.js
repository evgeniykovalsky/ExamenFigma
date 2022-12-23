import { BrowserRouter,Routes,Route } from "react-router-dom";

import Main from "./components/Main";
import MainCatalogCoffee from "./components/MainCatalogCoffee";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route index element={<Main/>}/>
        <Route path="catalogCoffe" element={<MainCatalogCoffee/>}/>
      </Routes>
   </BrowserRouter>
  
  );
}

export default App;
