import Form from "./components/Form";
import "./sass/App.scss";

function App() {
  return (
    <main className="mainContainer">
      <section className="textContainer">
        <h1 className="title">Learn to code by watching others</h1>
        <p className="desc">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <section className="signupContainer">
        <button className="offerBtn">
          <span>Try it free 7 days</span>
          <span>then $20/mo. thereafter</span>
        </button>
        <Form />
      </section>
    </main>
  );
}

export default App;
