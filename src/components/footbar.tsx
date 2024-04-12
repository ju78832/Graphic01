

export default function Footbar() {
  return (
    <div className="bg-black py-12 text-gray-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8 gap-8">
            <div>
                <h2 className="text-white text-xl font-semibold mb-4">
                    About Us
                </h2>
                <p className="mb-4">
                Elevate your brand with bespoke graphic designs at our shop. 
    Collaborative, creative, and detail-oriented, we craft captivating 
    visuals that reflect your brand's identity.
                </p>
            </div>
            <div>
                <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
                <ul >
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300"> Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300"> Model</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300"> Contact Us</a>
                    </li>
                </ul>
            </div>
            <div>
            <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
            <ul >
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300"> Facebook</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300"> Instagram</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition-colors duration-300"> Twitter</a>
                    </li>
                </ul>
            </div>
            <div>
            <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
            <p>Aligarh, UP</p>
            <p>Aligarh 202001</p>
            <p>Email: info@graphics.com</p>
            <p>Phone: (+91) 456-7890</p>
            </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024, Made By <a href="#">Mohd.Juned</a>. All rights reserved.</p>
    </div>
  )
}
