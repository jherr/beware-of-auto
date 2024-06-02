import Link from "next/link";

const SERVICES = process.env.SERVICES;

export default async function NavBar() {
  const navReq = await fetch(`${SERVICES}/api/nav`);
  const nav: {
    title: string;
    url: string;
  }[] = await navReq.json();

  return (
    <ul>
      {nav.map((item) => (
        <li key={item.url}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
