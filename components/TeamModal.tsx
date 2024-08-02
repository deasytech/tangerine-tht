"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { TeamMembersProps } from "@/types"
import Image from "next/image"

interface TeamModalProps {
  member: TeamMembersProps | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, isOpen, onClose }) => {
  if (!member) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full h-[100vh] md:h-auto max-w-5xl mx-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-4xl font-gilroy-semibold tracking-tight">{member.name}</DialogTitle>
          <DialogDescription className="text-xl font-gilroy-regular text-orange-base">{member.position}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-full md:w-3/5 max-h-[70vh] overflow-auto md:pr-4">
            <div
              className="team"
              dangerouslySetInnerHTML={member.bio ? { __html: member.bio } : undefined}
            />
          </div>
          <div className="w-full md:w-2/5 flex-shrink-0 hidden md:block">
            <Image
              src={member.mainImage || "/images/team/no-image.png"}
              alt={member.name}
              width={404}
              height={554}
              className="w-full object-cover rounded-md"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
};

export default TeamModal
