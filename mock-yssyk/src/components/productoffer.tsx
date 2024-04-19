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
        <div className="flex border-r border-l border-t border-b border-gray-800 ">
            <div className="bg-white p-4 w-1/2 space-y-4">
                <h1 className="text-6xl font-bold">{title}</h1>
                <h2 className="text-3xl font-bold">{subtitle}</h2>
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
    );
};

