import { UserGroupIcon } from "@heroicons/react/24/solid";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Button, Link } from "@nextui-org/react";

export default function Groups() {
  return (
    <>
      <form
        className="mt-8 space-y-6 h-1/2 flex flex-col justify-center text-center"
      >
        <div className="space-y-6">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <Button as={Link} href="/groups/join" startContent={<UserGroupIcon width={20}></UserGroupIcon>} className="text-xl border-2 border-primary bg-white rounded-full h-12">JOIN GROUP</Button>

            <Button as={Link} href="/groups/create" startContent={<UserPlusIcon width={20}></UserPlusIcon>} className="text-xl border-2 border-primary bg-white rounded-full h-12">CREATE GROUP</Button>
          </div>
        </div>
      </form>
    </>
  );
}
