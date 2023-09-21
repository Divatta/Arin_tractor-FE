import React, { useEffect, useState } from "react";
import { Card, Carousel, Button, message as antdMessage, Pagination } from "antd";
import '../scss/LatestBlog.scss'
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import BlogApi from "./API/BlogApi";
import CommonBanner from "./CommonBanner";

const { Meta } = Card;
// const baseUrl = import.meta.env.VITE_BASE_URL;

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

  const deleteBlog = async(id) => {
    try {
      if(window.confirm(`Are you sure to delete blog?`)){
        await axios.delete(`https://arintractor.onrender.com/api/v1/delete/${id}`, {
          headers: {
            'Content-Type' : 'application/json'
          }
        })
        antdMessage.success("Blog deleted successfully");
  
      }
      window.location.reload();
    } catch (error) {
      console.error("Error deleting blog:", error);
      antdMessage.error("Error deleting blog");
    }
  }

  return (
    <>
    <CommonBanner title="Blogs"/>
      <div id="latestBlog">
      <h3>LATEST FROM BLOG</h3>
        <div className="latestBlogsContainer">
        {/* <Carousel dots={true}> */}
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
                  <Button className="delBtn" onClick={() =>deleteBlog(blog._id)}> <i className="bi bi-trash"></i></Button>
                </Card>

              </div></>
          ))}
          {/* </Carousel> */}
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
