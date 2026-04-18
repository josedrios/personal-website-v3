import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main>
      <Header type={1}>404</Header>
      <p>The page you are looking for is hiding from you...</p>
    </main>
  );
}
