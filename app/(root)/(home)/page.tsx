import HomeFilters from "@/components/HomePageFilters";
import Questioncard from "@/components/cards/Questioncard";
import NoResult from "@/components/shared/NoResult";
import Filter from "@/components/shared/search/Filter";

import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: 1,
    title:
      "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
    tags: [
      { _id: "1", name: "salesforce" },
      { _id: "2", name: "python" },
    ],
    author: { _id: "1", name: "John Doe", picture: "/assets/icons/avatar.svg" },
    upvotes: 132420,
    views: 1000000,
    answers: [],
    createdAt: new Date("2021-09-10T08:19:08.000Z"),
  },
  {
    _id: 2,
    title: "Cascading Deletes in Salesforce",
    tags: [
      { _id: "2", name: "Java" },
      { _id: "2", name: "python" },
    ],
    author: { _id: "2", name: "John Doe", picture: "/assets/icons/avatar.svg" },
    upvotes: 100000,
    views: 120000,
    answers: [
      /* array of Answer objects */
    ],
    createdAt: new Date("2023-09-10T08:19:08.000Z"),
  },
];
export default function Home() {
  return (
    <>
      <div className=" flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask A Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          placeholder="Searc For Qouestions..."
          otheClasses="flex-1"
          iconPosition="left"
          route="/"
          imgSrc="/assets/icons/search.svg"
        />
        <Filter
          filters={HomePageFilters}
          outherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <Questioncard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            title="Question"
            link="/ask-question"
            linkTitle="Ask A Question"
          />
        )}
      </div>
    </>
  );
}
