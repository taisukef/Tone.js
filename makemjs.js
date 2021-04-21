const src = "build/Tone.js";
const dst = "docs/Tone.mjs";

const s = await Deno.readTextFile(src);
const s2 = "const exports = {};\n" + s + "\nconst Tone = exports.Tone;\nexport { Tone };\n";
await Deno.writeTextFile(dst, s2);
