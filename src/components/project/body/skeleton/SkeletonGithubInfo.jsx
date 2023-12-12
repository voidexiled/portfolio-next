import React from "react";

const SkeletonGithubInfo = () => {
  return (
    <div className="grid p-2 grid-rows-[45px_1fr_25px] w-full h-full bg-background-800/10 border border-white/60 text-white text-[16px] rounded-md">
      <div className="w-24 h-4 loading-skeleton rounded-full"></div>

      <div className="w-16 h-4 loading-skeleton rounded-full"></div>

      <div className="w-16 h-4 loading-skeleton rounded-full"></div>
    </div>
  );
};

export default SkeletonGithubInfo;
