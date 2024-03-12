import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
};

export default async function DetailSection({ params }: Props) {
  const locationName = params.location === "seoul" ? "서울" : "뉴욕";
  const weatherForecastFor3rdRes = await getForecast("Seoul");

  return (
    <>
      <h1>{locationName}의 3일 예보</h1>
      <HomeButton />
    </>
  );
}
