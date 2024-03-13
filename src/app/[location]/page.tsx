import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨를 알려드립니다`,
  };
}

export default async function DetailSection({ params }: Props) {
  const locationName = params.location === "seoul" ? "서울" : params.location;
  const weatherForecastFor3rdRes = await getForecast(params.location);

  return (
    <>
      <h1>{locationName}의 3일 예보</h1>
      <ul>
        {weatherForecastFor3rdRes.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
