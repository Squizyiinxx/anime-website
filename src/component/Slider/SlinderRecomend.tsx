import { Swiper, SwiperSlide } from "swiper/react";
import { InterRecomend } from "../interface/InterHome";
import { Autoplay } from "swiper/modules";
import Card from "../childComponent/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const SlinderRecomend = ({ animeRecomend, title }: { title: string; animeRecomend: never[] }) => {
  return (
    <>
      <div className="w-full flex md:justify-start justify-center items-center border-b-[1px] md:items-start">
        <h1 className="text-4xl text-white md:text-4xl text-lg font-bold border-slate-300 pb-3">
          {title === "Top Anime" && <FontAwesomeIcon icon={faFire} className="text-red-400" />} {title}
        </h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        centeredSlides={false}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
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
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
          1280: {
            spaceBetween: 30,
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {animeRecomend.map((item: InterRecomend, i: number) =>
          item.entry.images.webp.image_url.includes("icon-banned-youtube-rect.png") ? (
            ""
          ) : (
            <SwiperSlide key={i} className="flex w-fit m-0 justify-center items-center">
              <Card type="" title={item.entry.title} mal_id={item.entry.mal_id} image={item.entry.images.webp.image_url} score={item?.score} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default SlinderRecomend;
