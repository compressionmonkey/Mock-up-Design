export default function Footer() {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="font-bold text-lg mb-2">Yssyk © by Sidebay Studio</h2>
          <p className="text-gray-400">Powered by Webflow</p>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="font-semibold text-lg mb-2">Sitemap</h3>
          <ul>
            <li><a href="/get-started" className="text-gray-400 hover:text-gray-300">Get Started</a></li>
            <li><a href="/licenses" className="text-gray-400 hover:text-gray-300">Licenses</a></li>
            <li><a href="/style-guide" className="text-gray-400 hover:text-gray-300">Style Guide</a></li>
            <li><a href="/changelog" className="text-gray-400 hover:text-gray-300">Changelog</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/3">
          <h3 className="font-semibold text-lg mb-2">Networks</h3>
          <ul>
            <li><a href="/instagram" className="text-gray-400 hover:text-gray-300">Instagram</a></li>
            <li><a href="/pinterest" className="text-gray-400 hover:text-gray-300">Pinterest</a></li>
            <li><a href="/real-life" className="text-gray-400 hover:text-gray-300">Real Life</a></li>
            <li><a href="/2493" className="text-gray-400 hover:text-gray-300">2493</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
