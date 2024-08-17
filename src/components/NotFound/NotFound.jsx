import React from "react";
import notFound404 from "../../assets/404-computer.svg";
import { NavLink } from "react-router-dom";

const NotFound = () => {

  return (
    <div className="scrollbar-hide w-full h-screen bg-background overflow-hidden">
      <section className="flex items-center justify-center w-full h-full scrollbar-hide">
        <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-xs text-center">
            <img
              className="mx-auto max-w-xs RV8RoaI_SlEMC5CEQ3ms _9OKVeTXzfSwD_NYO6_G"
              src={notFound404}
              alt="404 Not Found"
            />
            <h1 className="mb-4 dark:text-gray-100 text-2xl tracking-tight font-extrabold lg:text-2xl">
              404 Not Found
            </h1>
            <p className="mb-7 text-2xl dark:text-gray-500 tracking-tight font-semibold md:text-2xl">
              Something's missing.
            </p>
            <NavLink
              to={"/dashboard"}
              className="inline-flex bg-primary text-primary-foreground focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center my-4"
            >
              Back to HomePage
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
