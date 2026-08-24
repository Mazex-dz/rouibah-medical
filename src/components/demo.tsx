"use client";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import LoaderOne from "@/components/ui/loader-one";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;
 
const SLIDES = [
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnY2v8ZLeGFxF3wVFczcIG2l61GOHeUnXlRpkO6ln8lDrsYmhysUKcqge33oRDDrrdKRtUXXdCm6Oyxm7tsyX5B69wKZEZhsOZqGlPSwlbbE02osfsDLv0k4qhKaNdRYthe4sK0=s800",
    "alt": "صورة من العيادة 1",
    "title": "عيادة الرويبح 1",
    "subtitle": "صورة 1",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm2QZJ2uo0pVJykrphmJS9rmSzSXgCTHCKAbeQt_cWMozJjFUaM8P-6pGUghC_cSIn-MFHwTJupsing4KTjGMvhoeIswrZU_ioHyCHCB0PcHWikSbAzwti0o8TeDM2x7DsFCq9o=s800",
    "alt": "صورة من العيادة 2",
    "title": "عيادة الرويبح 2",
    "subtitle": "صورة 2",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkYI0AtSy9FHtA1Wq76X02Dzb7DE4_FxuOq6GfOUqnDc1v4GSul7Bn0PBhhk-1dqziq3Qlxt9CmsLFFvS4uNcP2ODZNgZOl9N0RsZgQxBpRrrrDe1gfl2vnIwwvYeEPIrgCGnkH=s800",
    "alt": "صورة من العيادة 3",
    "title": "عيادة الرويبح 3",
    "subtitle": "صورة 3",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkENYUE4M9aIsFiiP-4oRlnGf2uZXG2VFILoUnnOTldVudd-BkOCgrlsY2pifltr-BnPmNOSJhjq4TCYGC-_LZwomXZo-1LJ3Gvxn-_fAbQxcEi0LtuhA-bJ5RI8ZMLoTchwuzgxR7ELt8=s800",
    "alt": "صورة من العيادة 4",
    "title": "عيادة الرويبح 4",
    "subtitle": "صورة 4",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnkFgnHXHPIjqaHHA01zQl3Ry5hrqmrU-rbD-FcJ2z0_4d607PF0IVleuMaBx5GvsS0WJ4gPG_NDGgZerSc_wVdbi9rgji7fDzFJTaMBJG1He-7KFw04jhk1WaupJj-KcdqjMFGEUzepZT2=s800",
    "alt": "صورة من العيادة 5",
    "title": "عيادة الرويبح 5",
    "subtitle": "صورة 5",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkCeHg3YTAuEB4nIDm2432kvaUSJ9ardDBbI_3trnUf4l_ySJqxeeDyuAgYsTaOiMKezQaqPLGMNAAiOv-rAaatvxsensKCtW00f6yBowUzcPCjs3Hb6Q8mtw2moZRCPpK_BtsAkFI7Q6D6=s800",
    "alt": "صورة من العيادة 6",
    "title": "عيادة الرويبح 6",
    "subtitle": "صورة 6",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkLHsDHM3pVxEgKWJJ40bHvEvhRPmZJHKPG0m2-TkMsDsAidDSCXjeb8euQAMLq-AW1eI_gwbUNa7qAYO1-z5VQVA72s9DLcizEwozXYKrloTkJ0f_C0KaMbfjPwXeutG0Fxwwu5SnojMHQ=s800",
    "alt": "صورة من العيادة 7",
    "title": "عيادة الرويبح 7",
    "subtitle": "صورة 7",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl5GyiNZ5hnR3IwdJE4e7B6WoZ4XHwglYPvyXskST789xcrAtIDUIQiiX_dixKAvgxy83TdpxmQgyJdn3TUeMIt6E1tmU5681U52Wdqnc91YBRbTiC_g5xQBhjMFiS829ycREQSAQ=s800",
    "alt": "صورة من العيادة 8",
    "title": "عيادة الرويبح 8",
    "subtitle": "صورة 8",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkjIBH6yFIPAQp-R3NgBkBVDnYZdcf5kBdsoyTsJfjVd7Mes1Lb7qrWaz4vx014P9ExTumxfKCs9Vn6BWUbzB7YdGn4Y2mLuwmLDl07TI88g3EryctgfwT-pahUTH469uDzyZ7PXQ=s800",
    "alt": "صورة من العيادة 9",
    "title": "عيادة الرويبح 9",
    "subtitle": "صورة 9",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXtfQN9n235zGpo-4bYL3SzKRFIbXhcAP8Ii7ZaGd4kiWs8atqMp_TDDIn36HoeE1idu00D_k8Vj_yJnNWA3XTgva6Yo2_vWhRBks5iukSW_6adKpDv5paFjbxVblc2nHx5bMLYA=s800",
    "alt": "صورة من العيادة 10",
    "title": "عيادة الرويبح 10",
    "subtitle": "صورة 10",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmxhMxEI73qXF1tzV38JCxDut08mRkioYRgJGYoZh_9DbDWXE34bcHyv53WU-2cOG6P8XOQkgJIA3AraQD2hF63-OgoDgeoj1iiX_dz_5UxUkqathaDssnDvuav5e3uTSElSwNZs6zxVFgP=s800",
    "alt": "صورة من العيادة 11",
    "title": "عيادة الرويبح 11",
    "subtitle": "صورة 11",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  },
  {
    "src": "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl0FwP1HDZP6Ss9mGRJt79ayhFJVFP0ztnyTZi-76NOEAcKo9pVOVFgn6lUPh7F9htkbUwlVZxMeVzcDJ3AnZW4DUOO8fMIoc1LronwL9Jbng556rUKzQ7gUZcdFxdIJq4In0w=s800",
    "alt": "صورة من العيادة 12",
    "title": "عيادة الرويبح 12",
    "subtitle": "صورة 12",
    "meta": [
      {
        "label": "الموقع",
        "value": "برج منايل"
      }
    ]
  }
];
 
export default function DemoOne() {
  return (
    <div className="w-full overflow-hidden bg-background py-6">
      <CoverflowCarousel slides={SLIDES} showCaption />
    </div>
  );
}

export function LoaderDemo() {
    return <LoaderOne />;
}
