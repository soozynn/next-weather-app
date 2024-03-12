import HomeButton from "@/components/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
};

export default async function DetailSection({ params }: Props) {
  const res = await getForecast();

  return (
    <>
      <h1>Detail {params.location}</h1>
      <HomeButton />
    </>
  );
}
