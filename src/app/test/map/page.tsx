'use client';

import KakaoMap from '@/components/map/kakaoMap';

//ref. https://codesandbox.io/s/dazzling-colden-cqyyr3?file=/src/App.js
export default function Page() {
  return (
    <div className="">
      <p>테스트11 </p>
      <KakaoMap markerPositions={[]} size={[100, 580]} />
    </div>
  );
}
