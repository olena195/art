export default defineAppConfig({
  content: {
    types: [
      {slug: 'arts', title: 'Малюнки'},
      {slug: 'comics', title: 'Комікси'},
      {slug: 'fanfis', title: 'Фанфіки'},
    ],

    taxonomies: [
      {slug: 'fandom', title: 'Фандоми'},
      {slug: 'pairing', title: 'Пейрінги'},
      {slug: 'tags', title: 'Теги'},
    ]
  }
})
