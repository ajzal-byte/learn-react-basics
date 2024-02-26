import { useState, useEffect } from 'react';
import { Error, Loader, ProfileCard } from './components';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

function App() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("userCount")) ||1
  );

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const setUserData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${count}`
    );

    const userData = await response.json();
    setUser(userData);
    if (response.ok) setSuccess(true);
    else setSuccess(false);
    setLoading(false);
  };

  useEffect(()=>{
    setUserData();
    localStorage.setItem("userCount", count);
  }, [count]);


  return (
      <div>
        <h1>User ID - {count}</h1>
        {!loading ? (
          success ? (
            <ProfileCard user={user} />
          ) : (
            <Error />
          )
        ) : (
          <Loader />
        )}
        <button className='btn'
        onClick={() => setCount(prevCount => prevCount -1)}
        disabled={count === 1 ? true : false} >
        <GrFormPrevious />
        </button>
        <button className='btn'
        onClick={() => setCount(prevCount => prevCount +1)}>
          <GrFormNext />
        </button>
      </div>
  )
}

export default App
