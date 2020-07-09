import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

// import glob from "glob";
// should use glob.sync("src/**/*.test.ts*"

export default {
  input: "src/Card/Card.test.tsx",
  output: [
    {
      file: "build/index.test.js",
      name: "lib",
      format: "cjs",
      sourcemap: true,
    },
  ],
  external: ["react", "react-dom"],
  plugins: [resolve(), commonjs(), typescript({ useTsconfigDeclarationDir: true }), postcss()],
};
