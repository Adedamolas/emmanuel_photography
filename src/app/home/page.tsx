import Feed from "../components/posts/Posts";
import Posts from "../components/posts/Posts";

export default function FirstPage() {
  return (
    <main className="flex flex-row px-20 gap-10 items-center justify-center">
      <>
        <Posts />
      </>
      <>
        <Feed />
      </>
    </main>
  );
}
