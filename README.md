# File Reader con Drag and Drop

Un proyecto que implementa una zona donde arrastrar imagenes y mostrarlas, tambien incluye un input de tipo file.

## Getting Started

Este proyecto esta creado con create-react-app.
Despues de haberlo clonado debemos correr los siguientes comandos:

```bash
npm install
```

```bash
npm start
```

## Cargar archivos con Drag and Drop y FileReader with React JS

Vamos a usar los eventos de drag and drop para hacer dinámica la zona que recibirá los archivos.
Con los eventos:

- `onDragOver`
- `onDragLeave`
- `onDrop`

### onDragOver()

En en el evento `onDragOver` vamos a cambiar los estilos del contenedor donde vamos a arrastrar el archivo, para indicarle al usuario que esa es la zona donde debe soltar el archivo.
Por defecto los elementos `HTML` traen des-habilitada la opción de arrastrar y soltar items encima, por lo tanto debemos llamar a la función `preventDefault()`, esto va a permitir que podamos usar el evento `onDrop` mas adelante.

```jsx
const dragOver = (e: any) => {
  e.preventDefault()
  setStyle({
    outlineColor: "white",
  })
}
return (
  <div onDragOver={(e) => dragOver(e)} style={style}>
    Files here
  </div>
)
```

### onDragLeave()

En el evento `onDragLeave` solamente vamos a quitar los estilos que el evento `onDragOver` puso al componente:

```jsx
const dragLeave = () => {
  setStyle({
    outlineColor: "rgba(163, 157, 157, 0.333)",
  })
}
return (
  <div
    onDragOver={(e) => dragOver(e)}
    onDragLeave={() => dragLeave()}
    style={style}
  >
    Files here
  </div>
)
```

### onDrop()

En el evento `onDrop` es donde debemos ejecutar el código que cargara el archivo, para eso vamos a utilizar `FileReader`.
Creamos una función que reciba el archivo como parámetro, haga una instancia del `FileReader` y utilice el evento `onload` para guardarlo en un estado con `useState`

```jsx
const [file, setFile] = useState()

const cargarArchivo = (ar) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    setFile(e.target.result)
  }
  reader.readAsDataURL(ar)
}
```

Después creamos una función que llame la función `cargarArchivo()` y le pase el archivo con el `dataTransfer` de `Drag and Drop`, también debemos evitar que abra el archivo en una nueva pestaña con `preventDefault()` . Y por ultimo que formatee los estilos que el evento `onDragOver` activo.

```jsx
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
    onDrop={(e) => drop(e)}
    style={style}
  >
    Files here
  </div>
)
```

### Cargar con input file

Si queremos usar un input solo debemos pasarle la función `guardarArchivo()`
en su evento `onChange`

```jsx
<input
  type="file"
  name="file"
  onChange={(e: any) => {
    cargarArchivo(e.target.files[0])
  }}
/>
```
