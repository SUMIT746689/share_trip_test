import Image from "next/image";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Home() {
  return (
    <main className=" flex gap-x-6">
      <LeftContent />
      <div className=" max-w-[840px]">
        <RightContent />
      </div>
    </main>
  );
}
