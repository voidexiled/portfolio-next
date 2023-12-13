import { useState, useEffect } from "react";

const useSelectedCommit = () => {
  const [selectedCommit, setSelectedCommit] = useState(null);

  useEffect(() => {
    const storedSelectedCommit = localStorage.getItem("selectedCommit");
    if (storedSelectedCommit) {
      setSelectedCommit(JSON.parse(storedSelectedCommit));
    }
  }, []);

  const updateSelectedCommit = (newCommit) => {
    setSelectedCommit(newCommit);
    localStorage.setItem("selectedCommit", JSON.stringify(newCommit));
    console.log(localStorage.getItem("selectedCommit").toString());
  };

  const clearSelectedCommit = () => {
    setSelectedCommit(null);
    localStorage.removeItem("selectedCommit");
  };

  return { selectedCommit, updateSelectedCommit, clearSelectedCommit };
};

export default useSelectedCommit;
