import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import BlogCard from '@/components/tht/BlogCard'
import { POSTS } from '@/constants/tht'

const BlogPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-center w-full mt-44">
        <div className="w-full flex-[3]">
          <Image
            src="/images/tht/blog_banner.png"
            alt="International Toothache Day"
            width={598} height={393}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full flex flex-col gap-6 flex-[2]">
          <h1 className="bold-56 text-blue-900">International Toothache Day</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Globally, between 60 - 90% of school children and nearly 100% adults have some form of tooth decay (being the primary cause of toothache), often leading to pain and discomfort.</p>
          <Link href="/blog/international-toothache-day">
            <Button variant="ghost" className="gap-3 text-blue-950">
              Read More
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <h3 className="bold-36 !font-gilroy-light">More Posts</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {POSTS?.map((post) =>
            <BlogCard
              key={post.title}
              image={post.image}
              category={post.category}
              title={post.title}
              slug={post.slug}
              date={post.date}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default BlogPage