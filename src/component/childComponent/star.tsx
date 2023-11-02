
const star = ({score} : {score: number  } ) => {
  const loopStar = (score : number) => {
    let x = 0
    const stars = [];

    while(x < 10) {
      if(x < score && score < score+1 ){
        stars.push(
          <svg key={x} xmlns="http://www.w3.org/2000/svg" className="h-5 shadow-lg w-5 md:h-8 md:w-8 lg:w-10 text-yellow-300" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        );
         x++;
      }else{
        stars.push(
          <svg key={x} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-8 md:w-8 lg:w-10 text-slate-800" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
          </svg>
        );

        x++
      }

    }
    return stars
  };

  return <div className="flex ">{loopStar(score)}</div>;
};

export default star;
