import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" }; //we import package.json so when we use commonjs modules
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

export default [
  //first configuration object
  {
    input: "src/index.ts", //entry point for this part of our library (it exports all of our components so that the user can import the library)
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      }, //commonjs modules, which will use the main field of packageJson module
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      }, //for the es6 modules
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      external(),
      postcss(),
      url(),
      image(),
      copy({ targets: [{ src: "images/*", dest: "dist/*" }] }),
    ], //node resolve plugin, and the other plugins (typescript plugin needs the specific directory)
  },

  //second configuration object
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm", globals: { react: "React" } },
    ],
    plugins: [dts()],
    external: ["react", "react-dom", /\.css$/],
  },
];
