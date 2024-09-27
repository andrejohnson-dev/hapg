import { motion } from "framer-motion";

export const AnimatedCheckmark = () => (
    <svg width="7304" height="7304" viewBox="0 0 7304 7304" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M7017.35 2298.39C7035.98 2672.46 7035.98 3117.46 7035.98 3651.99C7035.98 5247.2 7035.98 6044.83 6540.42 6540.42C6044.83 7035.98 5247.2 7035.98 3651.99 7035.98C2056.76 7035.98 1259.15 7035.98 763.573 6540.42C268 6044.83 268 5247.2 268 3651.99C268 2056.76 268 1259.15 763.573 763.573C1259.15 268 2056.76 268 3651.99 268C4033.81 268 4369.97 268 4667.19 274.796"
            stroke="#262626"
            strokeWidth="534.314"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
        />
        <motion.path
            d="M2227.16 3473.89C2227.16 3473.89 2761.47 3473.89 3473.89 4720.62C3473.89 4720.62 5275.88 1455.36 7035.99 802.314"
            stroke="#ED0602"
            strokeWidth="534.314"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ type: "spring", duration: 2.5, bounce: 0.3 }}
        />
    </svg>
);
