import { convertDate } from "@/util/dateConverter";
import Link from "next/link";

export default function BlogCard({
  title,
  created,
  href,
}: {
  title: string;
  created: string;
  href: string;
}) {
  return (
    <Link className="blog-card" href={href}>
      <h2 className="blog-card__title">{title}</h2>
      <p className="blog-card__date">{convertDate(created)}</p>
    </Link>
  );
}
