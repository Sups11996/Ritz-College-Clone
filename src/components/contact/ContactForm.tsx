import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
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
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow px-6 py-4 w-full max-w-110 md:max-w-sm lg:max-w-110"
    >
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
    </motion.div>
  );
}
