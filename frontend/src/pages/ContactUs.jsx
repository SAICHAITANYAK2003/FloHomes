import { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const onHanldeSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const resultData = new FormData();
    resultData.append("access_key", import.meta.env.VITE_WEB_FORM_KEY);
    resultData.append("name", formData.name);
    resultData.append("email", formData.email);
    resultData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: resultData,
      });

      const fetchedData = await response.json();

      if (fetchedData.success) {
        setFormData({ name: "", email: "", message: "" });
        toast.success("Details Submitted Successfully ");
      } else {
        toast.error(fetchedData.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <div className="py-16 px-4   md:px-24 scroll-smooth" id="contactus">
        <h1 className="text-center mt-4 text-4xl font-semibold">
          Customer <span className="font-light underline">Testimonials</span>
        </h1>
        <p className="text-center mt-4 text-gray-500">
          Ready to Make a Move? Let’s Build Your Future Together
        </p>

        <form
          onSubmit={onHanldeSubmit}
          className="mt-28 mx-auto flex flex-col items-center justify-center max-w-2xl"
        >
          <div className="flex   gap-4 w-full">
            <input
              value={formData.name}
              onChange={onHandleChange}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="pl-2 py-2.5 border border-gray-300 w-full rounded-md"
              required
            />

            <input
              value={formData.email}
              onChange={onHandleChange}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="pl-2 py-2.5 border border-gray-300 w-full rounded-md"
              required
            />
          </div>

          <textarea
            value={formData.message}
            onChange={onHandleChange}
            name="message"
            rows={5}
            className="border w-full mt-4 border-gray-300 rounded-md pl-3 py-2.5"
            placeholder="Enter your message"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 px-4 py-2.5 text-white mt-4 rounded-md cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
