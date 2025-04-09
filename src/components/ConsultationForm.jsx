import { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Consultation request submitted!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#f5f3ef] py-10 px-4 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white border border-[#d9b382] rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#b89668] mb-4 text-center leading-snug">
          Tell Us Your Story
          <br />
          <span className="text-sm text-[#7a6440]">
            So we can help create your dream space.
          </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[#d9b382] rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#b89668]"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#d9b382] hover:bg-[#b89668] text-black font-medium text-sm py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
