import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Welcome to Ringrlabs</h1>

            <div className="flex items-center justify-center gap-4 mt-6">
                <Button
                    variant={"secondary"}
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    <RegisterLink>Get Started</RegisterLink>
                </Button>

                <Button asChild variant={"outline"}>
                    <LoginLink>Login</LoginLink>
                </Button>
            </div>
        </div>
    );
}
