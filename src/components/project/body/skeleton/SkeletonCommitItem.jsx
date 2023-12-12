const SkeletonCommitItem = ({ commit, color }) => {
  return (
    <div className="group grid grid-flow-row grid-rows-[20px,_1fr,_20px] w-full min-h-[100px] bg-background-800/10 border border-white/50 text-white rounded-md text-sm p-2 shadow-[0px_0px_12px_1px_rgba(0,0,0,0.12)] cursor-pointer transition-all hover:bg-background-800/25 hover:scale-[1.05] hover:shadow-[0px_0px_6px_2px_rgba(0,0,0,0.20)] hover:border-white/70 ">
      <div className="flex justify-between ">
        <div className="w-16 h-4 loading-skeleton rounded-full"></div>
        <div className="w-16 h-4 loading-skeleton rounded-full"></div>
      </div>
      <div className="">
        <div className="w-26 h-4 loading-skeleton rounded-full"></div>
      </div>
      <div>
        <div className="w-16 h-4 loading-skeleton rounded-full "></div>
      </div>
    </div>
  );
};

export default SkeletonCommitItem;
