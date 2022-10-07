import React from "react"
import "../styles/FileWatcher.scss"

const FileWatcher = (props: any) => {
  return (
    <div className="file-watcher">
      {props.file !== undefined ? (
        <img src={props.file} alt="img"></img>
      ) : (
        <p>You haven't inserted any image</p>
      )}
    </div>
  )
}

export default FileWatcher
