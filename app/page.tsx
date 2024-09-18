import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
    return ( 
        <div>
            <h1>TechMastery Academy</h1>
            <Link href={"/"}>
            <Button>click me</Button>
            </Link>
        </div>
     );
}
 
export default Home;
