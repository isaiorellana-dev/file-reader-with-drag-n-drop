import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import DropZone from "./components/DropZone"
import FileWatcher from "./components/FileWatcher"

interface props {
  file: JSX.IntrinsicAttributes
}

function App() {
  const [file, setFile] = React.useState<props>()
  return (
    <div className="App">
      <h1>File Reader App</h1>
      <p>
        {" "}
        <p>
          Made with create-react-app by{" "}
          <a href="https://github.com/isaiorellana-dev">Isaí Orellana</a>
        </p>
      </p>
      <DropZone file={file} setFile={setFile} />
      <FileWatcher file={file} />
    </div>
  )
}

export default App
