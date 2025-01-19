import { redirect } from "next/navigation";
import { getCurrent } from "@/features/auth/queries";

export default async function Home() {
  const current = await getCurrent();
  if (!current) redirect("/sign-in");

  return (
    <div>
      <h1>main homepage </h1>
    </div>
  );
}
