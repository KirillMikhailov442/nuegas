'use client';

import { NextPage } from 'next';
import Button from '@/components/UI/Button';
import { SearchX } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NotFoundScreen: NextPage = () => {
  const { back } = useRouter();
  return (
    <div className="h-[100dvh] w-full flex items-center justify-center gap-4 flex-col">
      <SearchX size={100} />
      <h5 className="!font-semibold">Ничего не найдено</h5>
      <Button onClick={back}>Вернуться</Button>
    </div>
  );
};

export default NotFoundScreen;
