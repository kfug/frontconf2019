const speakers = [
  "onoueyosuke",
  "taguchiwataru"
];

const speakersList = speakers.map(speaker => {
  return require(`json-loader!yaml-loader!./${speaker}.yml`);
});

export const contents = speakersList;
