const dictionary = require("../resources/orienteering_dictionary.json");

module.exports = (req, res) => {
  const sorted = [...dictionary].sort((a, b) => a.name.localeCompare(b.name));
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.json({ dictionary: sorted });
};
