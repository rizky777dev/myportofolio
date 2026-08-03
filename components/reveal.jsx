"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";

/**
 * Pengganti generik untuk class .reveal-fade-up / .reveal-slide-left /
 * .reveal-fade-in lama. Hanya menganimasikan transform + opacity, dan
 * "once: true" supaya animasi tidak berulang tiap kali elemen masuk-keluar
 * viewport (hemat kerja JS di scroll panjang). forwardRef supaya parent
 * bisa memasang ref-nya sendiri (mis. untuk useInView) tanpa wrapper ganda.
 */
const Reveal = forwardRef(function Reveal(
  { children, as: Tag = "div", direction = "up", delay = 0, className = "", ...rest },
  ref
) {
  const variants = {
    up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -28 }, animate: { opacity: 1, x: 0 } },
    in: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
  };
  const v = variants[direction] ?? variants.up;
  const MotionTag = motion[Tag] ?? motion.div;

  // CATATAN DURASI: dipakai di ~30 tempat sebagai reveal-saat-scroll. Sengaja
  // TIDAK ditekan ke bawah 100ms seperti transisi UI-feedback lain (hover,
  // toggle, dsb) -- animasi ini fungsinya menunjukkan elemen "muncul secara
  // bertahap" saat masuk viewport. Di bawah ~300ms, gerakannya nggak sempat
  // kebaca mata sebagai fade+slide, cuma keliatan seperti pop instan (efek
  // "patah" yang justru ingin dihindari). Spring 100/20 di sini settle
  // sekitar ~500ms, tapi tetap 100% GPU-only (transform+opacity) jadi jalan
  // full 60-120fps tanpa drop frame -- durasi lebih panjang bukan berarti lag.
  return (
    <MotionTag
      ref={ref}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay }}
      className={`gpu-layer ${className}`}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export default Reveal;
