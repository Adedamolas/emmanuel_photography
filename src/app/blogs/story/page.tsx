
interface Props {
  id: number;
  title: string;
  body: string;
}

export default async function Story() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const blogs: Props[] = await res.json()
  return (
    <>
      <article>
        {blogs.map((props) => (
          <div>
            <h2>
            {props.title}
            </h2>
            <p>
              {props.body}
            </p>
          </div>
        ))}
      </article>
    </>
  )
}
