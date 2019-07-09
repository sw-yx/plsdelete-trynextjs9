import React from "react"

type Props = {
  foo: string
}
export default function App({ foo }: Props) {
  return (
    <div>
      <h1>hello world </h1>
      <div>
        this comes from serverless functions: <pre>{foo}</pre>
      </div>
    </div>
  )
}

App.getInitialProps = () => {
  return { foo: "David wells is the fkin GOAT" }
}
