import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from '@fortawesome/free-solid-svg-icons/faAdd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { heroUtils } from '../../utils/utils'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { InterHeroSection } from "../interface/InterHome";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="overflow-hidden h-[200px] sm:h-screen relative">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect={"coverflow"}
        loop={true}
        spaceBetween={100}
        direction="horizontal"
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
        }}
        className="w-full h-[400px] sm:h-[500px] md:h-screen overflow-hidden"
      >
        {heroUtils.map((item: InterHeroSection, index: number) => (
          <SwiperSlide key={index} className="md:h-screen">
            <div
              className={`overflow-hidden
            after:content-[''] after:block after:w-full after:h-full after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-slate-800 after:-z-10
            relative h-screen md:w-full lg:pt-0 flex px-4 sm:px-10 md:px-[50px] lg:px-[100px]`}
            >
              <img src={item.img} className="block h-[250px] sm:h-[500px] h-screen mb-4 w-full md:h-screen lg:w-full lg:h-auto absolute top-0 left-0 -z-10 opacity-50" />
              <div className="flex flex-col md:block anime-1 w-full mt-16 sm:mt-32 lg:mt-44 md:w-96 items-center  lg:w-1/2">
                <img src={item.title} alt="heading" className="w-24 sm:w-40 md:w-68 lg:w-96 mb-2 sm:mb-7" />
                <p className="text-white hidden sm:block text-xs sm:text-sm md:text-base lg:text-lg" id="description">
                  {item.sinopsis}
                </p>
                <div className="flex md:flex-row flex-reverse flex-col items-center gap-2 sm:gap-5 mt-2 sm:mt-5 sm:mt-10">
                  <div onClick={() => navigate(`/details/${item.id}`)} className="bg-yellow-300 cursor-pointer text-xs sm:text-sm md:text-base lg:text-lg py-2 px-4 sm:py-3 sm:px-5 shadow-xl font-semibold rounded-md">
                    {" "}
                    <FontAwesomeIcon icon={faPlay} /> Nonton Sekarang
                  </div>
                  <a href="#" className="bg-slate-800 text-xs sm:text-sm md:text-base lg:text-lg text-white shadow-xl font-semibold py-2 px-4 sm:py-3 sm:px-5 rounded-md">
                    <FontAwesomeIcon icon={faAdd} /> Tambah List
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero