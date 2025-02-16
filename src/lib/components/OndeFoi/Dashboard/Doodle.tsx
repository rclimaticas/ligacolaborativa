/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import dashboardImage from './dashboardImage';

export default function Dashboard() {
  return (
    <div className="motion-preset-slide-right flex w-full items-center justify-center">
      <img
        alt="Imagem"
        src={dashboardImage}
        className="z-40 rounded-lg border-4 border-green-100 shadow-lg"
      />
    </div>
  );
}
