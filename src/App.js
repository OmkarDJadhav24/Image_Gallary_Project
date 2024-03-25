import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);

  const submitSearchButton = (e) => {
    e.preventDefault();

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // setImages([data, ...images])
        setImages([{ ...data, title: word }, ...images])   // To add new images not replace with older
      })
      .catch((err) => {
        console.log(err);
      })

    setWord('')
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id))
  };

  console.log(process.env);

  return (
    <div className="App">
      <Header title="Image Gallary" />
      <Search word={word} setWord={setWord} submitButton={submitSearchButton} />
      <Container className='mt-4'>
        {images.length ? <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i} className='pb-3'>
              <ImageCard image={image} deleteImage={handleDeleteImage} />
            </Col>
          ))}
        </Row> : <Welcome />}
      </Container>

      {/* <ImageCard image={images[0]} /> */}
    </div>
  );
}

export default App;
