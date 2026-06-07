"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "./variants";

export default function About() {
  return (
    <section
      id="about"
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
          className="text-[10px] text-theme-faint font-bold tracking-[0.3em] uppercase mb-10 text-center transition-colors duration-500"
        >
          About Me
        </motion.h3>

        {/* Typographic Layout */}
        <div className="relative w-full">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-theme-glow-a blur-[40px] rounded-full pointer-events-none -z-10"></div>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-[17px] text-theme-body font-medium leading-[1.8] tracking-wide relative z-10 px-2 text-center sm:text-left transition-colors duration-500"
          >
            Berawal dari{" "}
            <span className="text-theme-secondary transition-colors duration-500">Teknik Kendaraan Ringan</span>, kini
            bertransformasi ke{" "}
            <span
              className="text-theme-heading font-semibold transition-colors duration-500"
              style={{ filter: "drop-shadow(0 0 8px var(--theme-accent-glow))" }}
            >
              Teknik Informatika
            </span>
            .
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[11px] text-theme-subtle tracking-[0.3em] uppercase font-bold my-8 text-center transition-colors duration-500"
          >
            From Automotive to Code
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-[17px] text-theme-body font-medium leading-[1.8] tracking-wide relative z-10 px-2 text-center sm:text-left transition-colors duration-500"
          >
            Menyalurkan insting rekayasa dari dunia mekanik menuju seni{" "}
            <span className="text-theme-heading italic transition-colors duration-500">
              pengembangan teknologi digital
            </span>
            .
          </motion.p>

          {/* Education Timeline */}
          <div className="mt-12 flex flex-col gap-6 w-full px-2">
            {/* High School */}
            <motion.div
              variants={itemVariants}
              className="relative pl-8 before:absolute before:left-[5px] before:top-4 before:w-[1px] before:h-[calc(100%+1.5rem)] before:bg-gradient-to-b before:from-theme-timeline-line before:to-transparent group"
            >
              <span className="absolute left-0 top-1.5 w-3 h-3 rounded-full border border-theme-border bg-theme-timeline-dot-bg flex items-center justify-center group-hover:border-theme-subtle transition-colors duration-500">
                <span className="w-1 h-1 rounded-full bg-theme-faint group-hover:bg-theme-muted transition-colors duration-500"></span>
              </span>
              <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-theme-card border border-theme-border backdrop-blur-sm group-hover:bg-theme-card-hover group-hover:border-theme-border-hover transition-all duration-500">
                <span className="text-[10px] text-theme-subtle font-mono tracking-widest uppercase transition-colors duration-500">
                  2019 — 2022
                </span>
                <h4 className="text-[14px] text-theme-secondary font-medium group-hover:text-theme-primary transition-colors duration-500">
                  SMK Negeri Kartoharjo
                </h4>
                <p className="text-[12px] text-theme-subtle transition-colors duration-500">
                  Teknik Kendaraan Ringan
                </p>
              </div>
            </motion.div>

            {/* University */}
            <motion.div
              variants={itemVariants}
              className="relative pl-8 group mt-2"
            >
              <span
                className="absolute left-0 top-1.5 w-3 h-3 rounded-full border border-theme-muted bg-theme-timeline-dot-bg flex items-center justify-center group-hover:border-theme-secondary transition-colors duration-500"
                style={{ boxShadow: "0 0 8px var(--theme-accent-glow)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-theme-secondary group-hover:bg-theme-primary transition-colors duration-500"></span>
              </span>
              <div className="flex flex-col gap-1.5 p-4 rounded-2xl bg-theme-card border border-theme-border-hover backdrop-blur-sm group-hover:bg-theme-card-hover transition-all duration-500">
                <span
                  className="text-[10px] text-theme-muted font-mono tracking-widest uppercase transition-colors duration-500"
                  style={{ filter: "drop-shadow(0 0 4px var(--theme-accent-glow))" }}
                >
                  2023 — Present
                </span>
                <h4
                  className="text-[14px] text-theme-heading font-semibold transition-all duration-500"
                  style={{ filter: "drop-shadow(0 0 8px var(--theme-accent-glow))" }}
                >
                  Universitas PGRI Madiun
                </h4>
                <p className="text-[12px] text-theme-muted transition-colors duration-500">Teknik Informatika</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
