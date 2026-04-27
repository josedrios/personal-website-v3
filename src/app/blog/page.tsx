import { getSortedPostsData } from "@/lib/blogs";
import BlogCard from "@/components/BlogCard";
import Header from "@/components/Header";
import { Metadata } from "next";
import Note from "@/components/Note";
import Code from "@/components/Code";

export const metadata: Metadata = {
  title: "Blog",
  description: "Me slapping random buttons on my keyboard",
};

export default function Blog() {
  const temp = `name = 'jose'
for i in range(len(jose)):
    print(i) # taskjbsdkgsnmdgsfgnmdfg`;
  const blogs = getSortedPostsData();
  return (
    <main>
      <Header type={1}>My Blog</Header>
      {/* <Code text={temp} language="python" /> */}
      <Note title="disclaimer">
        This is a very unserious, all over the place, typo infested blog page. I
        just want to be able to write better and share my thoughts.
      </Note>
      <div className="blog-card__container">
        {blogs.map((blog) => (
          <BlogCard
            href={`/blog/${blog.slug}`}
            title={blog.title}
            created={blog.created}
            key={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
