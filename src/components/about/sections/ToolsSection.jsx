import { Skill } from "../standalone/Skill";
import Image from "next/image";
export default function ToolsSection() {
  return (
    <section className="skills flex flex-col mt-12 xl:max-w-[1500px]">
      <h1 className="mx-auto w-full align-middle text-center h-30 md:h-36  text-[26px]  py-6 text-secondary font-semibold">
        Tools <span className="font-normal text-light">I use</span>
      </h1>
      <div className="flex flex-row flex-wrap w-full justify-center xl:px-10 gap-x-4 gap-y-4 md:gap-x-6 md:gap-y-6">
        <Skill id="vscode" delay={0.05 * 1.5 * 2}>
          <Image
            width={40}
            height={40}
            alt="VSCode logo"
            src="/vscode.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="postman" delay={0.05 * 1.5 * 3}>
          <Image
            width={40}
            height={40}
            alt="Postman logo"
            src="/postman.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="heroku" delay={0.05 * 1.5 * 4}>
          <Image
            width={40}
            height={40}
            alt="Heroku logo"
            src="/heroku.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
        <Skill id="vercel" delay={0.05 * 1.5 * 5}>
          <Image
            width={40}
            height={40}
            alt="Vercel logo"
            src="/vercel.svg"
            className="w-14 h-14 lg:w-20 lg:h-20"
          ></Image>
        </Skill>
      </div>
    </section>
  );
}
