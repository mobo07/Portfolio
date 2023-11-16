import Image from "next/image";

interface Props {
  logo: string;
  size: [number, number];
  desc: string;
}

const TechStackCard = ({ logo, size, desc }: Props) => {
  return (
    <abbr title={desc}>
      <div className="relative" style={{ width: size[0], height: size[1] }}>
        <Image src={logo} alt="logo" fill />
      </div>
    </abbr>
  );
};

export default TechStackCard;
