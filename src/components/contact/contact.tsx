import { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!fullName || !phone || !address || !email || !message) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email");
      return;
    }

    if (!/^(97|98)\d{8}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits and start with 97 or 98");
      return;
    }

    setError("");
    setFullName("");
    setPhone("");
    setAddress("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-[#f3f3f3] px-6 md:px-12 lg:px-16 pt-21 md:pt-25 pb-10 md:pb-15 flex justify-center">
      <div className="w-full max-w-6xl flex items-center justify-center relative">
        {/* Left: Form Card */}
        <div className="bg-white rounded-2xl shadow px-6 py-4 w-full max-w-110">
          <h2 className="text-xl md:text-2xl font-extrabold text-center text-[#1a1a1a] mb-3">Contact Us</h2>

          {error && (
            <p className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4 text-sm">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-2 ">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-1.5 border border-[#ededed] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1300b9] bg-white text-sm"
            />

            <label className="text-sm font-medium">Phone</label>
            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="97XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-1.5 border border-[#ededed] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1300b9] bg-white text-sm"
            />

            <label className="text-sm font-medium">Address</label>
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-1.5 border border-[#ededed] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1300b9] bg-white text-sm"
            />

            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="jane@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-1.5 border border-[#ededed] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1300b9] bg-white text-sm"
            />

            <label className="text-sm font-medium">Your Message</label>
            <textarea
              placeholder="Message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-1.5 border border-[#ededed] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1300b9] resize-none bg-white text-sm"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-[#1100AB] hover:bg-[#1300b9] text-[#f3f3f3] text-sm font-semibold rounded-md transition mt-1"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Right: Decorative panel with contact info */}
        <div className="hidden md:block relative h-115 w-96">
          {/* Blue vertical bar fills the panel height and is anchored to the right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-44 bg-[#1100AB] rounded-2xl"></div>

          {/* Black info box overlapping the blue bar; right edges aligned and vertically centered within the panel */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-72 bg-black text-white p-4 shadow-lg z-20 rounded-tl-2xl rounded-bl-2xl">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                </svg>
                <span className="text-sm">Dharan Road, Itahari, Nepal</span>
              </li>

              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-sm">ritzcollegeofhm@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57.13.34.03.74-.24 1.05l-2.21 2.17z" />
                </svg>
                <span className="text-sm">+977 25-587251</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}