import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Layout from "./ui/layout/layout";
import SocialNetwork from "./ui/socialNetwork/socialNetwork";
import Cookies from "./components/cookies/cookies";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function Home() {
  return (
    <Layout>
      
      <Analytics />
      <SpeedInsights />
      <Cookies />
    </Layout>
  );
}
