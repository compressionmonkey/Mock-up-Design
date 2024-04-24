import Image from 'next/image';
/**
 * Component to render the page title.
 *
 * @param title The page title
 * @returns The rendered page title component
 */
export default function ProductOffer({title, subtitle, text, CTA, media}: {title: string, subtitle: string, text?: string, CTA: Array<{title?: string, Action?: string}> | [], media?: Array<{url: string}>}): JSX.Element {
    const ctaTitle = CTA?.[0]?.title;
    const ctaAction = CTA?.[0]?.Action;
    return (
        <div className="flex flex-col md:flex-row border-2 border-gray-800">
    <div className="w-full md:w-1/2 flex flex-col bg-white p-4 md:p-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">{title}</h1>
        <h2 className="text-2xl md:text-3xl font-bold">{subtitle}</h2>
        <p className="text-base">{text}</p>
        <form className="flex flex-col sm:flex-row border-2 border-gray-800 items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input type="email" placeholder={ctaTitle} className="p-2 w-full py-1.5 pr-1.5 pl-[15px]" />
            <button className="bg-black text-white px-4 py-2 w-full sm:w-auto py-1.5 pr-1.5 pl-[15px]">{ctaAction}</button>
        </form>
    </div>
    <div className="w-full md:w-1/2 relative min-h-[50vh]">
        <Image
            src="https://assets.website-files.com/6221c5775380cd90d164afdb/64c3ae629d1f39826fb874d0_6baeafd5ae661fcf81ec8c.webp"
            alt="Descriptive text about the image"
            layout="fill"
            objectFit="cover"
        />
    </div>
</div>
   
    );
};

