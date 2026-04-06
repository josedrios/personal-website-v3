import { getSortedPostsData } from "@/lib/blogs";
import Link from "next/link";

export default function Blog() {
  const blogs = getSortedPostsData();
  console.log(blogs);
  return (
    <main>
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.slug}`} key={blog.slug}>
          {blog.title}
        </Link>
      ))}
    </main>
  );
}
