import Image from 'next/image'
import BackWithBreadCrumbs from '@/components/tht/BackWithBreadCrumbs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LibertyCoverCard from '@/components/tht/LibertyCoverCard'
import { LIBERTY_HEALTH_COVER } from '@/constants/tht'

const Page = () => {
  return (
    <>
      <section className="relative max-container padding-container flex flex-col gap-12 md:flex-row items-start w-full mt-44">
        <div className="w-full space-y-3 flex-[2]">
          <BackWithBreadCrumbs page="Liberty Health Cover" />
          <h1 className="bold-56 text-blue-900">Liberty Health Cover</h1>
          <p className="regular-18 text-generic-950 !leading-[145%]">THT through its partnership with leading Pan-African health insurer, Liberty Health, provides best-in-class Liberty Health Cover Plans (LHC) with robust and comprehensive benefits that are best suited to multinationals, corporates and SMEs with business interests in Nigeria and across African Continent.</p>
          <Link href="/get-quote">
            <Button size="lg" className="mt-4">Get a Quote</Button>
          </Link>
        </div>
        <div className="w-full flex-[3]">
          <Image src="/images/tht/liberty-health-banner.png" alt="liberty health cover" width={696} height={364} className="w-full object-contain" />
        </div>
      </section>

      <section className="relative max-container padding-container mt-20">
        <div className="bg-blue-50 flex gap-6 w-full items-start p-14 rounded-2xl">
          <Image src="/icons/tht/spark.svg" alt="Wellness" width={48} height={48} className="hidden md:flex" />
          <div className="regular-20 text-white space-y-4">
            <h5 className="text-blue-950 bold-32">Comprehensive healthcare plans for your employees</h5>
            <p className="text-blue-950 text-base font-gilroy-medium">LHC plan offers healthcare benefits for varying health needs and it is well suited for companies that are not ready to compromise on their employees' health</p>
          </div>
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LIBERTY_HEALTH_COVER.map((item) =>
            <LibertyCoverCard
              key={item.name}
              name={item.name}
              desc={item.desc}
            />
          )}
        </div>
      </section>

      <section className="relative max-container padding-container mt-32">
        <div className="flex flex-col md:flex-row gap-8">
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
          <div className="bg-blue-50 w-full p-12 flex flex-col gap-4 rounded-3xl">
            <p className='regular-14 uppercase text-white bg-blue-900 px-2 py-1 w-fit rounded-full font-gilroy-semibold mt-10'>our plans</p>
            <div className="flex items-center gap-14">
              <h2 className="bold-48 text-blue-900 w-full">
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