import Image from 'next/image'
import Link from 'next/link';

interface Props {
  image: string;
  category: string;
  title: string;
  slug: string;
}

const BlogCard = ({ image, category, title, slug }: Props) => {
  return (
    <Link href={`/blog/${slug}`} className="flex flex-col gap-4">
      <Image src={image} alt="blog 1" width={384} height={232} className="w-full" />
      <p className="text-sm font-gilroy-semibold uppercase">{category}</p>
      <h3 className="regular-28 font-gilroy-medium">{title}</h3>
    </Link>
  )
}

export default BlogCard