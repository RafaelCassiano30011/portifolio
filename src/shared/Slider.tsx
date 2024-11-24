import { Children } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

interface SliderProps {
  children?: React.ReactNode;
  options?: EmblaOptionsType;
}

export default function Slider({ children, options }: SliderProps) {
  const slides = Children.toArray(children) as any;

  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: any, index: number) => {
            return (
              <div className="embla__slide" key={index}>
                {slide}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
