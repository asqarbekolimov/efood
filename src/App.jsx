import {
  Category,
  Clietns,
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
    </div>
  );
}

export default App;
