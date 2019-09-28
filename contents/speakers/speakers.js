const speakers = [
  "onoueyosuke",
  "taguchiwataru",
  "matsushitaeri",
  "kojimadaiki",
];

const speakersList = speakers.map(speaker => {
  return require(`json-loader!yaml-loader!./${speaker}.yml`);
});

export const contents = speakersList;
