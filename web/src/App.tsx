import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ImageUploader from './ImageUploader';

function App() {
  const [count, setCount] = useState(0)


// Define a function to handle image uploads
const handleImageUpload = (image: File) => {
  // Do something with the uploaded image file, such as sending it to a server or storing it in a database
};

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>web/src/App.tsx</code> and save to test HMR
        </p>
        <div>
          <ImageUploader onImageUpload={handleImageUpload} />
          {/* renders the ImageUploader component, passing the handleImageUpload function as a prop  */}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
