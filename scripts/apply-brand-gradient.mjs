import fs from "fs";
import path from "path";

const reps = [
  ["bg-linear-to-br from-[#00255a] to-[#00255a]", "bg-brand-gradient-br"],
  ["bg-linear-to-br from-[#00255a] via-[#00255a] to-[#00255a]", "bg-brand-gradient-br"],
  ["relative overflow-hidden bg-[#00255a] py-", "relative overflow-hidden bg-brand-gradient py-"],
  ["relative overflow-hidden rounded-4xl bg-[#00b2fc]", "relative overflow-hidden rounded-4xl bg-brand-gradient-br"],
  ["relative overflow-hidden rounded-3xl bg-navy-900", "relative overflow-hidden rounded-3xl bg-brand-gradient-br"],
  ['<div className="absolute inset-0 bg-[#00255a]/60" />', '<div className="absolute inset-0 bg-linear-to-r from-[#022436]/85 to-[#00255a]/65" />'],
  ['<div className="absolute inset-0 bg-[#00255a]/78" />', '<div className="absolute inset-0 bg-linear-to-br from-[#022436]/90 to-[#00255a]/75" />'],
  ['className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left bg-[#00255a]"', 'className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left bg-brand-gradient"'],
  ['className="border-b border-gray-100 bg-[#00255a] px-4 py-4 flex justify-between"', 'className="border-b border-gray-100 bg-brand-gradient px-4 py-4 flex justify-between"'],
];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "scripts"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.tsx?$/.test(entry.name)) {
      let content = fs.readFileSync(full, "utf8");
      let next = content;
      for (const [from, to] of reps) next = next.split(from).join(to);
      if (next !== content) {
        fs.writeFileSync(full, next);
        console.log("updated:", full);
      }
    }
  }
}

walk(".");
