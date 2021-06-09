import * as React from "react"
import tokens from "../../tokens/design-tokens.json"
console.log(tokens)
const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    {tokens &&
      Object.keys(tokens.sizes).map(key => (
        <div key={key}>{tokens.sizes[key].value}</div>
      ))}
    {tokens &&
      Object.keys(tokens.typo).map(key => (
        <Typo key={key} name={key} typo={tokens.typo[key]} />
      ))}
  </div>
)

const Typo = ({ name, typo }) => {
  return <div style={{ fontSize: typo.fontSize.value }}>{name}</div>
}

export default IndexPage
