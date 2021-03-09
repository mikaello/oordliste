// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dictionary from "../../resources/orienteering_dictionary.json";

export default (req, res) => {
  res.statusCode = 200;
  dictionary.sort((el, ell) => el.name.localeCompare(ell.name));
  res.json(dictionary);
};
