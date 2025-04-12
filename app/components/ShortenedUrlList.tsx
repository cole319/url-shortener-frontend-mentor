"use client";
import React, { useState } from "react";

//internal imports
import ShortenedUrlListItem from "./ShortenedUrlListItem";

//cotext
import { useShortenedUrl } from "../context/ShortenedUrlContext";

export default function ShortenedUrlList() {
  const { urlList } = useShortenedUrl();

  return (
    <div className="flex flex-col w-full gap-[1rem]">
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
