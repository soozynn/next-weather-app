import HomeButton from "@/components/HomeButton";

type Props = {
  params: {
    location: string;
  };
};

export default function DetailSection({ params }: Props) {
  return (
    <>
      <h1>Detail {params.location}</h1>
      <HomeButton />
    </>
  );
}
