// export default function Loader() {
//   return (
//     <div className="flex h-screen items-center justify-center bg-background">
//       <div className="h-14 w-14 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020c02]">
      {/* Background Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 bg-green-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Battery Container */}
      <div className="relative w-12 h-24 border-2 border-[#163316] rounded-xl p-1 bg-[#0a0f0a] flex flex-col justify-end z-10 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
        {/* Battery Terminal (Top) */}
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-2 bg-[#163316] rounded-t-sm" />

        {/* Energy Juice (Animated Fill) */}
        <motion.div
          animate={{ height: ["10%", "100%", "10%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-full bg-gradient-to-t from-green-700 via-green-500 to-green-400 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.6)] relative overflow-hidden"
        >
          {/* Internal reflection/shine line */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-white/20 skew-x-12 translate-x-2" />
        </motion.div>
      </div>

      {/* Loading Typography */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8 text-green-500 text-xs font-bold uppercase tracking-[0.3em] z-10 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
      >
        System Charging
      </motion.div>
    </div>
  );
}