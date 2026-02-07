const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-8">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have a question or need support? We’d love to hear from you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">📍 Address:</span> New Delhi, India
            </p>
            <p>
              <span className="font-semibold">📧 Email:</span> support@shopease.com
            </p>
            <p>
              <span className="font-semibold">📞 Phone:</span> +91 98765 43210
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
