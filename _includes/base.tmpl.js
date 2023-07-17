export default function ({content, title}) {
  return `
  <!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <link rel="stylesheet" href="/components.css" >
</head>
<body>
${content}
</body>
</html>
  `
}
