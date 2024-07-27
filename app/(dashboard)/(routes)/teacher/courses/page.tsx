import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursePage = () => {
    return (  
        <div className="p-5">
            <Link href="/teacher/create"> 
            <Button>New course</Button>
            </Link>
            </div>
     );
}
 
export default CoursePage;