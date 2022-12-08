/* eslint-disable import/no-anonymous-default-export */
export default function () {
  return (
    <section className="meme">
      <form className="form">
        <input type="text" className="form-input"
          placeholder="top text"></input>
        <input type="text" className="form-input" placeholder="bottom text"></input>
        <button className="form-button">Get a new meme image 🖼</button>
      </form>
    </section>
  )
}