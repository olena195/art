export default function ({content, title}) {
  return `
  <!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
</head>
<body>
${content}
</body>
</html>
  `
}
