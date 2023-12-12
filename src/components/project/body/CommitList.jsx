const CommitList = async ({ children, ...props }) => {
  return (
    <section
      className="bg-slate-800 rounded-bl-md grid grid-cols-1 grid-rows-[minmax(150px,_1fr)_repeat(auto-fill,_minmax(100px,_1fr))] px-4 py-6 gap-6  "
      style={{ ...props }}
    >
      {children}
    </section>
  );
};

export default CommitList;
