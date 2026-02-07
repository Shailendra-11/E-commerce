const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are passionate about delivering quality products and a
            seamless shopping experience to our customers.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-xl shadow">

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              ShopEase is a modern e-commerce platform focused on quality,
              affordability, and customer satisfaction. Our goal is to make
              online shopping simple, fast, and enjoyable.
            </p>
            <p className="text-gray-600">
              From everyday essentials to premium products, we carefully
              curate items that add value to your life.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="/about.png"
              alt="About us"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🚀 Our Mission
            </h3>
            <p className="text-gray-600">
              To provide high-quality products at fair prices while delivering
              excellent customer service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🌍 Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted and loved e-commerce brand across India and
              beyond.
            </p>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-lg mb-2">⭐ Quality Products</h4>
              <p className="text-gray-600 text-sm">
                Carefully selected items you can trust.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">🚚 Fast Delivery</h4>
              <p className="text-gray-600 text-sm">
                Quick and reliable shipping nationwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-2">💬 Support</h4>
              <p className="text-gray-600 text-sm">
                Friendly customer support whenever you need it.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
