import BlogCard from "@/components/tht/BlogCard";
import GoBackButton from "@/components/tht/GoBackButton"
import { Button } from "@/components/ui/button";
import { POSTS } from "@/constants/tht";
import { ParamsProps } from "@/types"
import Image from "next/image";

const SlugPage = ({ params }: ParamsProps) => {
  const { slug } = params;
  const post = POSTS.find(post => post.slug === slug);
  const morePosts = POSTS.slice(0, 3);

  return (
    <>
      <section className="relative max-container padding-container mt-44">
        <GoBackButton text="Back to Blog posts" />

        <div className="flex flex-col gap-3 w-full">
          <p className="uppercase text-sm font-semibold text-generic-800 mt-8">{post?.category || "world asthma day"}</p>
          <h1 className="bold-48 text-generic-950 !font-gilroy-medium">{post?.title || "International Toothache Day"}</h1>
          <p className="text-base text-generic-800 !font-gilroy-regular">The prevalence of asthma and allergic rhinitis in Nigeria is high with variabilities across regions and age groups. The number of persons with clinical asthma in Nigeria (approximately 13 million) ranks among the highest in Africa.</p>
          <p className="text-base text-generic-800 !font-gilroy-regular">{post?.date || "3rd May 2022, 5 mins"}</p>
        </div>
        <div className="w-full h-[567px] relative my-8">
          <Image
            src="/images/tht/blog/blog_big.png"
            alt={post?.title || "International Toothache Day"}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div className="flex-[3]">
            <h3 className="regular-24 text-generic-800">Subheading 1</h3>
            <p className="text-base text-generic-800 py-6">The prevalence of asthma and allergic rhinitis in Nigeria is high with variabilities across regions and age groups. The number of persons with clinical asthma in Nigeria (approximately 13 million) ranks among the highest in Africa. Asthma is a chronic, non-communicable lifelong disease that affects the lungs. It can cause wheezing, breathlessness, chest tightness, and coughing. Although asthma cannot be cured, it is possible to manage it to reduce and prevent asthma attacks, also called episodes.</p>
            <h3 className="regular-24 text-generic-800">Subheading 2</h3>
            <p className="text-base text-generic-800 py-6">An asthma attack may occur randomly or after exposure to a trigger. Common asthma triggers include: allergies (to house dust mites, animal fur or pollen), smoke, pollution and cold air, exercise, infections, medications - particularly anti-inflammatory painkillers, emotions - including stress or laughter and other varying triggers. Triggers as 'insignificant' as eating too much reportedly can cause an asthma attack, therefore identifying and avoiding individual triggers can help keep symptoms under control.</p>
            <h3 className="regular-24 text-generic-800">Subheading 3</h3>
            <p className="text-base text-generic-800 py-6">Chronic medical conditions like asthma are often misunderstood. With the abundance of resources available on the internet, it can be difficult to decipher what's fact from what's myth. Over the years, there have been common widely held myths and misconceptions concerning asthma that prevent persons with asthma from enjoying optimal benefit from the major advances in the management of this condition. These misconceptions include sayings and beliefs that asthma is a childhood disease; individuals will grow out of it as they age, asthma is infectious, asthma sufferers should not exercise, asthma is only controllable with high dose steroids but the truth about this condition is that asthma can occur at any age (in children, adolescents, adults and elderly), asthma is not infectious.</p>
            <h3 className="regular-24 text-generic-800">Subheading 4</h3>
            <p className="text-base text-generic-800 py-6">In children, asthma is frequently associated with allergy, but asthma which starts in adulthood is less often allergic. When asthma is well controlled, asthmatic individuals can exercise and even perform top sport. Asthma is most often controllable with low-dose inhaled steroids and short-term medications depending on the severity of the condition. While some people believe that asthma can be treated with dietary supplements, research shows and proves that there's little to no evidence that any dietary or herbal supplements have any effect on asthma symptoms. Inhalers and orally administered medications for asthma also are not addictive. It is always good practice to remain on medications as prescribed even when symptoms aren't present.</p>
            <p className="text-base text-generic-800">In conclusion, it is advised to visit a physician when experiencing any symptoms for appropriate diagnosis, avoid self-medication, identify and avoid triggers if asthma is diagnosed and importantly let's all put in the effort to separate the myths from the facts.</p>
          </div>
          <div className="flex flex-col flex-1 bg-blue-50 p-8 rounded-2xl gap-3 h-fit">
            <p className="regular-24 text-blue-950 !font-gilroy-medium">Get email updates</p>
            <p className="text-base text-blue-950 font-gilroy-regular">Sign up for newsletter updates on our products and special offers.</p>
            <div className="flex bg-white rounded-full mt-4">
              <input type="email" placeholder="Your email" className="w-full bg-transparent active:ring-0 hover:ring-0 border-0 px-3" />
              <Button className="gap-2 rounded-full">
                Signup
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <h3 className="bold-36 !font-gilroy-light">More Posts</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {morePosts.map((post) =>
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

export default SlugPage;
