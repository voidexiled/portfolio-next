"use client";

import { useParams } from "next/navigation";

export default function Project() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h2>Project {params.id}</h2>
    </div>
  );
}
