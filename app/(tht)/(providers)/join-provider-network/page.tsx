import Image from 'next/image'
import { ArrowRightIcon } from 'lucide-react'
import GoBackButton from '@/components/tht/GoBackButton'
import { Button } from '@/components/ui/button'

const JoinProviderNetworkPage = () => {
  return (
    <section className='relative max-container padding-container mt-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex justify-between items-center gap-32">
        <Image
          src="/images/tht/join-provider-network-banner.png"
          alt="network provider"
          width={520}
          height={708}
          className="w-full"
        />

        <div className="flex flex-col w-full gap-6">
          <div className="space-y-6 mb-4">
            <p className="text-neutral-500 text-sm font-normal font-gilroy-semibold uppercase leading-none tracking-widest">provider's requisition</p>
            <h3 className="text-blue-950 text-5xl font-normal font-gilroy-semibold leading-10">Join our network</h3>
          </div>

          <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className="w-full text-zinc-800 text-xs font-normal font-gilroy-medium leading-none">Requestor's name</div>
            <input type="text" placeholder="Requestor's name" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">MD's name</div>
            <input type="text" placeholder="MD's name" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Hospital's name</div>
            <input type="text" placeholder="Hospital's name" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Hospital's phone number</div>
            <input type="text" placeholder="Hospital's phone number" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Hospital specialisation</div>
            <input type="text" placeholder="Hospital specialisation" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Location</div>
            <input type="text" placeholder="Location" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
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

export default JoinProviderNetworkPage