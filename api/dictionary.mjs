import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dictionary = JSON.parse(
  readFileSync(join(__dirname, "../resources/orienteering_dictionary.json"), "utf-8")
);

export default (req, res) => {
  const sorted = [...dictionary].sort((a, b) => a.name.localeCompare(b.name));
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.json({ dictionary: sorted });
};
