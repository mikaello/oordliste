import Ajv from "ajv";
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const resourcesDir = join(__dirname, "..", "resources");

const schema = JSON.parse(
  readFileSync(join(resourcesDir, "schema.json"), "utf8"),
);

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);

const dictFiles = readdirSync(resourcesDir).filter(
  (f) => f.endsWith(".json") && f !== "schema.json",
);

let hasErrors = false;

for (const file of dictFiles) {
  const filePath = join(resourcesDir, file);
  const data = JSON.parse(readFileSync(filePath, "utf8"));
  const valid = validate(data);
  if (!valid) {
    console.error(`\nValidation failed for ${file}:`);
    for (const err of validate.errors) {
      console.error(`  ${err.instancePath || "/"} ${err.message}`);
    }
    hasErrors = true;
  } else {
    console.log(`OK: ${file}`);
  }
}

if (hasErrors) {
  process.exit(1);
}
