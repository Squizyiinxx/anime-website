import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { InterManga } from "../interface/InterManga";
import Card from "../childComponent/Card";

const index = ({ mangaslider, type }: { mangaslider: InterManga[]; type: string }) => {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Autoplay]}
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
            spaceBetween: 40,
            slidesPerView: 2,
          },
          380: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          768: {
            spaceBetween: 15,
            slidesPerView: 4,
          },
          1024: {
            spaceBetween: 15,
            slidesPerView: 5,
          },
          1280: {
            spaceBetween: 20,
            slidesPerView: 7,
          },
        }}
        className="w-full"
      >
        {mangaslider.map((item: InterManga) => (
          <SwiperSlide key={item.mal_id}>
            <Card title={item.title} type={type} mal_id={item.mal_id} image={item.images.webp.image_url} score={item.score} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default index;
