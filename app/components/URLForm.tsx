"use client";
import React, { useState } from "react";

//internal imports
import Button from "./Button";
import ShortenedUrlListItem from "./ShortenedUrlListItem";

export default function URLForm() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setShortUrl("");
    setLoading(true);

    if (!url.trim()) {
      setError("Please enter a URL.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setShortUrl(data.result_url);
      }
    } catch (err) {
      setError("Unexpected error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute w-full px-[1rem] xll:px-[10rem] left-0 right-0 top-[-4rem] md:max-lg:px-[7rem] lg:max-xll:px-[4rem] space-y-2">
      <div className="bg-[url('/assets/images/bg-shorten-desktop.svg')] bg-[var(--dark-violet)] p-[1rem] lg:px-[3rem] lg:py-[2rem] w-full rounded-lg ">
        <form
          className="sm:flex-row gap-[1rem] w-full flex flex-col"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="bg-neutral-50 py-[0.8rem] px-[2rem] rounded-lg w-full sm:w-3/4 lg:w-4/5 placeholder-[var(--dark-gray)] text-[var(--dark-gray)]"
            placeholder="Shorten a link here..."
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            cssProperties="bg-[var(--cyan)] rounded-lg text-neutral-50 hover:bg-transparent bg-[var(--cyan)] w-full sm:w-1/4 lg:w-1/5 sm:max-lg:text-[0.8rem]"
            text={loading ? "Loading..." : "Shorten it!"}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
