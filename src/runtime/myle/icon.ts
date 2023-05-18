import * as fs from "fs";
import * as path from "path";

export interface IconOptions {
  /** @default icon */ src?: string;
  /** @default public */ public?: string;
}

export function iconBuilder(options: IconOptions = {}) {
  if (typeof window !== "undefined") return;

  let PUBLIC_DIR = options.public || "public";
  let SRC_DIR = options.src || "icons";

  PUBLIC_DIR = path.resolve(process.cwd(), PUBLIC_DIR);
  SRC_DIR = path.resolve(process.cwd(), SRC_DIR);

  if (!fs.existsSync(SRC_DIR) || !fs.existsSync(PUBLIC_DIR)) return;

  const DIR = path.resolve(process.cwd(), PUBLIC_DIR, `mi`);
  const DIR_ICON = path.resolve(DIR, "icons");

  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR);
  if (!fs.existsSync(DIR_ICON)) fs.mkdirSync(DIR_ICON);

  toconvert(SRC_DIR, PUBLIC_DIR);
  fs.watch(SRC_DIR, () => toconvert(SRC_DIR, PUBLIC_DIR));
}

function toconvert(SRC_DIR: string, PUBLIC_DIR: string) {
  const from = SRC_DIR;
  const dirs = fs.readdirSync(`${from}`);
  const to = path.resolve(process.cwd(), `${PUBLIC_DIR}/mi/icons`);
  const icons = [];

  for (const dir of dirs) {
    if (dir.endsWith(".svg")) {
      const name = dir.replace(/.svg$/, "");
      const icon = fs.readFileSync(`${from}/${dir}`, "utf-8");
      const svg = icon.match(/(<svg)(.*)(<\/svg>)/s)?.at(0);

      if (svg) {
        let _icon = svg;
        _icon = _icon.replace(/<svg([^>]*?)>/gm, `<symbol id="${name}">`);
        _icon = _icon.replace(/<\/svg>$/gm, "</symbol>");

        const viewBox = icon.match(/viewBox="([^"]*?)"/)?.at(0);
        if (viewBox) _icon = _icon.replace(/>/, ` ${viewBox}>`);
        icons.push(_icon);
        console.log("\x1b[33m%s\x1b[0m", `${name}.svg`, " is generate");
      }
    }
  }

  let symbol = `<svg xmlns="http://www.w3.org/2000/svg" display="none">`;
  symbol += icons.join("\n");
  symbol += `</svg>`;

  fs.writeFileSync(path.resolve(to, `micons.svg`), symbol);
}

export default iconBuilder;
