'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Dog() {
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    async function fetchDogData() {
      const res = await fetch('/api/dog');
      if (!res.ok) {
        notFound();
      }
      const data = await res.json();
      setDogData(data);
    }
    fetchDogData();
  }, []);

  return (
    <div>
      <h1>강아지</h1>
      <h2>API 데이터:</h2>
      {dogData ? (
        <>
          <img src={dogData.image} />
          <p>{dogData.message}</p>
        </>
      ) : (
        <p>로딩 중 ...</p>
      )}
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
