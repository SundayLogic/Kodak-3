import Image from "next/image";

interface BrandLogoProps{
  w: number;
  h: number;
}
const BrandLogo = ({ w, h }: BrandLogoProps) => {
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg";
  return (
    <div className="hidden md:flex p-1 min-w-[80px] opacity-90  hover:saturate-150 transition-all duration-200 ease-in-out cursor-pointer">
      <Image
        src={url}
        width={w}
        height={h}
      />
    </div>
  );
};
export default BrandLogo;
