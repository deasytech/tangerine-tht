"use client"

import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const GetQuoteForm = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const router = useRouter();

  const handlePrevious = () => {
    router.push('/get-quote?page=1');
  };

  return (
    page !== "2" ?
      <>
        <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className="w-full text-zinc-800 text-xs font-normal font-gilroy-medium leading-none">Company name</div>
          <input type="text" placeholder='Company name' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Number of employees</div>
          <input type="text" placeholder='Number of employees needing cover?' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Choose countries</div>
          <input type="text" placeholder='Select country' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Product range</div>
          <input type="text" placeholder='Select product' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>

        <Link href="/get-quote?page=2">
          <Button variant="default" className="!px-6 gap-2">
            Next
            <ArrowRightIcon size={18} />
          </Button>
        </Link>
      </>
      :
      <>
        <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className="w-full text-zinc-800 text-xs font-normal font-gilroy-medium leading-none">Role</div>
          <input type="text" placeholder='Select role' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className="w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Preferred plan</div>
          <input type="text" placeholder='Select plan' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Full name</div>
          <input type="text" placeholder='Full name' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Email address</div>
          <input type="text" placeholder='Email address' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Phone number</div>
          <input type="text" placeholder='Phone number' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>
        <div className=" w-full h-20 flex-col justify-start items-start gap-2 flex">
          <div className=" w-full text-zinc-800 text-xs font-normal font-gilroy-semibold leading-none">Preferred contact method</div>
          <input type="text" placeholder='Select method' className="w-full h-20 px-6 bg-white rounded-md border border-neutral-300 justify-start items-center" />
        </div>

        <div className="flex justify-between items-center">
          <Button variant="outline" className="!px-10" onClick={handlePrevious}>Previous</Button>
          <Link href="">
            <Button variant="default" className="!px-6 gap-2">
              Submit
              <ArrowRightIcon size={18} />
            </Button>
          </Link>
        </div>
      </>
  )
}

export default GetQuoteForm
