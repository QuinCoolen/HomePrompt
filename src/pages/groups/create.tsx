import { UserGroupIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { Button } from "../../components/Button";
import { useRouter } from "next/router";

export default function Create() {
  const router = useRouter()

  return (
    <>
      <form
        className="mt-8 space-y-6 h-full flex flex-col justify-between text-center"
      >
        <div className="space-y-6">
          <h1 className="text-2xl">Groep Creëren</h1>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <Input type="text" placeholder="Naam:" startContent={<UserGroupIcon width={20}></UserGroupIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-12", input: "text-base text-black placeholder:text-base placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />
          </div>
        </div>

        <div>
          <Button onClick={() => router.push('/groups/1')} type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}
