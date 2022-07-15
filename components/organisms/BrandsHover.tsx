import Image from "next/image";
const BrandsHover = () => {
  return (
    <section className="flex flex-col justify-center bg-blue-900/70 md:flex-row items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto z-0">
      <div className="brand group">
        <Image
          src="/../../public/images/pixar.png"
          layout="fill"
          objectFit="cover"
          width="100px"
        />
        <video
          autoPlay
          loop
          playsInline
          className="hidden object-cover rounded-lg group-hover:inline"
        >
          <source src="../../public/videos/pixar.mp4" />
        </video>
      </div>
    </section>
  );
};
export default BrandsHover;
