import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/tht/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LibertyCoverCard from '@/components/tht/LibertyCoverCard'
import { FEE_SERVICE_PLANS } from '@/constants/tht'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Fee-for-Service Plans" />
          <h1 className="bold-56 text-blue-950">Fee-for-Service Plans</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">These are mid-range healthcare plans for those who crave the flexibility of access to care.</p>
          <Link href="/get-quote">
            <Button size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/tht/feeforservice-banner.png" alt="Fee-for-Service Plans" width={698} height={370} className="w-full object-contain rounded-3xl" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-blue-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-blue-950 bold-32">High-quality healthcare plans that combine comprehensive coverage with affordability.</h5>
            <p className="text-blue-950 text-base font-gilroy-medium">Fee-for-service offers mid-range healthcare plans to organizations and individuals.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEE_SERVICE_PLANS.map((item) =>
            <LibertyCoverCard
              key={item.name}
              name={item.name}
              desc={item.desc}
              isCompare={false}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-blue-950 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase bg-orange-50 text-blue-950 px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>our plans</p>
            <div className="flex items-center gap-3">
              <h2 className="flex-1 bold-48 text-white w-full">
                Liberty Health Plans (LHC)
              </h2>
              <Link href="/corporate-msmes/liberty-health-cover" className="flex gap-2 items-center rounded-lg btn_white w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-blue-950' />
              </Link>
            </div>
          </div>
          <div className="bg-orange-base w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase bg-orange-50 text-orange-base px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>our plans</p>
            <div className="flex items-center gap-3">
              <h2 className="flex-1 bold-48 text-white w-full">
                Managed Care Capitation Plans
              </h2>
              <Link href="/corporate-msmes/managed-care-plans" className="flex gap-2 items-center rounded-lg btn_white w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-orange-base' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page