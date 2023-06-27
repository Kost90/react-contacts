
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactspage from "./components/Contactspage";
import Formpage from "./components/Formpage";
import Contactsrow from "./ui/Contactsrow";
import Contactsdata from "./components/Contactsdata";

function App() {

  return (
<BrowserRouter>
<Routes>
      <Route path="/" element={<Contactspage/>}>
      {/* <Route path="/" element={<Contactsdata/>}/> */}
      <Route path="/form" element={<Formpage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;

