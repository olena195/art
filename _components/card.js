export const css = `
.card {
  color: blue;
}
`

export default function ({content}) {
  return `<article class="card">${content}</article>`
}
