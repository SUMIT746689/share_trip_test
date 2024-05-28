import Image from "next/image";
import LeftContent from "./Left";
import RightContent from "./Right";

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
