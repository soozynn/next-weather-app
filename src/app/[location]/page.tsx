import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
};

export default async function DetailSection({ params }: Props) {
  const locationName = params.location === "seoul" ? "서울" : "";
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
