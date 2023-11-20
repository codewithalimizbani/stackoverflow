import Link from "next/link";
import React from "react";

import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface Props {
  _id: number;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const Questioncard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: Props) => {
  return (
    <div className="card-wrapper rounded-[10px] border border-light-800 p-9 dark:border-none sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-2 flex-1">
              {title}
            </h3>
          </Link>
        </div>

        {/* if signed in add edit delete actions */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} name={tag.name} _id={tag._id} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author.picture}
          alt="users"
          value={author.name}
          title={`- asked ${getTimestamp(createdAt)}`}
          textStyles="body-medium text-dark400_light800"
          href={`/profile/${author._id}`}
          isAuthor
        />
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="upvotes"
          value={formatNumber(upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
          isAuthor
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumber(answers.length)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />

        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(views)}
          title=" Veiws"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default Questioncard;
