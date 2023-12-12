"use client";

import Image from "next/image";
import { IconCornerUpLeft, IconBrandGithub } from "@tabler/icons-react";
import { useParams } from "next/navigation";
import { getProjectById } from "../../../utils/Project";
import { motion } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { IconLink } from "@tabler/icons-react";
import { IconExternalLink } from "@tabler/icons-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCommitsFromRepository, getRepository } from "@/services/github";

export default function Project() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [githubInfo, setGithubInfo] = useState(null);
  const [commitsInfo, setCommitsInfo] = useState(null);

  const id = params.id;
  useEffect(() => {
    const proj = getProjectById(id);
    setProject(proj);
  }, [project, id]);

  useEffect(() => {
    const getRepo = async () => {
      const repo = await getRepository(project.repo_name).then((res) => {
        return res;
      });
      setGithubInfo(repo);
    };
    if (project) {
      getRepo();
    }
  }, [project]);

  useEffect(() => {
    const getCommits = async () => {
      const commits = await getCommitsFromRepository(project.repo_name).then(
        (res) => {
          console.warn(res);

          return res;
        }
      );
      setCommitsInfo(commits);
    };
    if (project) {
      getCommits();
    }
  }, [project]);

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
        className="relative mx-auto w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1440px] rounded-md grid 3xl:grid-rows-[480px_minmax(600px,_1fr)]  overflow-hidden gap-y-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <Image
          alt=""
          src={project?.img ? project.img : "/pp.webp"}
          width={1800}
          height={600}
          quality={100}
          className=" aspect-[3/1] w-full object-cover"
          priority={true}
        ></Image>

        <div className=" grid grid-flow-col 3xl:grid-cols-[300px_1fr] grid-rows-1 gap-x-6">
          <div className="bg-slate-800 rounded-bl-md grid grid-cols-1 grid-rows-[minmax(150px,_1fr)_repeat(auto-fill,_minmax(100px,_1fr))] px-4 py-6 gap-6 ">
            {githubInfo ? (
              <div className="flex justify-center items-center w-full h-full bg-white text-black ">
                {githubInfo.name}
              </div>
            ) : (
              <div></div>
            )}
            {commitsInfo ? (
              Object.keys(commitsInfo).map((key, index) => {
                if (index > 11) return;
                console.log(commitsInfo[key]);
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center w-full h-full bg-primary-500 text-white rounded-md "
                  >
                    commit:{" "}
                    {/* {commitsInfo[key].commit.message
                        ? commitsInfo[key].commit.message
                        : "no message"} */}
                  </div>
                );
              })
            ) : (
              <div>error</div>
            )}
          </div>
          <div>b</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
