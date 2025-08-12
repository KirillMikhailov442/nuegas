'use client';

import type { FC } from 'react';
import { Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import { IEmployee } from '@/types/Employee';

const EmoloyeeCard: FC<IEmployee> = ({ name, surname, img }) => {
  return (
    <li className="c-border p-4 rounded-lg relative bg-[var(--primary-0)] border border-solid border-[var(--primary-200)]">
      <div className="flex items-center gap-2">
        <Avatar name={name} src={img} />
        <h6 className="font-semibold">
          {name} {surname}
        </h6>
      </div>
      <Link
        href={'/'}
        className="mt-2 !text-[var(--primary-500)] text-lg float-left">
        12 Задача
      </Link>
    </li>
  );
};

export default EmoloyeeCard;
