import { useEffect, useState } from "react";

const GithubInfo = ({ repoInfo, commitsInfo, project }) => {
  const { full_name, stargazers_url, svn_url, homepage, stargazers_count } =
    repoInfo;
  const commits_url = `${svn_url}/commits/master`;
  const { color } = project;
  const [commitsCount, setCommitsCount] = useState(0);
  const [user, name] = full_name.split("/");

  useEffect(() => {
    const commitsInfoArray = Object.values(commitsInfo);
    setCommitsCount(commitsInfoArray.length);
  }, [commitsInfo]);

  return (
    <div
      className="grid p-2 grid-rows-[45px_1fr_25px] w-full h-full bg-background-800/10 border border-white/60 text-white text-[16px] rounded-md"
      style={{ borderColor: color }}
    >
      <a
        className="tracking-widest group hover:underline underline-offset-2"
        style={{ textDecorationColor: color }}
        href={svn_url}
        target="_blank"
      >
        <span className="font-bold" style={{ color: color }}>
          @{user}
        </span>
        /<span className="group-hover:text-[#d1d1d1]">{name}</span>
      </a>
      <p>
        <a
          className="text-base hover:underline underline-offset-2"
          style={{ textDecorationColor: color }}
          href={homepage}
        >
          Visit homepage
        </a>
      </p>
      <p className="font-light text-white/80 text-sm">
        <a href={commits_url} className="hover:underline underline-offset-2">
          {commitsCount}
          {" commits"}
        </a>
        <a href={stargazers_url} className="hover:underline underline-offset-2">
          {", "} {stargazers_count}
          {" stars."}
        </a>
      </p>
    </div>
  );
};

export default GithubInfo;
