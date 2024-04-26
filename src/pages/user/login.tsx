import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { Button } from "../../components/Button";

export default function Login() {
  return (
    <>
      <form
        className="mt-8 space-y-6 h-full flex flex-col justify-between text-center"
      >
        <div className="space-y-6">
          <h1 className="text-2xl">Inloggen</h1>
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
            <Input type="email" placeholder="Email:" startContent={<EnvelopeIcon width={20}></EnvelopeIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-12", input: "text-base text-black placeholder:text-base placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />

            <Input type="password" placeholder="Wachtwoord:" startContent={<LockClosedIcon width={20}></LockClosedIcon>} classNames={{ inputWrapper: "border-2 border-primary rounded-full h-12", input: "text-base text-black placeholder:text-base placeholder:text-black placeholder:uppercase focus:placeholder:text-gray-500" }} />
          </div>
        </div>

        <div>
          <Button type="submit">Inloggen</Button>
        </div>
      </form>
    </>
  );
}
