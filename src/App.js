import "./App.scss";
import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import Gitstats from "./container/Gitstats/Gitstats";
import Social from "./components/Social";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Gitstats />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
