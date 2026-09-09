"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";
import { Database, BrainCircuit, Activity, Gamepad2 } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 w-full max-w-md mx-auto relative z-10 flex flex-col items-center justify-center min-h-[100svh] py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="flex flex-col items-center w-full"
      >
        {/* Subtle Title */}
        <motion.h3
          variants={itemVariants}
          className="text-[10px] text-theme-faint font-bold tracking-[0.3em] uppercase mb-8 text-center transition-colors duration-500"
        >
          Selected Works
        </motion.h3>

        {/* Project 1 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/Campus-Connect.git"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500 mb-4"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/15 rounded-full blur-xl" />
                <div className="relative z-10 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-400"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
                  </svg>
                </div>
              </div>
              <h4 className="text-theme-secondary font-medium tracking-wide text-sm group-hover:text-blue-400 transition-colors">
                Campus Connect
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-theme-muted leading-relaxed mb-5 transition-colors duration-500">
            Platform manajemen terpusat untuk organisasi & ukm kampus (UNIPMA) dengan sistem role-based access control. Dibangun menggunakan arsitektur headless dengan Laravel REST API dan frontend Next.js.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {/* Laravel Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" className="w-3 h-3" />
              Laravel
            </span>
            {/* Next.js Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="w-3 h-3 dark:invert" />
              Next.js
            </span>
            {/* TypeScript Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
              TypeScript
            </span>
            {/* Tailwind CSS Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" alt="Tailwind CSS" className="w-3 h-3" />
              Tailwind
            </span>
            {/* Fullstack Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-theme-card border border-theme-border text-theme-secondary text-[10px] font-medium tracking-wide transition-colors duration-500">
              <Database className="w-3 h-3 text-theme-muted" />
              Headless
            </span>
          </div>
        </motion.a>

        {/* Project 2 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/ML-Prediksi-Penyakit-Jantung"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-rose-500/15 rounded-full blur-xl" />
                <div className="relative z-10 p-1">
                  <Activity className="w-4 h-4 text-rose-400" />
                </div>
              </div>
              <h4 className="text-theme-secondary font-medium tracking-wide text-sm group-hover:text-rose-400 transition-colors">
                Prediksi Penyakit Jantung
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-theme-muted leading-relaxed mb-5 transition-colors duration-500">
            Aplikasi fullstack Machine Learning untuk memprediksi risiko penyakit jantung. Model klasifikasi dikembangkan dengan Scikit-Learn dan disajikan melalui REST API FastAPI dengan frontend React & Vite.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {/* Python Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/python/FFD43B" alt="Python" className="w-3 h-3" />
              Python
            </span>
            {/* FastAPI Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/fastapi/009688" alt="FastAPI" className="w-3 h-3" />
              FastAPI
            </span>
            {/* React Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-3 h-3" />
              React
            </span>
            {/* Scikit-learn Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/scikitlearn/F7931E" alt="Scikit-learn" className="w-3 h-3" />
              Scikit-learn
            </span>
            {/* Data Science Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-theme-card border border-theme-border text-theme-secondary text-[10px] font-medium tracking-wide transition-colors duration-500">
              <BrainCircuit className="w-3 h-3 text-emerald-400" />
              Machine Learning
            </span>
          </div>
        </motion.a>

        {/* Project 3 */}
        <motion.a
          variants={itemVariants}
          href="https://github.com/Kanzacky/Fuzzy-Item-Picker-Dota2"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/15 rounded-full blur-xl" />
                <div className="relative z-10 p-1">
                  <Gamepad2 className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <h4 className="text-theme-secondary font-medium tracking-wide text-sm group-hover:text-purple-400 transition-colors">
                Fuzzy Item Picker Dota 2
              </h4>
            </div>
          </div>

          <p className="text-[13px] text-theme-muted leading-relaxed mb-5 transition-colors duration-500">
            Sistem rekomendasi item Dota 2 berbasis Fuzzy Logic. Web app yang memberikan dynamic item build recommendations menggunakan mesin scoring fuzzy across 10 parameter kebutuhan.
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {/* TypeScript Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
              TypeScript
            </span>
            {/* Next.js Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="w-3 h-3 dark:invert" />
              Next.js
            </span>
            {/* Tailwind CSS Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
              <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" alt="Tailwind CSS" className="w-3 h-3" />
              Tailwind
            </span>
            {/* Fuzzy Logic Badge */}
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-medium tracking-wide">
              <Gamepad2 className="w-3 h-3" />
              Fuzzy Logic
            </span>
          </div>

          {/* Live Demo Link */}
          <a
            href="https://zakiadinugroho.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/25 text-purple-400 text-[11px] font-medium tracking-wide hover:bg-purple-500/25 hover:border-purple-500/40 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        </motion.a>

        {/* See More Link */}
        <motion.div
          variants={itemVariants}
          className="mt-8 w-full flex justify-center"
        >
          <a
            href="https://github.com/Kanzacky"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[12px] font-medium text-theme-subtle hover:text-theme-secondary transition-colors"
          >
            See more on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
