const speakers = [
  "tanakataro1",
  "tanakataro2"
];

const speakersList = speakers.map(speaker => {
  return require(`json-loader!yaml-loader!~/contents/speakers/${speaker}.yml`);
});

export const contents = speakersList;
