import Link from "next/link";

/**
 * Component to render the page title.
 *
 * @param title The page title
 * @returns The rendered page title component
 */
export default function Clients({title}: {title: string}): JSX.Element {
    
    return (
        <div className="bg-white border-r border-l border-t border-b border-gray-800 p-4 flex items-center gap-x-4 flex-grow">
            <h4 className="flex-grow font-semibold text-lg mr-4">{title}</h4>
        </div>
    );
};

