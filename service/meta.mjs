const defaultMeta = {
  description:
    'Webで働く全ての人のために、FRONTEND CONFERENCE 2019 11月02日 大阪グランフロント',
  title: 'FRONTEND CONFERENCE 2019',
  host: 'https://2019.kfug.jp',
  image: '/ogp.jpg',
  tw_type: 'summary_large_image'
};

export default args => {
  const {title, description, host, image} = {...defaultMeta, ...args};
  return [
    {hid: 'DESC', name: 'description', content: description},
    {hid: 'OG:TITLE', property: 'og:title', content: title},
    {hid: 'OG:IMAGE', property: 'og:image', content: `${host}${image}`},
    {hid: 'OG:DESC', property: 'og:description', content: description},
    {hid: 'TW:CARD', name: 'twitter:card', content: 'summary_large_image'},
    {hid: 'TW:SITE', name: 'twitter:site', content: '@frontkansai'},
    {hid: 'TW:CREATOR', name: 'twitter:creator', content: '@frontkansai'},
    {hid: 'TW:TITLE', name: 'twitter:title', content: title},
    {hid: 'TW:DESC', name: 'twitter:description', content: description},
    {hid: 'TW:IMAGE', name: 'twitter:image', content: `${host}${image}`},
  ];
};
