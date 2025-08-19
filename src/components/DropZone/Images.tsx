'use client';

import { FileImage, X } from 'lucide-react';
import { FC, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FileWithPath, useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { IMAGES_CONFIG } from '@configs/files';

interface DropZoneProps {
  className?: string;
  value?: FileWithPath | string;
  multiple?: boolean;
  onChange?: (data: FileWithPath) => void;
  onClose?: () => void;
  error?: string;
  name?: string;
}

const DropZoneImages: FC<DropZoneProps> = ({
  className,
  value,
  onChange,
  onClose,
  error,
  name,
}) => {
  const [file, setFile] = useState<FileWithPath | string | undefined>(value);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles[0]);

    if (onChange) onChange(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { [`${IMAGES_CONFIG.accept}`]: [] },
    multiple: false,
    maxSize: IMAGES_CONFIG.maxSize,
    onDrop,
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={twMerge(
          'group relative !border-[2px] h-[200px] border-dashed !border-gray-300 rounded-lg flex flex-col items-center justify-center gap-3',
          isDragActive && '!border-black-500',
          error && '!border-[var(--error-500)]',
          className,
        )}>
        {file && (
          <button
            onClick={e => {
              e.stopPropagation();
              setFile(undefined);
              if (onClose) onClose();
            }}
            className="absolute transition-opacity opacity-0 !p-2 top-1 right-1 !bg-black/20 !text-white/60 rounded-full group-hover:opacity-100 hover:!bg-black/40 max-md:opacity-100">
            <X size={20} />
          </button>
        )}
        {file ? (
          <Image
            className="w-[98%] max-h-[190px] object-cover object-center m-2 rounded-sm"
            width={100}
            height={100}
            src={typeof file == 'string' ? file : URL.createObjectURL(file)}
            alt={'изображение'}
          />
        ) : (
          <>
            <FileImage
              size={50}
              strokeWidth={1}
              className={twMerge(
                'text-[var(--secondary-300)]',
                error && 'text-[var(--error-500)]',
              )}
            />
            <p
              className={twMerge(
                'text-[14px] px-2 text-center text-[var(--secondary-300)]',
                error && 'text-[var(--error-500)]',
              )}>
              Бростье изображение в данную зону или выберите (не больше 2 МБ)
            </p>
          </>
        )}
        <input name={name} type="file" {...getInputProps()} />
      </div>
      {error && (
        <p className="text-[var(--error-500)] text-[12px] !mt-1">{error}</p>
      )}
    </div>
  );
};

export default DropZoneImages;
