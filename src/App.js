import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
  const [word, setWord] = useState('');

  const submitSearchButton = (e) => {
    e.preventDefault();
    console.log(word);

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })

    setWord('')
  };

  console.log(process.env);

  return (
    <div className="App">
      <Header title="Image Gallary" />
      <Search word={word} setWord={setWord} submitButton={submitSearchButton} />
    </div>
  );
}

export default App;
