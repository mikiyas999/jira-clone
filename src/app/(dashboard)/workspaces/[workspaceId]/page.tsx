import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

const WorkspaceIdpage = async () => {
  const current = await getCurrent();
  if (!current) redirect("/sign-in");
  return (
    <div>
      <h2>worspace id page</h2>
    </div>
  );
};

export default WorkspaceIdpage;
