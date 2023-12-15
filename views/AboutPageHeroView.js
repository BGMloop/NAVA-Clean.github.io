import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="sm:text-2xl lg:text-8xl text-center text-bold">
      <div>
        <section className="text-gray-700 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="text-6xl font-medium title-font mb-4 text-gray-900">
                About Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-2xl">
              NAVA Cleaning is a professional cleaning and organizing service provider, serving the Dallas, Texas, and surrounding areas. We are dedicated to bringing cleanliness and order back into your homes, one cleaning at a time. We value your support and appreciate the opportunity to serve you. If you have any questions or feedback, please feel free to provide your name and email.
Are you planning to move? Our move-in cleaning services are designed to help you get your deposit back by thoroughly sanitizing and disinfecting your new home. We want to ensure a comfortable and clean environment for you before you settle in. 
In addition to residential cleaning, we also offer commercial cleaning services for businesses. Whether you are currently 
operating or getting ready for a grand opening, we can customize our services to meet your specific needs. We provide flexible options, including one-time cleanings, daily, weekly, bi-weekly, or monthly service. The best part is, there is no contract required. 
Choose NAVA Cleaning for all your cleaning and organizing needs. We are committed to delivering exceptional service and making your space spotless.

              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
