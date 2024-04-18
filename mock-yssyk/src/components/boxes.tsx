import Link from "next/link";
import Image from 'next/image';

export default function Box({ Title, subTitle, text, CTA, media, split }: Readonly<{ Title: string, subTitle?: string, text?: string, CTA: Array<{Title: string, Action?: string}>, media?: Array<{url: string}>, split: Boolean}>) {
  const ctaTitle = CTA?.[0]?.Title;
  const ctaAction = CTA?.[0]?.Action;
  return split ? (
    <div className="flex border-r border-l border-t border-b border-gray-800 ">
      <div className="bg-white p-4 w-1/2 space-y-4">
        <h1 className="text-6xl font-bold">{Title}</h1>
        <h2 className="text-3xl font-bold">{subTitle}</h2>
        <p className="text-base">{text}</p>
        <form className="flex items-center space-x-2">
          <input type="email" placeholder={ctaTitle} className="border-2 border-black p-2 flex-grow" />
          <button className="bg-black text-white px-4 py-2">{ctaAction}</button>
        </form>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="https://assets.website-files.com/6221c5775380cd90d164afdb/64c3ae629d1f39826fb874d0_6baeafd5ae661fcf81ec8c.webp"
          alt="Descriptive text about the image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  ) : (
    <div className="bg-white border-r border-l border-t border-b border-gray-800 p-4 flex items-center gap-x-4 flex-grow">
      <h4 className="flex-grow font-semibold text-lg mr-4">{Title}</h4>
      <nav>
        <Link legacyBehavior href="/blog" passHref>
          <a className="pt-1 pb-1 text-lg font-semibold no-underline hover:underline focus:outline-none">
            Blog
          </a>
        </Link>
      </nav> 
  </div>
  );
}


