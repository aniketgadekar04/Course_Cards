import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { fiterData, apiUrl } from "./Data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  //yaha hamne api call karke uske andar ke data ko courses nam ke state me store kar liya hai.

  async function fetchData() {
    setLoading(true); //jab tak data araha hai tab tak true ek bar data aagya to niche false kardo.
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(output);
      setCourses(output.data);
    } catch (e) {
      toast.error(e.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter fiterData={fiterData}></Filter>
      </div>
      <div>
        {/* cards ke andar hamne courses ka api data pass kiya hai. */}

        {loading ? <Spinner /> : <Cards courses={courses}></Cards>}

        {/* isme agar loading true hai to spinner dikhao nahito cards dikhao */}
      </div>
    </div>
  );
}

export default App;
