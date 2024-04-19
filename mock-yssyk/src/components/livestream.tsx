// components/ProjectVideo.js
export default function LiveStream() {
    return (
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          {/* This would be your video thumbnail image */}
          <img
            src="/path-to-your-thumbnail.jpg"
            alt="Video Thumbnail"
            className="w-full"
          />
          {/* Play button overlay */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Replace with an actual play button icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 fill-current text-red-600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-2">PROJECT 350</h2>
          <p className="text-gray-700">
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.
          </p>
          <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition ease-in-out duration-300">
            Know More
          </button>
        </div>
      </div>
    );
  }
  