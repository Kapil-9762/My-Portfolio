import { motion } from "framer-motion";

function Loader() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0d1117",
    }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{
          width: 60,
          height: 60,
          border: "6px solid #fff",
          borderTop: "6px solid transparent",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default Loader;
