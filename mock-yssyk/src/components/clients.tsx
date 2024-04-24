import Image from 'next/image';
import style from '@/styles/clients.module.css';
const imageArray = [
    { src: 'https://assets.website-files.com/6221c5775380cd90d164afdb/622234041127838be385b720_file-2.svg', alt: 'Product', width: 150, height: 30 },
    { src: 'https://assets.website-files.com/6221c5775380cd90d164afdb/62223420dbfb48429ab3ac61_file-3.svg', alt: 'Snapshot', width: 150, height: 30 },
    { src: 'https://assets.website-files.com/6221c5775380cd90d164afdb/6222342a9950a5d11a7356d6_file-4.svg', alt: 'GenZ', width: 150, height: 30 },
    { src: 'https://assets.website-files.com/6221c5775380cd90d164afdb/6222344083fee15341a7a4ad_file-5.svg', alt: 'Sitemark', width: 150, height: 30 },
    { src: 'https://assets.website-files.com/6221c5775380cd90d164afdb/62223446ab6bbed9906390cc_file-6.svg', alt: 'Volume', width: 150, height: 30 },
  ];

export default function Clients({title}: {title: string}): JSX.Element {
    
    return (
        <div className="flex justify-between items-center bg-white border-r-2 border-l-2 border-b-2 border-b border-gray-800 py-30 pl-50 pr-50">
        {imageArray.map((logo, index) => (
        <div key={index} className="flex-shrink-0"> {/* Adding flex-shrink-0 to prevent resizing */}
            <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            objectFit="contain"
            className={style.inverted}
            />
        </div>
        ))}
        </div>
    );
};

