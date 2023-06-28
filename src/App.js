
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactspage from "./pages/Contactspage";
import {Formpage} from "./pages/Formpage";
import Layout from "./components/Layout";
import { ContactcontextProvider } from "./context/Contactcontext";


function App() {

  return (
    <ContactcontextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="contacts" element={<Contactspage/>}/>
            <Route path="addnewcontact" element={<Formpage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContactcontextProvider>

  );
}

export default App;

