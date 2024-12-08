import { useState } from "react";
import BlogsList from "./BlogsList";

function HomeBlog() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1, },
    { title: 'The Power of Python', body: 'lorem ipsum...', author: 'Mario', id: 2, },
    { title: 'Future for Devs', body: 'lorem ipsum...', author: 'Mario', id: 3, },
  ])

  const handleToDeleteBlog = (id: number) => {
    const newTempBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newTempBlogs)
  }

  return (
    <>
      <div className="mt-10">
        <BlogsList blogs={blogs} handleToDeleteBlog={handleToDeleteBlog} />
      </div>
    </>
  )
}

export default HomeBlog;

