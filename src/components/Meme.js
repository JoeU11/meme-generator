/* eslint-disable import/no-anonymous-default-export */
export default function () {
  function getMeme() {
    console.log("hi")
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