export const getRepository = async (repository) => {
  const response = await fetch(
    `https://api.github.com/repos/voidexiled/${repository}`
  ).then((res) => res.json());
  console.warn(response);
  return response;
};

export const getCommitsFromRepository = async (repository) => {
  const response = await fetch(
    `https://api.github.com/repos/voidexiled/${repository}/commits`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  console.warn("commits: ", response);
  return response;
};
