'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import useAppDispatch from '@/hooks/useAppDispatch';
import { closeModal, type PayloadKeys } from '@/store/slices/modals';
import useAppSelector from '../../../hooks/useAppSelector';
import styles from './Modal.module.scss';
import { X } from 'lucide-react';

interface IModal {
  name: PayloadKeys;
  title: string;
  handleClose?: () => void;
  children: ReactNode;
  size?:
    | '2xl'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | (string & {})
    | 'xs'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | 'full';
}

const ModalLayout: FC<IModal> = ({
  name,
  title,
  handleClose,
  children,
  size = 'md',
}) => {
  const { onClose } = useDisclosure();
  const isOpen = useAppSelector(state => state.modals.visibles[name]);
  const dispatch = useAppDispatch();
  const localHandleClose = () => {
    if (handleClose) handleClose();
    dispatch(closeModal({ key: name }));
    onClose();
  };
  return (
    <Modal
      isOpen={isOpen}
      size={size}
      onClose={localHandleClose}>
      <ModalOverlay className={styles.oerlay} />
      <ModalContent className={styles.modal}>
        <ModalHeader className={styles.header}>
          <h5>{title}</h5>
          <button
            onClick={localHandleClose}
            className={styles.close}>
            <X size={35} />
          </button>
        </ModalHeader>
        <div className={styles.content}>{children}</div>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
