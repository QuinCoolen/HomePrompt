import { HomeIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";
import { MedalIcon } from "@/components/icons/MedalIcon";

export default function Chart() {
  return (
    <>
      <div
        className="space-y-6 h-full flex flex-col justify-between"
      >
        <div className="space-y-6">
          <h1 className="text-2xl text-center">Afgelopen Week</h1>
          <Image src={"/images/voorbeeldgrafiek2.png"} alt="grafiek" width={500} height={350} />
        </div>
      </div>

      <nav className="border-t-3 border-primary h-20 w-screen flex flex-row gap-[1px]">
        <Button as={Link} href="/groups/1" className="bg-secondary text-white w-full h-full rounded-none"><HomeIcon width={30}></HomeIcon></Button>
        <Button as={Link} href="/groups/1/chart" className="bg-secondary text-white w-full h-full rounded-none"><ChartBarIcon width={30}></ChartBarIcon></Button>
        <Button as={Link} href="/groups/1/leaderboard" className="bg-secondary text-white w-full h-full rounded-none"><MedalIcon width={30}></MedalIcon></Button>
      </nav>
    </>
  );
}
