import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

const ProjectIdPage = async () => {
  const current = await getCurrent();
  if (!current) redirect("/sign-in");

  return <div>project id page</div>;
};

export default ProjectIdPage;
