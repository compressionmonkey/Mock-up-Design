// components/FurtherOfferWithImage.js
export default function ProductOfferEncore() {
    return (
      <div className="flex bg-white justify-between items-center mx-auto my-8 p-4">
        <div className="w-1/2 flex flex-col">
          <div className="mb-4">
            {/* For a real application, replace with <img src="your-image-path.jpg" alt="descriptive text" /> */}
            <div className="bg-gray-300 h-64"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Attends encore!</h3>
            <p className="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-white p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Want to refine your craft and take a leap forward in your career?</h2>
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
        </div>
      </div>
    );
  }
  