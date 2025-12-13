import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { fiterData, apiUrl } from "./Data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);

  //yaha hamne api call karke uske andar ke data ko courses nam ke state me store kar liya hai.

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(output);
        setCourses(output.data);
      } catch (e) {
        toast.error(e.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Filter fiterData={fiterData}></Filter>

      {/* cards ke andar hamne courses ka api data pass kiya hai. */}
      <Cards courses={courses}></Cards>
    </div>
  );
}

export default App;
