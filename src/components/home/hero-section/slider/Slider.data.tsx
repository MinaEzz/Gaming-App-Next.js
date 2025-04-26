import Button from "@/components/UI/button/Button.component";
import Image from "next/image";

export const SliderInfoJSX = ({
  src,
  description,
  btnText,
}: {
  src: string;
  description: string;
  btnText: string;
}) => {
  return (
    <div className="max-lg:hidden h-full absolute left-0 top-1/2 -translate-y-1/2 max-w-lg capitalize text-center bg-black/50 py-8 px-6 rounded-tl-2xl rounded-bl-2xl rounded-tr-full flex flex-col gap-4 justify-between ">
      <div className="relative w-[80%] h-28">
        <Image src={src} alt="" className="object-contain" fill />
      </div>
      <div className="w-[80%] flex flex-col gap-4">
        <p className="text-base text-gray-50">{description}</p>
        <Button className="gradient-bg-to-r rounded-full w-full px-4 py-2">
          <p>{btnText}</p>
        </Button>
      </div>
    </div>
  );
};

export const sliderCards = [
  {
    jsx: (
      <section className="w-full h-full rounded-2xl overflow-clip relative">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-fill object-center"
        >
          <source src="/spider-man-video.mp4" type="video/mp4" />
        </video>
        <SliderInfoJSX
          src="/spiderman-title.webp"
          description='"Swing through the breathtaking streets of New York City and battle iconic villains in Marvel Spider-Man. Experience fast-paced action, powerful abilities, and an epic story as the legendary web-slinger!"'
          btnText="Find More!"
        />
      </section>
    ),
  },
  {
    jsx: (
      <section className="w-full h-full rounded-2xl overflow-clip">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-fill object-center rounded-2xl"
        >
          <source src="/call-of-duty-video.mp4" type="video/mp4" />
        </video>
        <SliderInfoJSX
          src="/call-of-duty-title.webp"
          description='"Immerse yourself in intense battles across realistic warzones in Call of Duty. Gear up, strategize, and fight alongside your squad in one of the most iconic first-person shooter experiences ever created."'
          btnText="Find More!"
        />
      </section>
    ),
  },
  {
    jsx: (
      <section className="w-full h-full rounded-2xl overflow-clip relative">
        <Image
          src="/dragon-ball-pag-img.webp"
          alt=""
          className="w-full h-full object-fill object-center"
          fill
        />
        <SliderInfoJSX
          src="/dragon-ball-title.webp"
          description='"Step into the legendary world of Dragon Ball and unleash your ultimate power! Battle fierce opponents, master powerful transformations, and relive the epic adventures of Goku and his friends in an action-packed universe."'
          btnText="Find More!"
        />
      </section>
    ),
  },
  {
    jsx: (
      <section className="w-full h-full rounded-2xl overflow-clip relative">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-fill object-center rounded-2xl"
        >
          <source src="/cyberpunk-video.mp4" type="video/mp4" />
        </video>
        <SliderInfoJSX
          src="/iconcyber-title.webp"
          description='"Dive into the neon-soaked streets of Night City in Cyberpunk 2077. Customize your character, forge your path through a vast open world, and experience a gripping story filled with action, danger, and futuristic technology."'
          btnText="Find More!"
        />
      </section>
    ),
  },
];
