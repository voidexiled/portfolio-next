"use client";

import Image from "next/image";
import { IconCornerUpLeft, IconBrandGithub } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { getProjectById } from "../../../utils/Project";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { IconLink } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Project() {
  const params = useParams();
  const [project, setProject] = useState(null);

  const id = params.id;
  useEffect(() => {
    const proj = getProjectById(id);
    setProject(proj);
  }, [project, id]);

  const onClickNotify = (msg) => {
    toast(msg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      id: "clipboard",
    });
  };
  return (
    <AnimatePresence>
      <motion.div
        className="w-3/4 md:max-w-[1500px] h-fit bg-slate-800 bg-opacity-90 rounded-lg  box-content group justify-center mx-auto my-20 pb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="flex flex-col items-center justify-center ">
          {project && (
            <div className="relative rounded transition-all w-12/12 lg:w-12/12  md:max-w-[1500px]  overflow-hidden ">
              <Image
                width={600}
                height={400}
                quality={65}
                src={project.img}
                alt={project.title + " preview image"}
                className="object-cover object-center"
              />
              <div className="left-2 top-2 lg:left-4 lg:top-4 absolute z-10 w-8 lg:w-10">
                <span className="">
                  <Link href="/projects">
                    <IconCornerUpLeft
                      width={40}
                      height={40}
                      className="transition-all rounded-md hover:bg-primary-300 hover:text-slate-800 hover:bg-opacity-50 hover:shadow-md p-1 lg:p-2  xl:h-[48px] xl:w-[48px]  "
                    />
                  </Link>
                </span>
              </div>
              <div className="right-2 top-2 lg:right-4 lg:top-4 absolute z-10 w-8 lg:w-10 flex flex-col gap-y-3">
                <span>
                  <a href={project.repoURL} target="_blank">
                    <IconBrandGithub
                      height={40}
                      width={40}
                      className="transition-all rounded-md hover:bg-primary-300 hover:text-slate-800 hover:shadow-xl p-1 lg:p-2 h-[32px] w-[32px] lg:h-[40px] lg:w-[40px] xl:h-[48px] xl:w-[48px] "
                    />
                  </a>
                </span>
                <span>
                  <a href={project.deployedUrl} target="_blank">
                    <IconExternalLink
                      height={40}
                      width={40}
                      className="transition-all rounded-md hover:bg-primary-300 hover:text-slate-800 hover:shadow-xl p-1 lg:p-2 h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]  xl:h-[48px] xl:w-[48px] "
                    />
                  </a>
                </span>
                <span
                  className="cursor-pointer "
                  onClick={() => {
                    navigator.clipboard.writeText(project.deployedUrl);
                    onClickNotify("✔ Copied to clipboard!");
                  }}
                >
                  <IconLink
                    height={40}
                    width={40}
                    className="transition-all rounded-md hover:bg-primary-300 hover:text-slate-800 hover:shadow-xl p-1 lg:p-2 h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]  xl:h-[48px] xl:w-[48px] "
                  />
                </span>
              </div>
            </div>
          )}

          <div className="relative flex w-full h-12 lg:h-24 justify-center items-center text-2xl xl:text-4xl 2xl:text-5xl">
            <span className="font-medium text-center text-light">
              {project && project.title}
            </span>
          </div>

          <p className="w-11/12 lg:w-10/12 pb-4 text-left text-light text-base leading-normal opacity-70  xl:text-xl 2xl:text-2xl">
            {project && project.body}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
