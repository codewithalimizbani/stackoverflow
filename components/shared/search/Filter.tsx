import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  filters: {
    name: string;
    value: string;
  }[];
  outherClasses?: string;
  containerClasses?: string;
}

const Filter = ({ filters, outherClasses, containerClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${outherClasses} body-regular light-border background-light800_dark300 
        text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="select a filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {filters.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className="capitalize"
            >
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
