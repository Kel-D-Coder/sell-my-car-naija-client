export default function Footer() {
  return (
    <footer className="w-full bg-white  mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Sellmycarnaija. All rights reserved.
        </span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-green-700 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700 text-sm">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}