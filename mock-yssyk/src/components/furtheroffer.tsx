import style from '@/styles/furtheroffer.module.css';
export default function FurtherOffer(): JSX.Element {
    
    return (
        <div className="flex justify-center items-center border-r-2 border-l-2 border-b-2 border-gray-800 bg-white py-[150px] pl-[50px] pr-[50px]">
                <div className="w-[45%]">
                <div className={style.bligimagewrapper}></div>
                </div>
                <div className="w-[55%] p-8">
                <div className="text-lg font-semibold mb-4">yssyk</div>
                <div className="text-2xl font-bold mb-4">Want to refine your craft and take a leap forward in your career?</div>
                <p className="text-gray-700 mb-4">
                    A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
                </p>
                <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700">
                    Know more
                </button>
                </div>
    </div>
    );
};

