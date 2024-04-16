import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="mx-auto mt-6 max-w-sm">
      <SignIn />
    </div>
  );
}
