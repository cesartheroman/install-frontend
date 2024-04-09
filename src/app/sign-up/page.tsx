import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="mx-auto mt-6 max-w-sm">
      <SignUp />
    </div>
  );
}
