import Wrapper from "./wrapper/wrapper";
import LinkItem from "./link/link";

const links = [
  {
    href: "https://github.com",
    name: "GitHub",
  },
  {
    href: "https://youtube.com",
    name: "YouTube",
  },
  {
    href: "https://vk.ru",
    name: "Vkontakte",
  },
  {
    href: "https://vercel.com",
    name: "Vercel",
  },
  {
    href: "https://nextjs.org",
    name: "NextJS",
  },
];

const LinkList = () => {
  return (
    <Wrapper>
      {links?.map((link) => {
        return <LinkItem key={link?.href} href={link?.href} name={link?.name} />;
      })}
    </Wrapper>
  );
};

export default LinkList;
