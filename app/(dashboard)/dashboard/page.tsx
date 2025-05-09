
import { getUserSession } from "@/lib/getUserSession";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getUserSession();
    console.log(session)
    
    if (!session) {
        return redirect("/admin-login");
    }
    const user = await prisma.user.findFirst({ where: { id: session?.id } });

  if (!user) {
    return redirect('/not-auth');
  }

  return<>еее</>;
}