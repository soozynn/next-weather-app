"use client";

import revalidate from "@/utils/revalidateTag";

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const handleClickRevalidateButton = async () => {
    const revalidateTagRes = await revalidate(tag);
  };

  return <button onClick={handleClickRevalidateButton}>캐시 비우기</button>;
}
