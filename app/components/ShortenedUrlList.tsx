"use client";
import React, { useState } from "react";

//internal imports
import ShortenedUrlListItemType from "../types/ShortenedUrlListItemType";
import ShortenedUrlListItem from "./ShortenedUrlListItem";

export default function ShortenedUrlList() {
  const [urlList, setUrlList] = useState<ShortenedUrlListItemType[]>([]);

  return (
    <div className="flex flex-col w-full">
      {urlList.map((listItem) => (
        <div key={listItem.id}>
          <ShortenedUrlListItem
            id={listItem.id}
            url={listItem.url}
            shortenedUrl={listItem.shortenedUrl}
          />
        </div>
      ))}
    </div>
  );
}

//  <ShortenedUrlListItem
//    url={
//      "https://www.reallylongandpointlessdomainnameexample.com/articles/how-to-train-your-cat-to-code"
//    }
//    shortenedUrl={"http://example.com"}
//  />;
