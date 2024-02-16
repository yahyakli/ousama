import BlogList from "./BlogList";
import useFetche from "./useFetche";

const Home = () => {
  const {data: blogs, IsPending, error} = useFetche('http://localhost:8000/blogs');

  return ( 
    <div className="Home">
      { error && <div>{error}</div>}
      { IsPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
    </div>
  );
}

export default Home;