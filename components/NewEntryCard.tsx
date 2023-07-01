'use client';

import { createNewEntry } from '@/utils/api';
import { useRouter } from 'next/navigation';

const NewEntryCard = () => {
  const router = useRouter();
  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };
  return (
    <div
      className="overflow-hidden rounded-lg bg-white cursor-pointer shadow"
      onClick={handleOnClick}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="text-3xl">New Entry Card</span>
      </div>
    </div>
  );
};

export default NewEntryCard;
