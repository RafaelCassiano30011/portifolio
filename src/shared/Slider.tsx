import { Children } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useId } from "../utils/useId";

interface BreakpointsOptions extends EmblaOptionsType {
  slidesPerView: number;
  gap?: number;
}

type Breakpoints = Record<string, BreakpointsOptions>;

interface SliderProps {
  children?: React.ReactNode;
  options?: EmblaOptionsType;
  breakpoints?: Breakpoints; // Exemplo: { "768": { gap: 10, slidesPerView: 2 } }
}

export default function Slider({ children, options, breakpoints }: SliderProps) {
  const slides = Children.toArray(children) as any;
  const [emblaRef] = useEmblaCarousel(options);
  const id = useId();

  const getDynamicClasses = (breakpoints?: Breakpoints) => {
    if (!breakpoints) return "w-full";

    return Object.entries(breakpoints)
      .map(([minWidth, { slidesPerView, ...rest }]) => {
        const percentage = (100 / slidesPerView).toFixed(2);
        return `@media (min-width: ${minWidth}px) {#${id} .embla__slide { min-width: ${percentage}%; ${
          rest.gap ? `margin-right: ${rest.gap}px` : ""
        } } #${id} .viewport::before{
        content:'${rest}';
        display:none;
        }
        }`;
      })
      .join(" ");
  };

  const breakpointsStyles = getDynamicClasses(breakpoints);

  return (
    <section id={id} className="embla">
      <style>{breakpointsStyles}</style>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide: any, index: number) => (
            <div className={`embla__slide flex justify-center items-center`} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
