import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button";
import { fetchData } from "./services/api";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData("/"); // Endpoint on your Express server
        console.log({ result });
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <Button />
    </div>
  );
}

export default App;
