import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ } from "@/constants/tht"
import Link from "next/link"

const FAQPage = () => {
  return (
    <>
      <section className="max-container padding-container relative mt-44">
        <h1 className="bold-56 text-blue-950 !font-gilroy-semibold w-full md:w-1/2 mb-4">Frequently Asked Questions</h1>
        <p className="regular-18 text-blue-950 !font-gilroy-medium w-full md:w-1/2">Here are some of the frequently asked questions about our plans. We hope you find the answers helpful.</p>

        <div className="flex flex-col md:flex-row gap-10 mt-20">
          <div className="flex-[3]">
            <Accordion type="single" collapsible className="w-full">
              {FAQ?.map((item) =>
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="regular-24 text-blue-950 !font-gilroy-semibold text-start">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-blue-950 font-gilroy-regular">{item.answer}</AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
          <div className="flex-1 bg-blue-50 p-8 rounded-2xl space-y-2 h-fit">
            <p className="bold-36 text-blue-950 !font-gilroy-medium">Still Have Questions?</p>
            <p className="text-base text-blue-950 font-gilroy-regular">We're here to help</p>
            <Link href="mailto:contactcentre@totalhealthtrust.com">
              <Button variant="outline" className="gap-2 rounded-full text-blue-950 border border-blue-950 bg-transparent">
                <Mail size={16} />
                Send a mail
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQPage