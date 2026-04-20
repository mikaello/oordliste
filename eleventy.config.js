const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const translations = {
  no: {
    langCode: "no",
    langName: "Norsk",
    title: "Orienteringsordliste",
    subtitle: "Slå opp ditt neste orienteringsuttrykk!",
    contributeText:
      "Om du har lyst til å bidra med bedre beskrivelser eller nye ord kan du redigere",
    contributeLinkText: "denne oversikten på GitHub",
    apiText:
      "Dersom du ønsker å utvikle en tjeneste basert på denne ordlisten kan du bruke det bakenforliggende",
    apiLinkText: "API-et",
    lightMode: "Bytt til lyst tema",
    darkMode: "Bytt til mørkt tema",
    languageLabel: "Språk",
  },
  en: {
    langCode: "en",
    langName: "English",
    title: "Orienteering Glossary",
    subtitle: "Look up your next orienteering term!",
    contributeText:
      "Want to contribute better descriptions or new words? Edit",
    contributeLinkText: "this list on GitHub",
    apiText:
      "If you want to build a service based on this word list, you can use the underlying",
    apiLinkText: "API",
    lightMode: "Switch to light mode",
    darkMode: "Switch to dark mode",
    languageLabel: "Language",
  },
  sv: {
    langCode: "sv",
    langName: "Svenska",
    title: "Orienteringsordlista",
    subtitle: "Slå upp ditt nästa orienteringsuttryck!",
    contributeText:
      "Vill du bidra med bättre beskrivningar eller nya ord? Redigera",
    contributeLinkText: "den här listan på GitHub",
    apiText:
      "Om du vill bygga en tjänst baserad på den här ordlistan kan du använda det underliggande",
    apiLinkText: "API:et",
    lightMode: "Byt till ljust tema",
    darkMode: "Byt till mörkt tema",
    languageLabel: "Språk",
  },
  da: {
    langCode: "da",
    langName: "Dansk",
    title: "Orienteringsordbog",
    subtitle: "Slå dit næste orienteringsudtryk op!",
    contributeText:
      "Vil du bidrage med bedre beskrivelser eller nye ord? Rediger",
    contributeLinkText: "denne liste på GitHub",
    apiText:
      "Hvis du ønsker at udvikle en tjeneste baseret på denne ordliste, kan du bruge det underliggende",
    apiLinkText: "API",
    lightMode: "Skift til lyst tema",
    darkMode: "Skift til mørkt tema",
    languageLabel: "Sprog",
  },
  fi: {
    langCode: "fi",
    langName: "Suomi",
    title: "Suunnistussanasto",
    subtitle: "Etsi seuraava suunnistustermisi!",
    contributeText:
      "Haluatko osallistua paremmilla kuvauksilla tai uusilla sanoilla? Muokkaa",
    contributeLinkText: "tätä listaa GitHubissa",
    apiText:
      "Jos haluat rakentaa palvelun tämän sanastolistan pohjalta, voit käyttää taustalla olevaa",
    apiLinkText: "API:a",
    lightMode: "Vaihda vaaleaan teemaan",
    darkMode: "Vaihda tummaan teemaan",
    languageLabel: "Kieli",
  },
};

const dictionaries = {
  no: require("./resources/orienteering_dictionary.json"),
  en: require("./resources/orienteering_dictionary_en.json"),
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });

  eleventyConfig.addFilter("slugify", slugify);

  eleventyConfig.addGlobalData("translations", translations);
  eleventyConfig.addGlobalData("dictionaries", dictionaries);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
