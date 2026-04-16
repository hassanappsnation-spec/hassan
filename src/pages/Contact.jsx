import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      title: "Address",
      detail: "405544 Sugar Camp Road, Owatonna, Minnesota, 22545521",
      icon: <FaMapMarkerAlt />,
    },
    {
      title: "Phone",
      detail: "000-000-0000",
      icon: <FaPhone />,
    },
    {
      title: "Email",
      detail: "temporary@email.com",
      icon: <FaEnvelope />,
    },
  ];

  const socialIcons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaLinkedinIn />,
  ];

  return (
    <section className="min-h-screen mt-20 bg-gradient-to-br from-white to-gray-200 flex flex-col items-center px-6 md:px-20 py-12">
      
      {/* Header */}
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mt-3 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Container */}
      <div className="w-full flex flex-col md:flex-row gap-10 mt-10">
        
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/40 backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/60 text-teal-500 text-lg">
                {item.icon}
              </div>

              <div>
                <h3 className="text-teal-600 font-medium">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}

          {/* Social */}
          <h2 className="mt-8 font-medium border-l-4 border-teal-400 pl-3 text-gray-700">
            Connect with us
          </h2>

          <div className="flex gap-6 mt-4 text-xl text-gray-600">
            {socialIcons.map((icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-teal-500 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="md:w-1/2 p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 shadow-lg">
          <form className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Send Message
            </h2>

            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-3 py-2 rounded-lg bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-2 rounded-lg bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <textarea
                placeholder="Type your Message..."
                required
                className="w-full px-3 py-2 rounded-lg bg-white/60 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
              />
            </div>

            <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium hover:bg-teal-600 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}