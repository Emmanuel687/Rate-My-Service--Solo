import Footer from "../navigation/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className>
        <div className="dark:bg-gray-900">
          <section className="mx-auto container w-full py-36">
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
                <h2>
                  {" "}
                  We help brands to measure and monitor experience analytics
                </h2>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link to="/signup">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded">
                  Sign Up for Free{" "}
                </button>
                
                </Link>
                
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default LandingPage;
