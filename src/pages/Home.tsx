import { useEffect, useState } from "react";
import { Genre, Hero, LoadingScreen, Release } from "../component";


function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }, [])
  
 

  return (
    <div className="bg-slate-800 overflow-x-hidden">
      {isLoading && <LoadingScreen />}
      <Hero />
      <Genre />
      <Release />
    </div>
  );
}

export default Home;
