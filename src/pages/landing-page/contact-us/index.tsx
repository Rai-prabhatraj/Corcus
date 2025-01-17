import { SectionsHeader } from "@/components/common";

interface Props extends React.ComponentProps<"div"> {}

export const ContactUs = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <SectionsHeader
        heading="Contact Us"
        description1="Connect with Us: Let's Discuss Your"
        description2="Digital Marketing Needs"
      />
      <div className="relative bg-white min-h-60 rounded-3xl my-4 shadow-md border border-black overflow-hidden">
        <div className="flex flex-col lg:flex-row p-8 gap-8">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">LET’S DISCUSS</h2>
            <h3 className="text-2xl font-bold text-gray-800 mt-2">YOUR NEXT PROJECT</h3>
            <p className="text-gray-600 mt-4">
              Ready to turn your vision into reality? Whether you need branding,
              web design, packaging, or digital marketing, we’re here to help.
              Let’s brainstorm, create, and bring your ideas to life.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
              BOOK AN APPOINTMENT
            </button>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-gray-700 font-medium">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="contact-number" className="block text-gray-700 font-medium">
                  Contact Number:
                </label>
                <input
                  type="tel"
                  id="contact-number"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-black text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Social Media Icons */}
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.225 0H1.771C.791 0 0 .781 0 1.75v20.498c0 .969.791 1.752 1.771 1.752h20.451C23.208 24 24 23.218 24 22.248V1.75C24 .781 23.208 0 22.225 0zm-13.74 20.452H5.812V9.37h2.672v11.081zm-1.338-12.7c-.867 0-1.569-.707-1.569-1.572s.702-1.569 1.569-1.569 1.573.704 1.573 1.569c0 .865-.706 1.572-1.573 1.572zm13.098 12.7h-2.669v-5.955c0-1.41-.024-3.223-1.966-3.223-1.967 0-2.268 1.537-2.268 3.122v6.056h-2.669V9.37h2.561v1.518h.035c.358-.677 1.233-1.39 2.541-1.39 2.719 0 3.224 1.791 3.224 4.117v6.838z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.348 3.608 1.323.975.975 1.26 2.243 1.322 3.608.059 1.266.07 1.645.07 4.848 0 3.205-.012 3.585-.07 4.851-.062 1.366-.347 2.633-1.322 3.608-.975.975-2.242 1.261-3.608 1.323-1.266.059-1.646.07-4.85.07-3.205 0-3.585-.012-4.851-.07-1.366-.062-2.633-.348-3.608-1.323-.975-.975-1.261-2.242-1.323-3.608-.059-1.266-.07-1.646-.07-4.851 0-3.204.012-3.583.07-4.849.062-1.366.348-2.633 1.323-3.608C4.515 2.51 5.782 2.224 7.148 2.163c1.266-.059 1.646-.07 4.852-.07zM12 0C8.74 0 8.332.012 7.052.07 5.77.129 4.532.448 3.5 1.48c-1.032 1.032-1.35 2.27-1.41 3.552C2.012 6.3 2 6.708 2 10.03v3.938c0 3.322.012 3.731.07 5.01.059 1.282.378 2.52 1.41 3.553 1.032 1.032 2.27 1.35 3.552 1.409 1.281.058 1.689.07 5.01.07s3.729-.012 5.01-.07c1.282-.059 2.52-.377 3.553-1.409 1.032-1.033 1.35-2.271 1.409-3.553.058-1.279.07-1.688.07-5.01V10.03c0-3.322-.012-3.73-.07-5.01-.059-1.282-.378-2.52-1.409-3.553C19.958.448 18.72.13 17.438.07 16.158.012 15.75 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.325 6.162 6.162 0 0 0 0-12.325zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0-2.882 1.44 1.44 0 0 0 0 2.882z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.56v14.88A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.44V4.56A4.56 4.56 0 0 1 4.56 0h14.88A4.56 4.56 0 0 1 24 4.56zM8.07 20.22h2.44V9.69H8.07zm6.29-5.85c.94-.19 1.6-.59 2-1.18.39-.59.57-1.36.57-2.29v-.4c-.01-.93-.19-1.7-.57-2.29-.39-.59-1.06-.99-2-1.18V9.2h2.45v1.23h-2.45v-.4c.91.19 1.54.59 1.91 1.18.37.59.56 1.36.56 2.29v.4c.01.93-.18 1.7-.56 2.29-.37.59-1.01.99-1.91 1.18z" />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
