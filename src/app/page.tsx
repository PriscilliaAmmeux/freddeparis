import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Cookies from "./components/cookies/cookies";
import SocialNetwork from "./ui/socialNetwork/socialNetwork";
import Navigation from "./ui/navigation/navigation";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <section className="background-image flex flex-col  justify-center">
      <div className="flex justify-end">
        <Navigation />
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="flex flex-col items-center text-white custom-font text-5xl">
          <span>Frédéric</span>
          <span>DEPARIS</span>
        </h1>
        <SocialNetwork />
      </div>
      <Analytics />
      <SpeedInsights />
      <Cookies />
    </section>
  );
}
