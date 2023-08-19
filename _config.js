import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import picture from "lume/plugins/picture.ts";
import basePath from "lume/plugins/base_path.ts";
import jsx from "lume/plugins/jsx.ts";
import nav from "lume/plugins/nav.ts";
import favicon from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/favicon/mod.ts";

const site = lume({
  prettyUrls: false,
  location: Deno.env.get('BASE_URL') ? new URL(Deno.env.get('BASE_URL')) : undefined,
  watcher: {
    ignore: [
      '.vscode',
      '.idea',
    ]
  }
});

site.use(jsx());
site.use(picture());
site.use(imagick());
site.use(basePath());
site.use(nav());
site.use(favicon({
  input: '_favicon.png'
}));

// function to return an array of all images loaded
site.data("get_images", function () {
  return site.pages
    .filter((page) => page.data.url.match(/\.(jpg|jpeg|png|gif)$/i))
    .map((page) => page.data.url);
});


site.loadAssets(['.gif'])
export default site;
