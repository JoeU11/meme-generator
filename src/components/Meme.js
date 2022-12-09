/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react"
import memesData from "../memesData"

export default function () {
  const [memeImage, setMemeImage] = useState(null)

  function getMeme() {
    // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)])
    let memeUrl = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url
    setMemeImage(memeUrl)
  }
  return (
    <section className="meme">
      <div className="form">
        <input type="text" className="form-input"
          placeholder="top text"></input>
        <input type="text" className="form-input" placeholder="bottom text"></input>
        <button className="form-button" onClick={getMeme}>Get a new meme image 🖼</button>
      </div>
      {memeImage && <img src={memeImage} alt="meme" />}
    </section>
  )
}