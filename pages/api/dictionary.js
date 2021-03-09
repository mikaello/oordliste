// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dictionary from "../../resources/orienteering_dictionary.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json(dictionary);
};
