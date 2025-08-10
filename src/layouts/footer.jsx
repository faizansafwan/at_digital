import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row md:items-start md:justify-between">
        
        {/* Left - Logo & Description */}
        <div className="md:w-1/3">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-4" />
          <p className="text-sm leading-relaxed">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective –
            your business results.
          </p>
        </div>

        {/* Right - Services & Technologies */}
        <div className="mt-8 md:mt-0 flex flex-col md:flex-row md:gap-16 space-y-6 md:space-y-0 text-sm md:mr-10">
          
          {/* Our Technologies */}
          <div>
            <h3 className="font-bold mb-3">Our Technologies</h3>
            <ul className="space-y-2">
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-bold mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-col p-2">
        <div className="md:w-1/3 justify-center md:mx-auto mx-5 border-t border-white p-2 text-center text-sm">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#terms" className="hover:underline">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
