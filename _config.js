import lume from "lume/mod.ts";
import imagick from "lume/plugins/imagick.ts";

const site = lume({
  watcher: {
    ignore: [
      '.vscode',
      '.idea',
    ]
  }
});

site.use(imagick({
  extensions: [".jpg", ".jpeg", ".png", '.gif', '.webp', ".JPG", ".JPEG", ".PNG", '.GIF', '.WEBP']
}))

export default site;
