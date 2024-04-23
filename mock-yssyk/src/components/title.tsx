import Link from "next/link";

/**
 * Component to render the page title.
 *
 * @param title The page title
 * @returns The rendered page title component
 */
export default function Title({title}: {title: string}): JSX.Element {
    
    return (
        <div className="bg-white max-h-64 sm:max-h-96 md:max-h-128 lg:max-h-screen xl:max-h-full mt-7 border-t-2 border-l-2 border-r-2 border-gray-800 pl-50 pr-50 pb-30 pt-30 flex items-center gap-x-4 flex-grow">
            <h4 className="flex-grow font-semibold text-lg mr-4">{title}</h4>
            <nav>
                <Link legacyBehavior href="/blog" passHref>
                    <a className="pt-1 pb-1 text-lg font-bold no-underline hover:underline focus:outline-none">
                        Blog
                    </a>
                </Link>
            </nav> 
        </div>
    );
};

