"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CooperationProcess = () => {
  return (
    <section className=" py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#9253FF]  mb-4">
          <span className="text-gray-700">Cooperation</span> Process
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Our streamlined collaboration steps ensure smooth engagement and maximum efficiency.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://res.cloudinary.com/dt2juqy9s/image/upload/v1752301621/cp1_lmophv.png"
            alt="Cooperation Process Flow"
            width={1200}
            height={600}
            className="w-[90%] max-w-5xl mx-auto rounded-xl shadow-lg border border-gray-200 object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CooperationProcess;
