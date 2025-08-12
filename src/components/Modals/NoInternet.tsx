'use client';

import type { FC } from 'react';
import ModalLayout from '@components/Layouts/Modal';
import { WifiOff } from 'lucide-react';

const NoInternetModal: FC = () => {
  return (
    <ModalLayout
      name="noInternet"
      showClose={false}
      closeOnOverlayClick={false}>
      <div className="flex flex-col items-center justify-center gap-4 text-[var(--error-500)]">
        <WifiOff size={80} />
        <h4 className="text-center">У вас нету подключения к интернету</h4>
      </div>
    </ModalLayout>
  );
};

export default NoInternetModal;
