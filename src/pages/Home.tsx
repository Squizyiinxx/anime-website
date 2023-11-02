import { Genre, Hero, Release } from "../component";


function Home() {
 

  return (
    <div className="bg-slate-800 overflow-x-hidden">
      <Hero />
      <Genre />
      <Release />
    </div>
  );
}

export default Home;
