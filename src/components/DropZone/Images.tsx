'use client';

import { FileImage } from 'lucide-react';
import { FC, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FileWithPath, useDropzone } from 'react-dropzone';
import Image from 'next/image';

interface DropZoneProps {
  className?: string;
}

const DropZoneImages: FC<DropZoneProps> = ({ className }) => {
  const [file, setFile] = useState<FileWithPath & { preview: string }>();

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    // @ts-ignore
    setFile(acceptedFiles[0]);
  }, []);

  console.log(file);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    multiple: false,
    maxSize: 1048576, // 1MB
    onDrop,
  });

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        '!border-[2px] h-[200px] border-dashed !border-gray-300 rounded-lg flex flex-col items-center justify-center gap-3',
        className,
      )}>
      {file ? (
        <Image
          className="w-full max-h-[200px] object-cover object-center"
          width={100}
          height={100}
          src={URL.createObjectURL(file)}
          alt={file.name}
        />
      ) : (
        <>
          <FileImage
            size={50}
            strokeWidth={1}
            className="text-[var(--secondary-300)]"
          />
          <p className="text-[14px] px-2 text-center text-[var(--secondary-300)]">
            Бростье изображение в данную зону или выберите
          </p>
        </>
      )}
      {/* {file && (
        <Image
          width={100}
          height={100}
          src={URL.createObjectURL(file)}
          alt="sdsd"
        />
      )} */}
      <input type="file" {...getInputProps()} />
    </div>
  );
};

export default DropZoneImages;
