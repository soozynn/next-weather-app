import Link from "next/link";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getCurrentTime } from "@/utils/getCurrentTime";
import RevalidateButton from "@/components/RevalidateButton";

export default async function Home() {
  const currentWeatherRes = await getCurrentWeather("seoul");
  const currentTime = await getCurrentTime(currentWeatherRes.location.tz_id);

  return (
    <>
      <h1>날씨 앱</h1>
      <ul>
        <li>
          <Link href="/seoul">서울</Link>
          <span>{currentWeatherRes.current.condition.text}</span>
        </li>
        <li>
          <Link href="/NYC">뉴욕</Link>
        </li>
        <li>
          <Link href="/london">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"} />
    </>
  );
}
