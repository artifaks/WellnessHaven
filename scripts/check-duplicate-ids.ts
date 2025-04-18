import { herbs } from "../src/data/herbs";

const idSet = new Set<string>();
let hasDuplicates = false;
herbs.forEach(h => {
  if (idSet.has(h.id)) {
    console.log('Duplicate ID:', h.id, h.name);
    hasDuplicates = true;
  }
  idSet.add(h.id);
});
if (!hasDuplicates) {
  console.log('No duplicate IDs found.');
}
