"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";
import { Rocket, Gamepad2, Ticket, Database, BrainCircuit, Activity } from "lucide-react";

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

        {/* Scrollable Container - max 2 cards visible */}
        <div className="w-full max-h-[calc(100svh-280px)] overflow-y-auto scroll-smooth snap-y snap-mandatory [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {/* Project 1 - Space Vanguard */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Kanzacky/spaceshooter"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500 mb-4 snap-start"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500/15 rounded-full blur-xl" />
                  <div className="relative z-10 p-1">
                    <Rocket className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
                <h4 className="text-theme-secondary font-medium tracking-wide text-sm group-hover:text-amber-400 transition-colors">
                  Space Vanguard
                </h4>
              </div>
              <a
                href="https://spacevanguard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 border border-amber-500/25 text-amber-400 text-[10px] font-medium tracking-wide hover:bg-amber-500/25 hover:border-amber-500/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            </div>

            <p className="text-[13px] text-theme-muted leading-relaxed mb-5 transition-colors duration-500">
              Game arcade space shooter mobile-first. Kendalikan pesawat dengan sentuhan jari, tembakan otomatis, 3 tipe musuh, sistem level, ledakan partikel, dan efek suara WebAudio.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="w-3 h-3 dark:invert" />
                Next.js
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" alt="Tailwind CSS" className="w-3 h-3" />
                Tailwind
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-theme-card border border-theme-border text-theme-secondary text-[10px] font-medium tracking-wide transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                  <line x1="7" y1="2" x2="7" y2="22" />
                  <line x1="17" y1="2" x2="17" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="2" y1="7" x2="7" y2="7" />
                  <line x1="2" y1="17" x2="7" y2="17" />
                  <line x1="17" y1="17" x2="22" y2="17" />
                  <line x1="17" y1="7" x2="22" y2="7" />
                </svg>
                HTML5 Canvas
              </span>
            </div>
          </motion.a>

          {/* Project 2 - Fuzzy Item Picker Dota 2 */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Kanzacky/Fuzzy-Item-Picker-Dota2"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500 mb-4 snap-start"
          >
            <div className="flex items-center justify-between mb-3">
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
              <a
                href="https://fuzzy-item-picker-dota2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/25 text-purple-400 text-[10px] font-medium tracking-wide hover:bg-purple-500/25 hover:border-purple-500/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            </div>

            <p className="text-[13px] text-theme-muted leading-relaxed mb-5 transition-colors duration-500">
              Sistem rekomendasi item Dota 2 berbasis Fuzzy Logic. Mendukung 40+ hero, scoring engine dengan 10 parameter kebutuhan, dan rekomendasi build path secara real-time.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="w-3 h-3 dark:invert" />
                Next.js
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" alt="Tailwind CSS" className="w-3 h-3" />
                Tailwind
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-medium tracking-wide">
                <Gamepad2 className="w-3 h-3" />
                Fuzzy Logic
              </span>
            </div>
          </motion.a>

          {/* Project 3 - E-Ticket Sarangan */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Kanzacky/E-Ticket-Sarangan"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500 mb-4 snap-start"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500/15 rounded-full blur-xl" />
                  <div className="relative z-10 p-1">
                    <Ticket className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <h4 className="text-theme-secondary font-medium tracking-wide text-sm group-hover:text-emerald-400 transition-colors">
                  e-Ticket Sarangan
                </h4>
              </div>
              <a
                href="https://e-ticket-sarangan.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[10px] font-medium tracking-wide hover:bg-emerald-500/25 hover:border-emerald-500/40 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            </div>

            <p className="text-[13px] text-theme-muted leading-relaxed mb-5 transition-colors duration-500">
              Sistem tiketing digital & manajemen pengunjung Telaga Sarangan. Monorepo Vue 3 SPA + Laravel 12 REST API dengan autentikasi Sanctum, pembayaran Xendit, dan QR check-in.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/vuedotjs/4FC08D" alt="Vue.js" className="w-3 h-3" />
                Vue 3
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" className="w-3 h-3" />
                Laravel
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/supabase/3FCF8E" alt="Supabase" className="w-3 h-3" />
                Supabase
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/xendit/6C43F0" alt="Xendit" className="w-3 h-3" />
                Xendit
              </span>
            </div>
          </motion.a>

          {/* Project 4 - Campus Connect */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Kanzacky/Campus-Connect"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500 mb-4 snap-start"
          >
            <div className="flex items-center justify-between mb-3">
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
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/laravel/FF2D20" alt="Laravel" className="w-3 h-3" />
                Laravel
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="w-3 h-3 dark:invert" />
                Next.js
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-3 h-3" />
                TypeScript
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/tailwindcss/38B2AC" alt="Tailwind CSS" className="w-3 h-3" />
                Tailwind
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-theme-card border border-theme-border text-theme-secondary text-[10px] font-medium tracking-wide transition-colors duration-500">
                <Database className="w-3 h-3 text-theme-muted" />
                Headless
              </span>
            </div>
          </motion.a>

          {/* Project 5 - ML Prediksi Penyakit Jantung */}
          <motion.a
            variants={itemVariants}
            href="https://github.com/Kanzacky/ML-Prediksi-Penyakit-Jantung"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full block p-5 rounded-3xl bg-theme-card border border-theme-border backdrop-blur-md hover:bg-theme-card-hover hover:border-theme-border-hover transition-all duration-500 mb-4 snap-start"
          >
            <div className="flex items-center justify-between mb-3">
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
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/python/FFD43B" alt="Python" className="w-3 h-3" />
                Python
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/fastapi/009688" alt="FastAPI" className="w-3 h-3" />
                FastAPI
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-3 h-3" />
                React
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-medium tracking-wide">
                <img src="https://cdn.simpleicons.org/scikitlearn/F7931E" alt="Scikit-learn" className="w-3 h-3" />
                Scikit-learn
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-theme-card border border-theme-border text-theme-secondary text-[10px] font-medium tracking-wide transition-colors duration-500">
                <BrainCircuit className="w-3 h-3 text-emerald-400" />
                Machine Learning
              </span>
            </div>
          </motion.a>
        </div>

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
