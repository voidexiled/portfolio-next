import useSelectedCommit from "@/hooks/commits";

const Commit = ({ commit, color, key }) => {
  const { updateSelectedCommit } = useSelectedCommit();
  const { html_url, sha } = commit;
  const { message } = commit.commit;
  const { name, date } = commit.commit.author;

  return (
    <div
      className="group grid grid-flow-row grid-rows-[20px,_1fr,_20px] w-full min-h-[100px] bg-background-800/10 border border-white/50 text-white rounded-md text-sm p-2 shadow-[0px_0px_12px_1px_rgba(0,0,0,0.12)] cursor-pointer transition-all hover:scale-[1.05] hover:shadow-[0px_0px_6px_2px_rgba(0,0,0,0.20)] hover:border-white/70 hover:bg-[linear-gradient(328deg,_rgba(121,121,121,0.38)_0%,_rgba(121,121,121,0.05)_32%,_rgba(81,_81,_81,_0.0)_100%)]  "
      onClick={() => {
        updateSelectedCommit(commit);
      }}
    >
      <header className="flex justify-between tracking-widest">
        <a
          href={html_url}
          target="_blank"
          className=" font-semibold hover:text-secondary-600 transition-colors"
          style={{
            color: color,
          }}
        >
          #{sha.slice(0, 7)}
        </a>
        <a
          href={`https://github.com/${name}`}
          className=" font-semibold hover:text-secondary-600 transition-colors"
          style={{
            color: color,
          }}
        >
          @{name}
        </a>
      </header>
      <main className="max-h-full relative overflow-auto">
        <p className="text-white/80 ">{message}</p>
      </main>
      <footer className="tracking-widest">
        <span className="text-white/70 ">
          {new Date(date).toLocaleString("es-MX")}
        </span>
      </footer>
    </div>
  );
};

export default Commit;
