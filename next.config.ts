import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/5a/15/26/5a152660-c88b-f767-ec81-c001daeeb34a/AppIcon-0-0-1x_U007epad-0-1-85-220.png/256x256bb.jpg'),
      new URL('https://d1nxzqpcg2bym0.cloudfront.net/google_play/nigeria.plate.number.verification/889e7bb0-d5ae-11ea-ac72-25f57d44689b/128x128'),
      new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxsAzGOZQO2zt3QOikxoGX2BGZBqz42SNBQ&s'),
      new URL('https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/8e/ca/e9/8ecae980-3eff-46ae-9ff2-beb28c1583b4/source/256x256bb.jpg'),
      new URL('https://t4.ftcdn.net/jpg/01/29/40/83/360_F_129408389_XnhdlJNowRogIcPUtDjs99E5wznr5WqT.jpg'),
    ],
  },
};

export default nextConfig;
