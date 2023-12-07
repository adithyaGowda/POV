/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "@material-tailwind/react";

export function Hero() {
  return (
    <Carousel
      className="rounded-xl w-screen h-[520px] md:h-[600px] md:w-[1000px] overflow-hidden "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "w-8 bg-[#ffffff] shadowText "
                  : "w-4 bg-white/50 shadowText"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/watch1.jpeg"
        alt="image 1"
        className="md:p-0  h-full w-full object-cover  hover:scale-[1.2] transition-all ease-in-out duration-[0.3s]"
      />
      <a
        href="https://www.instagram.com/p.o.v_online_marketing/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
        className="flex w-full h-full items-center justify-center"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="qr.jpeg"
          alt="image 2"
          className="md:p-0  h-full w-[80%] object-cover object-center "
        />
      </a>
    </Carousel>
  );
}
