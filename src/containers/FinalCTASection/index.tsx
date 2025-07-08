import { motion } from 'framer-motion';

const FinalCTASection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-tr from-[#0A0A0F] to-[#141419] text-white py-20 px-6 md:px-12 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-[#2563EE] drop-shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Ready to Transform Your Soroban Development?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white/80 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          Join Ryvit today and experience the power of intelligent tools
          designed to make building decentralized applications easier, faster,
          and safer.
        </motion.p>
        <motion.button
          className="px-12 py-6 rounded-full bg-gradient-to-r from-[#2563EE] to-blue-700 text-white font-bold text-2xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:scale-105 border border-blue-500"
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }}
        >
          Start Building with Ryvit
        </motion.button>
      </div>
    </section>
  );
};

export default FinalCTASection;
