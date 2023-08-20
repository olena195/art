export default function ({content, title}, {url}) {
  return `
  <!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="stylesheet" href="${url('/styles.css')}" >
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
${content}
</body>
</html>
  `
}
