"use client";

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';

const GoBackButton = ({ text = "Go back" }: { text?: string }) => {
  const router = useRouter();

  return (
    <Button variant="link" size="lg" onClick={() => router.back()} className="gap-2 p-0">
      <ArrowLeft size={18} />
      {text}
    </Button>
  );
};

export default GoBackButton;
