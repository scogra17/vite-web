import { useEffect } from "react";
import "./App.css";
import Button from "./Button";
import { fetchData } from "./services/api";

function App() {
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData("/"); // Endpoint on your Express server
        console.log({ result });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Button />
    </div>
  );
}

export default App;
