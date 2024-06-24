'ues client';

import React, { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface Props {
  markerPositions: LatLngLiteral[];
  size: number[];
}

export default function KakaoMap(props: Props) {
  const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState<{
    getCenter: () => void;
    relayout: () => void;
    setCenter: (param: any) => void;
    setBounds: (param: any) => void;
  } | null>(null);
  const [, setMarkers] = useState([]);

  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    // script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JS_KEY}&autoload=false`;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=bc261ddb63f44187aec8417909d978b3&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const center = new kakao.maps.LatLng(37.50802, 127.062835);
        const options = {
          center,
          level: 3,
        };
        const map = new kakao.maps.Map(container.current, options);
        //setMapCenter(center);
        setKakaoMap(map);
      });
    };
  }, []);

  useEffect(() => {
    if (
      kakaoMap === null ||
      container.current === undefined ||
      container.current === null
    ) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // change viewport size
    const [width, height] = size;
    // container.current.style.width = `${width}px`;
    // container.current.style.height = `${height}px`;
    container.current.style.width = `100%`;
    container.current.style.height = `${height}px`;

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(
      (pos: any) => new kakao.maps.LatLng(...pos),
    );

    // setMarkers((markers) => {
    //   // clear prev markers
    //   markers.forEach((marker: any) => marker.setMap(null));

    //   // assign new markers
    //   return positions.map(
    //     (position) => new kakao.maps.Marker({ map: kakaoMap, position }),
    //   );
    // });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds(),
      );

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);
  // @ts-ignore
  return <div id="container" ref={container} />;
}
