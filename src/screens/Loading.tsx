import { NextPage } from 'next';
import logo from '@/../public/icons/192x192.png';
import progress from '@images/loading.gif';
import Image from 'next/image';

const LoadingScreen: NextPage = () => {
  return (
    <div className="h-[100dvh] w-full flex items-center justify-center gap-3 flex-col">
      <Image height={100} width={100} src={logo} alt="logo" loading="lazy" />
      <Image src={progress} alt="progress" />
    </div>
  );
};

export default LoadingScreen;
