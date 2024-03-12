import Link from "next/link";
import { getCurrentWeather } from "@/utils/getCurrentWeather";

export default async function Home() {
  const res = await getCurrentWeather();

  return (
    <>
      <h1>날씨 앱</h1>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
        </li>
        <li>
          <Link href="/newyork">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
    </>
  );
}
