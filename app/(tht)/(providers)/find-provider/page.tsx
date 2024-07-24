import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import GoBackButton from '@/components/tht/GoBackButton'
import { Button } from '@/components/ui/button'

const FindProviderPage = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex justify-between items-center gap-32">
        <Image
          src="/images/tht/network_provider_banner.png?v=1"
          alt="network provider"
          width={520}
          height={708}
          className="w-full"
        />

        <div className="flex flex-col w-full gap-6">
          <div className="space-y-6 mb-4">
            <p className="text-neutral-500 text-sm font-normal font-gilroy-semibold uppercase leading-none tracking-widest">got a total health plan?</p>
            <h3 className="text-blue-950 text-5xl font-normal font-gilroy-semibold leading-10">Locate a provider</h3>
          </div>

          <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className="w-full text-zinc-800 text-xs font-normal font-gilroy-medium leading-none">Plan</div>
            <input type="text" placeholder='Select plan' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">State</div>
            <input type="text" placeholder='Select state' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Service</div>
            <input type="text" placeholder='Select service' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>

          <Button size="lg" className="gap-2 w-fit">
            Submit
            <ArrowRightIcon size={18} />
          </Button>
        </div>
      </div>
    </section >
  )
}

export default FindProviderPage