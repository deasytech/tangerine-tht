"use client";

import { TeamMembersProps } from '@/types';
import Image from 'next/image'
import { useState } from 'react';
import TeamModal from '../TeamModal';

interface Props {
  member: TeamMembersProps;
  width?: number;
  height?: number;
}

const TeamCard = ({ member, width = 280, height = 296 }: Props) => {
  const [ selectedMember, setSelectedMember ] = useState<TeamMembersProps | null>(null);
  const [ isModalOpen, setModalOpen ] = useState(false);

  const handleCardClick = (member: TeamMembersProps) => {
    setSelectedMember(member);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <div className='flex flex-col gap-1 w-full cursor-pointer' onClick={() => handleCardClick(member)}>
        <div className="relative">
          <Image src={member?.image} alt={member?.name} width={width} height={height}
            className='w-full object-contain h-auto' />
          <div className="absolute rounded-lg bottom-4 left-4 right-4 bg-white p-3">
            <h3 className='text-blue-base font-gilroy-medium'>{member?.name}</h3>
            <p className='regular-12'>{member?.position}</p>
          </div>
        </div>
      </div>
      {selectedMember && (
        <TeamModal
          member={member}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default TeamCard