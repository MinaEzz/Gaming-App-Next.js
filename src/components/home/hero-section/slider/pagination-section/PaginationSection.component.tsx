import Image from "next/image";

const paginationImages = [
  "/spider-man-pag-img.webp",
  "/call-of-duty-pag-img.webp",
  "/dragon-ball-pag-img.webp",
  "/cyberpunk-pag-img.webp",
];

const PaginationSection = () => {
  return (
    <section className="w-full flex items-center justify-around max-lg:flex-col gap-4">
      {paginationImages.map((img, index) => {
        return (
          <div
            key={index}
            className="lg:w-[48rem] md:w-[80%] w-full h-40 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-5 hover:opacity-90 hover:shadow-xl duration-300 z-10 relative"
          >
            <Image
              src={img}
              alt=""
              className="w-full h-full object-fill object-center absolute"
              fill
            />
          </div>
        );
      })}
    </section>
  );
};

export default PaginationSection;
