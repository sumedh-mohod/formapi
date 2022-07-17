import "./App.css";
import FormComp from "./Form";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import AllUser from "./AllUser";
import SingleUser from "./SingleUser";

function App() {
  let  {id}  = useParams();
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<FormComp />}/>
          <Route exact path="/all-users" element={<AllUser />}/>
          <Route exact path="/single-user/:id" element={<SingleUser />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
