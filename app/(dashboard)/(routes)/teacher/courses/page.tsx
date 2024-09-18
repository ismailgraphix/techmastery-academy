import { Button } from "@/components/ui/button";
import Link from "next/Link";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/column";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";



const CoursePage = async () => {
    const { userId } = auth();

    if(!userId){
      return redirect("/")
    }

    const courses = await db.course.findMany({
      where: {
        userId,
      }, orderBy:{
        createdAt: "desc",
      },
    })
    return (  
        <div className="p-5">
            <Link href="/teacher/create"> 
            <DataTable columns={columns} data={courses} />
            </Link>
            </div>
     );
}
 
export default CoursePage;