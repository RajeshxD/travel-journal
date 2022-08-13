import "./App.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
// import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} {...item} />;
  });
  return (
    <div className="App">
      <Nav />
      <section className="cards-list">{cards}</section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
