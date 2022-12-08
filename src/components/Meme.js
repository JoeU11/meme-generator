/* eslint-disable import/no-anonymous-default-export */
import memesData from "../memesData"

export default function () {
  function getMeme() {
    // console.log(memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)])
    let meme = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)]
    console.log(meme)
  }
  return (
    <section className="meme">
      <div className="form">
        <input type="text" className="form-input"
          placeholder="top text"></input>
        <input type="text" className="form-input" placeholder="bottom text"></input>
        <button className="form-button" onClick={getMeme}>Get a new meme image 🖼</button>
      </div>
    </section>
  )
}