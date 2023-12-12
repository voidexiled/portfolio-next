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
import {
  getCommitsFromRepository,
  getDeploymentsFromRepository,
  getRepository,
} from "@/services/github";
import useSelectedCommit from "@/hooks/commits";
import ProjectImage from "@/components/project/header/ProjectImage";
import CommitList from "@/components/project/body/CommitList";
import Commit from "@/components/project/body/Commit";
import SkeletonCommitList from "@/components/project/body/skeleton/SkeletonCommitList";
import GithubInfo from "@/components/project/body/GithubInfo";
export default function Project() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [repoInfo, setGithubInfo] = useState(null);
  const [commitsInfo, setCommitsInfo] = useState(null);

  const { selectedCommit, updateSelectedCommit, clearSelectedCommit } =
    useSelectedCommit();

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

  return (
    <AnimatePresence>
      <div
        className="relative mx-auto w-full md:w-[700px] xl:w-[800px] 2xl:w-[1200px] 3xl:w-[1440px] rounded-md grid 3xl:grid-rows-[480px_minmax(600px,_1fr)]  overflow-hidden gap-y-6"
        // initial={{ opacity: 0, scale: 0 }}
        // animate={{ opacity: 1, scale: 1 }}
        // exit={{ opacity: 0, scale: 0 }}
      >
        <ProjectImage src={project?.img} alt="" />

        <div className=" grid grid-flow-col 3xl:grid-cols-[300px_1fr] grid-rows-1 gap-x-6 ">
          <Suspense fallback={<SkeletonCommitList></SkeletonCommitList>}>
            <CommitList>
              {repoInfo && (
                <GithubInfo
                  repoInfo={repoInfo}
                  commitsInfo={commitsInfo}
                  project={project}
                />
              )}
              {commitsInfo &&
                Object.values(commitsInfo).map((commit, index) => (
                  <Commit key={index} commit={commit} color={project.color} />
                ))}
            </CommitList>
          </Suspense>
          <section>
            {selectedCommit ? (
              <div>{selectedCommit.sha}</div>
            ) : (
              <div>error</div>
            )}
          </section>
        </div>
      </div>
    </AnimatePresence>
  );
}
