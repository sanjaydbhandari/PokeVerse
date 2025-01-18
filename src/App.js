import "./App.css";
import { Link } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
  return (
    <>
      <Link
        to="/"
        className="font-bold tracking-widest text-3xl mt-5 flex justify-center items-center mb-6 text-center"
      >
        PokéVerse - Your Ultimate Pokédex
      </Link>
      <CustomRoutes />
    </>
  );
}

export default App;
