'use client';

import { FC, useState } from 'react';
import { YMaps, Map as CMap, Placemark } from '@pbe/react-yandex-maps';
import { twMerge } from 'tailwind-merge';
import { DEFAULT_COORDS } from '@/configs/geo';

interface IMap {
  label?: string;
  defaultCords: [number, number];
  placemark: [number, number];
  error?: string;
  onChange?: (coords: [number, number]) => void;
}

const Map: FC<IMap> = ({ label, error, onChange, defaultCords }) => {
  const [coords, setCoords] = useState<[number, number]>(defaultCords);

  // @ts-ignore
  const handleMapClick = event => {
    const coordinates: [number, number] = event.get('coords');
    setCoords(coordinates);
    if (onChange) onChange(coordinates);
  };
  return (
    <div>
      {label && (
        <p className="text-[14px] mb-1 text-[var(--secondary-300)]">{label}</p>
      )}
      <div className="h-[300px]">
        <YMaps>
          <CMap
            onClick={handleMapClick}
            className={twMerge(
              '!border !border-solid !border-[var(--primary-200)] !box-content p-0.5 rounded-md w-full h-[300px]',
              error && '!border-[var(--error-500)]',
            )}
            defaultState={{
              center: coords || DEFAULT_COORDS,
              zoom: 15,
            }}>
            {coords && <Placemark geometry={coords} />}
          </CMap>
        </YMaps>
      </div>
      {error && (
        <p className="text-[var(--error-500)] text-[12px] !mt-1">{error}</p>
      )}
    </div>
  );
};

export default Map;
