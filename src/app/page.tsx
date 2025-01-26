import Image from "next/image";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/theme-toggle";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-red-400 font-barlow">Welcome to the course!!</h1>
      <Button>Click Me</Button>
    </div>
  );
}
