'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Cat() {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    async function fetchCatData() {
      const res = await fetch('/api/cat');
      if (!res.ok) {
        notFound();
      }
      const data = await res.json();
      setCatData(data);
    }
    fetchCatData();
  }, []);

  return (
    <div>
      <h1>고양이</h1>
      <h2>API 데이터:</h2>
      {catData ? (
        <>
          <img src={catData.image} />
          <p>{catData.message}</p>
        </>
      ) : (
        <p>로딩 중...</p>
      )}
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
