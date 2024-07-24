import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import GoBackButton from "@/components/tht/GoBackButton"
import { Button } from "@/components/ui/button"

const CorporatePage = () => {
  return (
    <section className='relative max-container padding-container my-20'>
      <div className="flex gap-4 items-center pb-6">
        <GoBackButton />
      </div>

      <div className="flex justify-between items-start gap-32">
        <Image
          src="/images/tht/employer-banner.png"
          alt="corporate"
          width={520}
          height={708}
          className="w-full"
        />

        <div className="flex flex-col w-full gap-6">
          <div className="space-y-4 mb-4">
            <p className="text-neutral-500 text-sm font-normal font-gilroy-semibold uppercase leading-none tracking-widest">Employer Details</p>
            <h3 className="text-blue-950 text-4xl font-normal font-gilroy-semibold leading-10">Register as an Employer</h3>
          </div>

          <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className="w-full text-zinc-800 text-xs font-normal font-gilroy-medium leading-none">Employer's number</div>
            <input type="text" placeholder="Employer's number *" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Company name</div>
            <input type="text" placeholder="Company name *" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Employer's email address</div>
            <input type="text" placeholder="Employer's email address" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div>
            <p className="regular-14 text-generic-500">Password must:<br />
              • Be a minimum of 8 characters<br />
              • Contain at least one uppercase letter ('A' - 'Z')<br />
              • Contain at least one symbol ('!', '*', '#', '_', etc)<br />
              • Not contain sequential letters and numbers ('abc', '123')</p>
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">New password</div>
            <input type="password" placeholder="New password *" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>
          <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
            <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Confirm new password</div>
            <input type="password" placeholder="Confirm new password *" className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
          </div>

          <Button size="lg" className="gap-2 w-fit">
            Submit
            <ArrowRightIcon size={18} className="text-violet-100 leading-tight" />
          </Button>
        </div>
      </div>
    </section >
  )
}

export default CorporatePage