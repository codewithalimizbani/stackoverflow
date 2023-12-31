import Question from "@/components/forms/Questions";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();
  const userId = "123456";
  if (!userId) redirect("/sign-in");
  console.log(userId);

  const monogoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question monogoUserId={JSON.stringify(monogoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
