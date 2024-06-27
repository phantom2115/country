import "./App.css";
import getCountries from "./api/country";
import CountryList from "./components/CountryList";

function App() {
  getCountries();
  return (
    <>
      <CountryList />
    </>
  );
}

export default App;
