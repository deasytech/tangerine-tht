"use client"

import Link from 'next/link';
import { ArrowRight, PlusCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  name: string;
  desc: string;
  isCompare?: boolean;
}

const LibertyCoverCard = ({ name, desc, isCompare = true }: Props) => {
  return (
    <div className="border border-gray-300 px-6 py-10 rounded-2xl space-y-4">
      <p className="bold-32 text-blue-950">{name}</p>
      <p className="text-base text-generic-950 font-gilroy-regular">{desc}</p>
      <div className="pt-10 flex justify-between items-center">
        {isCompare &&
          <Button variant="outline" className="gap-2 rounded-full text-blue-950" size="sm">
            <PlusCircle size={14} /> Add to compare
          </Button>
        }

        <Link href="/get-quote">
          <Button size="sm" className="gap-2">
            Get a Quote
            <ArrowRight size={14} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default LibertyCoverCard