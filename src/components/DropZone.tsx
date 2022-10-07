import "../styles/DropZone.scss"
import { useState } from "react"

const DropZone = (props: any) => {
  const [style, setStyle] = useState({
    outlineColor: "rgba(163, 157, 157, 0.333)",
  })

  const dragOver = (e: any) => {
    e.preventDefault()
    setStyle({
      outlineColor: "white",
    })
  }

  const dragLeave = () => {
    setStyle({
      outlineColor: "rgba(163, 157, 157, 0.333)",
    })
  }

  const cargarArchivo = (ar: any) => {
    const reader = new FileReader()

    reader.onload = (e: any) => {
      props.setFile(e.target.result)
    }
    reader.readAsDataURL(ar)
  }

  const drop = (e: any) => {
    e.preventDefault()
    cargarArchivo(e.dataTransfer.files[0])
    setStyle({
      outlineColor: "rgba(163, 157, 157, 0.333)",
    })
  }

  return (
    <div
      onDragOver={(e) => dragOver(e)}
      onDragLeave={() => dragLeave()}
      draggable
      onDrop={(e) => drop(e)}
      style={style}
      className="file-reader"
    >
      <div className="file-reader__info-area">
        <h4 className="file-reader__info-area--title">Files Here</h4>
        <p className="file-reader__info-area--description">
          Drag and drop the files here or
        </p>
        <input
          className="file-reader__info-area--button"
          type="file"
          name="file"
          onChange={(e: any) => {
            cargarArchivo(e.target.files[0])
          }}
        />
      </div>
    </div>
  )
}

export default DropZone
