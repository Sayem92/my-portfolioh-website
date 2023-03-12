import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Projects = () => {
  const { setProjectId } = useContext(AuthContext);

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl text-center text-green-500 font-bold capitalize lg:text-4xl ">
          My Projects
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-2">
          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: `url('https://i.ibb.co/F0Mr42X/sell-phones-bd-web-app-4.png')`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="my-4 text-2xl font-semibold text-white capitalize">
                Resale Phones Selling Page{" "}
              </h2>

              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Buy any available phones
              </p>
              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Pay amount easily
              </p>
              <p className="my-2 mb-3 text-lg  tracking-wider text-blue-200 uppercase ">
                ✔ Choose buyer or seller account
              </p>

              <Link to={"/details"}>
                <button
                  onClick={() => setProjectId("01")}
                  className="w-32 btn btn-success text-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: `url('https://i.ibb.co/5RW8dNS/candid-captures-web-app-8.png')`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="my-4 text-2xl font-semibold text-white capitalize">
                Photography Services Page
              </h2>

              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Show all services
              </p>
              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Post your review
              </p>
              <p className="my-2 mb-3 text-lg  tracking-wider text-blue-200 uppercase ">
                ✔ To know about services
              </p>

              <Link to={"/details"}>
                <button
                  onClick={() => setProjectId("02")}
                  className="w-32 btn btn-success text-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: `url('https://i.ibb.co/LSSchdW/the-smart-tutor-web-app-tutorials-4.png')`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="my-4 text-2xl font-semibold text-white capitalize">
                Learning Tutorials Page
              </h2>

              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Daily learn something
              </p>
              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Recap concepts
              </p>
              <p className="my-2 mb-3 text-lg  tracking-wider text-blue-200 uppercase ">
                ✔ Tutorials on different topics
              </p>

              <Link to={"/details"}>
                <button
                  onClick={() => setProjectId("03")}
                  className="w-32 btn btn-success text-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: `url('https://i.ibb.co/n3SWR5T/to-do-list-b3341-web-app-7.png')`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="my-4 text-2xl font-semibold text-white capitalize">
                Task Management Page
              </h2>

              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Easy to add task
              </p>
              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Updated task any time
              </p>
              <p className="my-2 mb-3 text-lg  tracking-wider text-blue-200 uppercase ">
                ✔ See task all information
              </p>

              <Link to={"/details"}>
                <button
                  onClick={() => setProjectId("04")}
                  className="w-32 btn btn-success text-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: `url('https://i.ibb.co/Nx1pQLq/freelancernation-web-app-2.png')`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="my-4 text-2xl font-semibold text-white capitalize">
                Digital Marketplace Page
              </h2>

              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Easy to add Gig
              </p>
              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Any Gig order easily
              </p>
              <p className="my-2 mb-3 text-lg  tracking-wider text-blue-200 uppercase ">
                ✔ See all Gig and Order information
              </p>

              <Link to={"/details"}>
                <button
                  onClick={() => setProjectId("05")}
                  className="w-32 btn btn-success text-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>

          <div
            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
            style={{
              backgroundImage: `url('https://i.ibb.co/FWVXB0r/billing-home.png')`,
            }}
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h2 className="my-4 text-2xl font-semibold text-white capitalize">
                Online Billing Page
              </h2>

              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ You can edit and delete your bill.
              </p>
              <p className="mt-2 text-lg tracking-wider text-blue-200 uppercase ">
                ✔ Easily search and find your bill.
              </p>
              <p className="my-2 mb-3 text-lg  tracking-wider text-blue-200 uppercase ">
                ✔ See all billing information
              </p>

              <Link to={"/details"}>
                <button
                  onClick={() => setProjectId("06")}
                  className="w-32 btn btn-success text-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Explore
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
