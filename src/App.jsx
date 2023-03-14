import {
  Category,
  Clietns,
  Footer,
  Header,
  Hero,
  MobileApp,
  Subscribe,
  TopFoods,
} from "./";

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <Hero />
      <Category />
      <TopFoods />
      <MobileApp />
      <Clietns />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
