/**
 * Component to render the page title.
 *
 * @param title The page title
 * @returns The rendered page title component
 */
// FurtherOffer.js
export default function FurtherProductOffer() : JSX.Element {
    return (
      <div className="container mx-auto border-r-2 border-l-2 border-b-2 border-gray-800 p-4 flex flex-row justify-between items-center bg-white shadow-lg">
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Want to refine your craft and take a leap forward in your career?</h2>
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition duration-300">Know more</button>
        </div>
        <div className="w-1/2">
          {/* As we don't have the actual image, I'm using a placeholder. */}
          {/* In a real application, you would have an <img> tag here */}
          <div className="bg-gray-300 h-64"></div>
        </div>
      </div>
    );
  }
  

