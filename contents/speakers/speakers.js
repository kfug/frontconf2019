const speakers = [
  "onoueyosuke",
  "taguchiwataru",
  "matsushitaeri",
  "kojimadaiki",
  "jimboyoshihide",
  "suzukitakayuki",
  "hamadamasanari",
  "okitakanori",
  "maedakeisuke",
  "sakakibaramasahiko",
  "hiranomasashi"
];

const speakersList = speakers.map(speaker => {
  return require(`json-loader!yaml-loader!./${speaker}.yml`);
});

export const contents = speakersList;
