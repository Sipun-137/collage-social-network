import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import ApplicationForm from "@/app/components/ApplicationForm";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(options);
  const emailid=session?.user.email
  return (
    <>
      <div className="flex justify-center items-center tracking-[15px] font-mono p-4">
        page for the application submission
      </div>
      <ApplicationForm  id={params.id} email={emailid}/>
      <div className="flex flex-col justify-center items-center">
        <div className="m-8 p-4 text-mono ">
          <p className="text-red-600">!!! before submitting the details please check it correctly. if it is correct then only proceed futher for the application submission!!!</p>
        </div>
      </div>
    </>
  );
}
