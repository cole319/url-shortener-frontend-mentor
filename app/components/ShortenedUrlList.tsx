import React from "react";
import ShortenedUrlListItem from "./ShortenedUrlListItem";

export default function ShortenedUrlList() {
  return (
    <div className="flex flex-col w-full">
      <ShortenedUrlListItem
        url={
          "https://www.reallylongandpointlessdomainnameexample.com/articles/how-to-train-your-cat-to-code"
        }
        shortenedUrl={"http://example.com"}
      />
    </div>
  );
}
