import Link from "next/link";
import Image from "next/image";
interface UserIconProps {
  w: number;
  h: number;
}
const UserIcon = ({ w, h }: UserIconProps) => {
  const url =
    "https://i.pinimg.com/564x/ce/1a/68/ce1a68b494cd4914a8e724d40645ac6c.jpg";
  return (
      <div className="p-3 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:saturate-150 hover:rounded-md">
      <Link href={"/login "}>
        <Image src={url} width={w} height={h} className="rounded-sm object-fit "/>
      </Link>
    </div>
  );
};
export default UserIcon;
