import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-purple-100  bg-[url('/landing-page-bg.jpg')] bg-cover bg-center px-4 py-4">
      <div
        className="w-[calc(100%-2rem)] mx-auto bg-green-900/30 px-5 py-2 rounded-sm backdrop-blur-xs
      flex justify-between items-center
      "
      >
        <h1 className="text-2xl font-bold font-mono text-white">Appli</h1>

        <div className="flex gap-x-3">
          <Link href="/login" className="text-white">
            Login
          </Link>

          <span className="text-white">|</span>

          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>

      <div className="w-full">
        <div
          className="flex flex-col gap-y-2 bg-white/10 p-10 w-max max-w-[700px] rounded-sm absolute top-1/2 left-10 -translate-y-1/2 
        backdrop-blur-xs shadow-xs shadow-green-900/10"
        >
          <div className="w-fit">
            <h3 className="text-4xl text-green-900 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-green-900">
              Looking to hire? | Get hired?
            </h3>
          </div>
          <p className="text-lg text-green-800">
            Appli helps you find the right job or the right candidate for your
            business. <br />
            Whether you are a job seeker or a business owner, Appli is the
            perfect platform for you.
          </p>
          <div className="flex gap-x-2 mt-3">
            <Button variant="outline" className="border-green-900 px-7 py-5">
              Post a Job
            </Button>
            <Button variant="outline" className="border-green-900 px-7 py-5 ">
              Find a Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
