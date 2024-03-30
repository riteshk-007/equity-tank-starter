import React from "react";

const Map = () => {
  return (
    <div className="w-full p-4  bg-gray-100 dark:bg-gray-950 shadow-lg my-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-300 text-center">
        Our Location
      </h2>

      <div className="overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.783799793653!2d77.05616367528806!3d28.606262075679115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05de8d29cab9%3A0x2d77bb4a1742f15c!2sEquity%20Tank%20-%20Stock%20Market%20Institute!5e0!3m2!1sen!2sin!4v1711120525998!5m2!1sen!2sin"
          width="100%"
          height={480}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Map;
