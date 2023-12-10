const token =
  "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";

export const getRepository = async (repository) => {
  const response = await fetch(
    `https://api.github.com/repos/voidexiled/${repository}`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  ).then((res) => res.json());
  console.warn(response);
  return response;
};

export const getCommitsFromRepository = async (repository) => {
  const response = await fetch(
    `https://api.github.com/repos/voidexiled/${repository}/commits`,
    {
      headers: {
        Authorization: `token ${token}`,
      },
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
  console.warn("commits: ", response);
  return response;
};
