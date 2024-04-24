import styles from "@/styles/furtherproductoffer.module.css"
export default function FurtherProductOffer() : JSX.Element {
    return (
      <div className="container mx-auto border-r-2 border-l-2 border-b-2 border-gray-800 flex flex-row justify-between items-center bg-white shadow-lg">
        <div className="w-[35%] pt-[100px] pb-[100px] pl-[50px] pr-[50px] border-r-2 border-gray-800">
          <h2 className="text-2xl font-bold mb-4">Want to refine your craft and take a leap forward in your career?</h2>
          <p className="text-gray-800 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition duration-300">Know more</button>
        </div>
        <div className="w-[65%] pt-[100px] pb-[100px] pl-[50px] pr-[50px] mx-auto text-center">
            <div className={`${styles.miniimagewrapper} w-full h-[300px]`} />
            <h1 className="text-4xl font-bold mb-4">Attends deuspi.</h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique...
            </p>
        </div>
      </div>
    );
  }
  

