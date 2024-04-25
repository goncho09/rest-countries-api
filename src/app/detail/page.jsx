'use client';

import { useSearchParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Detail from '@/components/Detail';

export default function DetailPage() {
  const searchParams = useSearchParams();
  const countryName = searchParams.get('name');

  if (!countryName) return notFound();

  return (
    <>
      <Navbar />
      <section className="flex justify-center mt-24">
        <Detail countryName={countryName} />
      </section>
    </>
  );
}
