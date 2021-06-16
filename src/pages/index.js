import * as React from "react"
import tokens from "../../build/jsnested/styles.json"
console.log(tokens)
const IndexPage = () => (
  <div style={{ fontFamily: "Arial" }}>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
      rel="stylesheet"
    />
    <h1>Styles</h1>
    <hr />

    <h2>Colors</h2>
    {tokens &&
      Object.keys(tokens.colors).map(key => (
        <Color key={key} name={key} color={tokens.colors[key]} />
      ))}
    <hr />
    <h2>Typography</h2>
    {tokens &&
      Object.keys(tokens.typo).map(key => (
        <Typo key={key} name={key} typo={tokens.typo[key]} />
      ))}
  </div>
)

const Color = ({ name, color }) => {
  const style = {
    backgroundColor: color,
    width: 50,
    height: 50,
    fontSize: 10,
    borderRadius: 10
  }

  return (
    <div style={{ marginBottom: 20, width: 50 }}>
      <div style={style}></div>
      <div style={{ textAlign: "center", fontSize: 14, marginTop: 5 }}>
        {name}
      </div>
    </div>
  )
}

const Typo = ({ name, typo }) => {
  console.log(typo)
  const style = {
    fontSize: typo.fontSize,
    fontWeight: typo.fontWeight,
    letterSpacing: typo.letterSpacing,
    lineHeight: isNaN(typo.lineHeight)
      ? typo.lineHeight
      : typo.lineHeight / typo.fontSize,
    textTransform: typo.textCase,
    fontFamily: typo.fontFamily,
    marginBottom: typo.paragraphSpacing
  }
  console.log(style)
  return <div style={style}>{name}</div>
}

export default IndexPage
