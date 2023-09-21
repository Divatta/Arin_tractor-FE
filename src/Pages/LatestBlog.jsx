import React, { useEffect, useState } from "react";
import { Card, message as antdMessage, Pagination } from "antd";
import '../scss/LatestBlog.scss'
import BlogApi from "../Components/API/BlogApi";
import CommonBanner from "../Components/CommonBanner";

const { Meta } = Card;

export default function LatestBlogs() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    async function fetchLatestBlogs() {
      try {
        const response = await BlogApi.getAll();
        setLatestBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching latest blogs:", error);
      }
    }
    fetchLatestBlogs();
  }, []);

  // Calculate the index range for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = latestBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <CommonBanner title="Blogs"/>
      <div id="latestBlog">
      <h3>LATEST FROM BLOG</h3>
        <div className="latestBlogsContainer">
            {currentBlogs.map((blog) => (
              <>
              <div
                key={blog._id}
              >

                <Card
                  cover={<img
                    alt="blog cover"
                    src={blog.image}
                    className="cardImage" />}
                  className="cardStyle"
                >
                  <Meta title={blog.title} description={blog.content} />
                </Card>

              </div></>
          ))}
        </div>
        <Pagination
          style={{textAlign: "center", marginTop: "20px"}}
          current={currentPage}
          total={latestBlogs.length}
          pageSize={blogsPerPage}
          onChange={handlePageChange}
        />
    </div>
    </>
  )
}
