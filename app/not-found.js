import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image width={200} height={200} src="/down.png" alt="Error" />
      <h1 className="text-3xl font-bold text-red-500 mt-4">
        Uh-oh! We couldn&apos;t find the page you&apos;re looking for.
      </h1>

      <Button className="mt-4">
        <Link href={"/"}>Go back home</Link>
      </Button>
    </div>
  );
};

export default Error;
