import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import WellnessCard from '@/components/cards/WellnessCard'
import { Button } from '@/components/ui/button'

const WellnessPage = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-8 md:flex-row items-center w-full mt-44">
        <div className="flex-none w-full md:w-1/3 space-y-3">
          <h1 className="bold-48 text-blue-950">Our Wellness Offering</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Bespoke well-being solutions tailored to your employees' wellness needs.</p>
        </div>
        <div className="flex-1 w-full">
          <Image src="/images/tht/wellness-banner.png" alt="Wellness" width={697} height={370} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-blue-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-blue-950 bold-32">Tailor made Solutions for your Wellness </h5>
            <p className="text-generic-950">The wellness and well-being of our members in and out of the workplace is vital to us. We do our best to develop solutions to help you with any matter that needs attention for optimal productivity and health</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="flex gap-6 items-center">
          <h2 className="bold-48 text-blue-950">Wellness Offerings</h2>
          <Image src="/icons/tht/wellness-offering.svg" alt="Wellness Offering" width={146} height={146} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* {WELLNESS_OFFERINGS.map((well) => {
            const bg = well.bgColor;
            return (
              <WellnessCard
                key={well.subTitle}
                bgColor={bg}
                subTitle={well.subTitle}
                title={well.title}
              />
            )
          })} */}
          <WellnessCard
            key={1}
            bgColor="bg-blue-900"
            subTitle="wellness offerings"
            title="Bespoke wellness initiatives"
          />
          <WellnessCard
            key={2}
            bgColor="bg-generic-950"
            subTitle="wellness offerings"
            title="Comprehensive health check"
          />
          <WellnessCard
            key={3}
            bgColor="bg-red-500"
            subTitle="wellness offerings"
            title="Wellness webinars"
          />
          <WellnessCard
            key={4}
            bgColor="bg-blue-950"
            subTitle="wellness offerings"
            title="Wellness newsletters"
          />
          <WellnessCard
            key={5}
            bgColor="bg-green-700"
            subTitle="wellness offerings"
            title="Onsite health talks"
          />
          <WellnessCard
            key={6}
            bgColor="bg-orange-base"
            subTitle="wellness offerings"
            title="Onsite health checks"
          />
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
          <div className="w-full flex flex-col justify-between bg-blue-50 rounded-2xl px-8 py-12">
            <h5 className="text-blue-950 bold-32">
              Our Gym Network
            </h5>
            <Link href="/gym-list">
              <Button size="lg" className="mt-4 gap-2">
                Explore
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          <div className="w-full flex-col justify-between bg-blue-50 rounded-2xl px-8 py-12">
            <h5 className="text-blue-950 bold-32 mb-4">
              Do you need any of our wellbeing offerings? Click to get started
            </h5>
            <Link href="/book-session">
              <Button size="lg" className="mt-4 gap-2">
                Get started
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default WellnessPage