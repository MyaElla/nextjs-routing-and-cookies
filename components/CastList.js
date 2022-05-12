import Link from "next/link";
import Image from "next/image";

export const CastList = ({ cast }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "30px"
      }}
    >
      {cast.map((member) => (
        <Link href="/member/[id]" as={`/member/${member.id}`} key={member.id}>
          <a>
            <Image
              src={`/images/${member.slug}_tn.svg`}
              alt={cast.name}
              width={100}
              height={100}
            />
            <p>{member.name}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CastList;
