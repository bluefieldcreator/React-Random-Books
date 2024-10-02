import { useState } from "react";
import Link from "next/link";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/posts", fetcher);
  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading posts...</div>;
  let posts = [];

  data.posts.forEach((post) =>
    posts.push(
      <div className="border-2 item  text-center my-1 border-black">
          <div className="link cursor-pointer">{post.title} </div>
        <p>By <span className="link cursor-pointer">{post.user.name}</span></p>
      </div>
    )
  );

  return (
    <div>
   
      <h1 className="text-3xl">Latest Posts</h1>
      <div className="gridthing gap-5">{posts}</div>
    </div>
  );
}
