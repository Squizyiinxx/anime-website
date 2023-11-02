import { Swiper,SwiperSlide } from "swiper/react";
import {EffectCoverflow, Autoplay} from 'swiper/modules'
import cekUrl from "../childComponent/CekUrl";



const SliderCoverflow = ({episodes,poster,titleEps,mal_id} : {episodes: number,poster: string, titleEps: string,mal_id:number}) => {

  const loopEpisode = (episodes : number) =>{
    let x = 0
    const episode = []
    while(x < episodes){
      episode.push(
        <SwiperSlide key={x}>
          <div
            onClick={() => cekUrl(titleEps.toLowerCase().replace(/[^a-zA-Z0-9 -]/g, '').replace(/ /g, '-') ,mal_id)}
            className="relative
            after:content-[''] cursor-pointer after:block after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b overflow-hidden after:from-transparent after:to-slate-800 after:z-[10]"
          >
            <div className="flex justify-center flex-col items-center bottom-5  left-0 z-[11] absolute w-full">
            <h3 className="text-white">{titleEps}</h3>
            <p className="text-white">Episode {x+1}</p>
            </div>
            <img src={poster} className="w-full rounded-xl overflow-hidden shadow-lg " alt="episode" />
          </div>
        </SwiperSlide>
      );
      x++
    }
    return episode
  }
  return (
    <div className="w-full md:w-[500px] lg:w-[600px] absolute flex items-center justify-center  right-0 z-[99] bottom-0 md:bottom-20 lg:bottom-10">
       {episodes <= 12 &&(
          
         <Swiper
         key={mal_id}
         modules={[EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        loop={true}
        spaceBetween={30}
        direction="horizontal"
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        breakpoints={
          {
            0: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            350: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            450: {
              spaceBetween: 50,
            },
           
            768: {
              centeredSlides:false,
              spaceBetween: 15,
              slidesPerView: 3,
            },
          }
        }
        centeredSlides={false}
        centeredSlidesBounds={false}
        coverflowEffect={{
          rotate: 0,
          slideShadows: true,
        }}
        className="w-full overflow-hidden"
        >
       {loopEpisode(episodes)}
      </Swiper>
    )}
    </div>
  );
}

export default SliderCoverflow