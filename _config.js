import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";
import picture from "lume/plugins/picture.ts";
import basePath from "lume/plugins/base_path.ts";
import jsx from "lume/plugins/jsx.ts";
import nav from "lume/plugins/nav.ts";
import favicon from "https://raw.githubusercontent.com/lumeland/experimental-plugins/main/favicon/mod.ts";
import lightningCss, { version } from "lume/plugins/lightningcss.ts";

// https://raw.githubusercontent.com/olena195/art/fe02aac8e3617d13ba7c49ff5e5df35651a1ecad
const site = lume({
  prettyUrls: false,
  location: Deno.env.get('BASE_URL') ? new URL(Deno.env.get('BASE_URL')) : undefined,
  rawLocation: Deno.env.get('RAW_FILE_BASE_URL') ? new URL(Deno.env.get('RAW_FILE_BASE_URL')) : undefined,
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
site.use(lightningCss({
  options: {
    targets: {
      chrome: version(98),
      ios_saf: version(15),
    }
  }
}));

// function to return an array of all images loaded
site.data("get_images", function () {
  return site.pages
    .filter((page) => page.data.url.match(/\.(jpg|jpeg|png|gif)$/i))
    .map((page) => page.data.url);
});

site.data('get_raw_content_url', function (path) {
  return (site.options.rawLocation || '') + (path.startsWith('/') ? path : `/${path}}`)
})

site.loadAssets(['.gif'])
export default site;
