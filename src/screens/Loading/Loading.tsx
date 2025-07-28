import { NextPage } from "next";
import logo from '@/../public/icons/192x192.png'
import Image from "next/image";
import { CircularProgress } from "@chakra-ui/react";
import styles from './Loading.module.scss';

const LoadingScreen: NextPage = () =>{
    return<div className={styles.page}>
        <Image height={100} width={100} src={logo} alt="logo" loading="lazy"/>
        <CircularProgress isIndeterminate color='blue.500' />
    </div>
}

export default LoadingScreen