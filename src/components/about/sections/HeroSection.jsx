"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <article className="hero flex flex-col xl:flex-row justify-between xl:max-h-[570px] ">
      <section className="leftSide flex flex-col justify-start w-full xl:w-2/3 h-full p-8 md:p-4 xl:justify-start ">
        <h1 className="mx-auto w-full align-middle text-center h-24 font-normal text-[24px]  py-6 ">
          Conoce{" "}
          <span className="text-secondary font-semibold ">{"quien soy"}</span>
        </h1>
        <main className="body xl:max-w-[765px] mx-auto flex flex-col gap-y-3 text-[18px]  text-[rgba(255,255,255,0.82)] ">
          <p>
            Hola!, soy{" "}
            <span className="text-secondary">
              Francisco Jesus Jalomo Chavez{" "}
              <span className="text-[rgba(255,255,255,0.82)]">
                residente en
              </span>{" "}
              Tampico, Tamaulipas, México.
            </span>
          </p>
          <p>
            Hola! soy un{" "}
            <span className="text-secondary">
              estudiante de Ingenieria en Sistemas Computacionales y tengo 21
              años
            </span>{" "}
            y estoy en 9no semestre. Mi amor por la programación comenzó en 2015
            con videojuegos y desde entonces he sido{" "}
            <span className="text-secondary">autodidacta</span>. La pandemia del
            2020 me dio mucho tiempo libre para mejorar mis habilidades.
            <br />
            <span className="text-secondary-400">
              {" "}
              Emocionado de seguir aprendiendo y creciendo!.
            </span>
          </p>
        </main>
      </section>
      <section className="rightSide flex flex-col w-full xl:w-1/3 justify-center items-center xl:p-0 ">
        <h1 className="hidden xl:inline-block mx-auto w-full align-middle text-center h-24 font-normal  py-6 opacity-0  px-4">
          Conoce{" "}
          <span className="text-secondary font-semibold ">{"quien soy"}</span>
        </h1>
        <div className="imgContainer max-h-[320px] max-w-[400px] lg:max-h-[340px] lg:max-w-[415px] rounded-3xl overflow-hidden ">
          <motion.img
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={"/stock-photo.svg"}
            title="dev illustration"
            alt="dev illustration"
            className="object-cover object-center max-h-[320px] max-w-[400px] lg:max-h-[340px] lg:max-w-[415px]"
          />
        </div>
      </section>
    </article>
  );
}
