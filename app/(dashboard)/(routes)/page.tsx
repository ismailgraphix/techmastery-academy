import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div className="p-12" >
    <UserButton afterSignOutUrl="/"/>
     </div>

  );
}