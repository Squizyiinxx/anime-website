import { useState, useEffect } from "react";
import { FetchGenre } from "../../fetch/FetchDataAnime";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { interGenre } from "../interface/InterHome";

const Index = () => {
  const [genre, setGenre] = useState([]);

  const getGenre = async () => {
    try {
      const response = await FetchGenre();
      setGenre(response.data);
    } catch (error) {
      console.error("Error fetching genre data:", error);
    }
  };
  useEffect(() => {
    getGenre();
  }, []);

  return (
    <div className="my-14 w-full">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl text-white font-bold mb-4">Genre</h1>

        <Swiper
          pagination={{ clickable: true }}
          centeredSlides={false}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            468: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 5,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 6,
            },
            1280: {
              spaceBetween: 20,
              slidesPerView: 9,
            },
          }}
          className="w-full mt-8"
        >
          {genre.map((item: interGenre) => (
            <SwiperSlide key={item.mal_id} className="flex w-fit m-0 justify-center items-center">
              <a
                href={`/searchByGenre?genre=${item.name}&type=${item.mal_id}`}
                className="hover:font-semibold relative text-white py-2 mb-16 px-5 border-2 text-center border-slate-100 after:content-[''] hover:text-slate-800 after:h-0 after:block after:left-0 after:bottom-0 overflow-hidden hover:after:h-full after:absolute after:w-full after:bg-yellow-300 after:duration-300 after:ease-in-out after:-z-10"
              >
                {item.name}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Index;
