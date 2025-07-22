import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Money Tracker</h1>
      <p className="text-lg mb-6">Track your finances efficiently.</p>
      <Button asChild>
        <a href="/(auth)/sign-in">Get Started</a>
      </Button>
    </div>
  );
}
