"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

/**
 * Factory location: Golestan, Baharestan County, Tehran — second roundabout,
 * Dariush St., Salmani, Baharestan 4, No. 100. Adjust if the pin needs nudging.
 */
export const FACTORY_LOCATION = { lat: 35.5175, lng: 51.1734 } as const;
export const FACTORY_ADDRESS =
  "تهران، شهرستان بهارستان، شهر گلستان، فلکه دوم خیابان داریوش سلمانی بهارستان ۴ پلاک ۱۰۰";

const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44" aria-hidden="true"><path d="M17 1C8.2 1 1 8 1 16.7 1 28.5 17 43 17 43s16-14.5 16-26.3C33 8 25.8 1 17 1Z" fill="#315f9b" stroke="#fff" stroke-width="2"/><circle cx="17" cy="16.5" r="6" fill="#fff"/></svg>`;

export default function FactoryMap({ zoom = 16 }: { zoom?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let disposed = false;
    let map: import("leaflet").Map | undefined;

    // Leaflet touches `window`, so load it only in the browser.
    import("leaflet").then((L) => {
      if (disposed) return;
      map = L.map(el, {
        center: [FACTORY_LOCATION.lat, FACTORY_LOCATION.lng],
        zoom,
        scrollWheelZoom: false,
        attributionControl: true,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
      L.marker([FACTORY_LOCATION.lat, FACTORY_LOCATION.lng], {
        icon: L.divIcon({ html: PIN_SVG, className: "", iconSize: [34, 44], iconAnchor: [17, 43], popupAnchor: [0, -38] }),
        title: "کارخانه پافیکس برتر",
        alt: "کارخانه پافیکس برتر",
      })
        .addTo(map)
        .bindPopup(`<div dir="rtl" style="font-family:Vazirmatn,sans-serif;font-size:13px;line-height:1.8">${FACTORY_ADDRESS}</div>`);
    });

    return () => {
      disposed = true;
      map?.remove();
    };
  }, [zoom]);

  return (
    <div
      ref={containerRef}
      dir="ltr"
      role="region"
      aria-label="نقشه موقعیت کارخانه پافیکس برتر"
      className="h-full w-full [&_.leaflet-control-attribution]:text-[10px]"
    />
  );
}
