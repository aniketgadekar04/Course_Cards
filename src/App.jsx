import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  function fxnchange(e) {
    setText(e.target.value);
    console.log(text);
  }

  useEffect(() => {
    console.log("listner added");
    return console.log("listner removed");
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <br />
      <input type="text" onChange={fxnchange} />
    </div>
  );
}

export default App;
