import axios from "axios"
import Link from "next/link"
import Head from "next/head"
import { withRouter, PublicRouterInstance } from "next/router"

type Type = React.FC<{ router: PublicRouterInstance; posts: any }> & { getInitialProps: any }
const Home: Type = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Next on Netlify</title>
      </Head>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/post?id=${post.id}`} as={`/posts/${post.id}`} passHref>
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

Home.getInitialProps = async (props) => {
  if (props.res) {
    console.log("setHeader")
    props.res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate")
  }

  console.log(props.asPath, props.query)

  const { data } = await axios.get("https://netlify-json-api.netlify.com/posts")

  return { posts: data }
}
export default withRouter(Home)
