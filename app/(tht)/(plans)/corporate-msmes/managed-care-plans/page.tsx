import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/tht/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LibertyCoverCard from '@/components/tht/LibertyCoverCard'
import { MANAGED_CARE_CAPITATION } from '@/constants/tht'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Managed Care Capitation Plans" />
          <h1 className="bold-56 text-blue-950">Managed Care Capitation Plans</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">Cost-effective healthcare for all employee levels, covering primary healthcare and specialist consultations and treatment.</p>
          <Link href="/get-quote">
            <Button size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <div className="flex gap-4">
            <Image
              src="/images/tht/managed-care-banner.png"
              alt="Managed Care Capitation Plans"
              width={386} height={461}
              className="w-full object-contain"
            />
            <div className="w-full flex flex-col gap-4">
              <Image
                src="/images/tht/managed-care-banner2.png"
                alt="Managed Care Capitation Plans"
                width={282} height={264}
                className="w-full object-contain"
              />
              <Image
                src="/images/tht/managed-care-banner3.png"
                alt="Managed Care Capitation Plans"
                width={282} height={225}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-blue-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-blue-950 bold-32">Great healthcare plan benefits at a cost-friendly premium</h5>
            <p className="text-blue-950 text-base font-gilroy-medium">Managed Care is best suited for organisations with the need for only in-country healthcare access.</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MANAGED_CARE_CAPITATION.map((item) =>
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
          <div className="bg-blue-50 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white bg-blue-800 px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>our plans</p>
            <div className="flex items-center gap-14">
              <h2 className="bold-48 text-blue-800 w-full">
                Fee-for-Service Plans
              </h2>
              <Link href="/corporate-msmes/fee-for-service-plans" className="flex gap-2 items-center rounded-lg btn_dark_blue w-fit !px-2 !py-2">
                <ArrowRight size={16} className='text-white' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page