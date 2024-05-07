import { ChartBarIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Button, Link, User } from "@nextui-org/react";
import { MedalIcon } from "@/components/icons/MedalIcon";

export default function Index() {
  return (
    <>
      <div
        className="space-y-6 h-full flex flex-col justify-between"
      >
        <div className="space-y-6">
          <h1 className="text-2xl text-center">Competitie</h1>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col items-baseline gap-4 text-xl px-8">
            <User name="Quin Coolen" avatarProps={{ size: "lg" }} classNames={{ name: "text-xl" }} />
            <User name="Sara Bias" avatarProps={{ size: "lg" }} classNames={{ name: "text-xl" }} />
            <User name="Stijn Franssen" avatarProps={{ size: "lg" }} classNames={{ name: "text-xl" }} />
            <User name="Tom Jans" avatarProps={{ size: "lg" }} classNames={{ name: "text-xl" }} />
            <User name="Joelle Dees" avatarProps={{ size: "lg" }} classNames={{ name: "text-xl" }} />
          </div>
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
