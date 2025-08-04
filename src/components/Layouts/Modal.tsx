'use client';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import type { FC, ReactNode } from 'react';
import useAppDispatch from '@hooks/useAppDispatch';
import { closeModal, type PayloadKeys } from '@store/slices/modals';
import useAppSelector from '@hooks/useAppSelector';
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
    <Modal isOpen={isOpen} size={size} onClose={localHandleClose}>
      <ModalOverlay className="h-full backdrop-blur-[2px]" />
      <ModalContent className="p-0 flex items-center relative bg-[var(--primary-0)] !rounded-5">
        <ModalHeader className="flex items-center justify-between w-full">
          <h5>{title}</h5>
          <button
            onClick={localHandleClose}
            className="text-[var(--secondary-300)]">
            <X size={35} />
          </button>
        </ModalHeader>
        <div className="px-10 py-6 w-full">{children}</div>
      </ModalContent>
    </Modal>
  );
};

export default ModalLayout;
