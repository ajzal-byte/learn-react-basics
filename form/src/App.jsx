import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showName, setShowName] = useState(false);
  const nameRef = useRef();

  const handleChange = () => {
    setError('');
    setName(nameRef.current.value);
    setShowName(false);
  };

  const handleFocus = ()=>{
    nameRef.current.focus();
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const invalidCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
    const isInvalid = invalidCharacters.test(name);

    if(isInvalid || name.trim() !== name || name.length === 0) return setError('Invalid name');

    setShowName(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label onClick={handleFocus}>
          Enter your name:
          </label>
        <input ref={nameRef} type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p className="error_message">{error ? error : ""}</p>
      <p className="success_message">{showName ? name : ""}</p>
    </div>
  );
}

export default App;
