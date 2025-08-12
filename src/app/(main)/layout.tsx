'use client';

import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal, openModal } from '@/store/slices/modals';
import BottomBar from '@components/BottomBar';
import Header from '@components/Header';
import Sidebar from '@components/Sidebar';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const MainLayout: NextPage<{ children: ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathName]);

  useEffect(() => {
    if (!navigator.onLine) {
      dispatch(openModal({ key: 'noInternet', isCloseAllModal: true }));
    }
    window.addEventListener('online', () => {
      dispatch(closeModal({ key: 'noInternet' }));
    });
    window.addEventListener('offline', () =>
      dispatch(openModal({ key: 'noInternet', isCloseAllModal: true })),
    );
  }, [navigator.onLine]);
  return (
    <>
      <Sidebar />
      <main className="main">
        <Header />
        {children}
      </main>
      <BottomBar />
    </>
  );
};

export default MainLayout;
