import React, { useEffect, useState } from "react";
import { Card, Carousel, Button } from "antd";
import '../scss/LatestBlog.scss'
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { Meta } = Card;
// const baseUrl = import.meta.env.VITE_BASE_URL;

export default function LatestBlogs() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     async function fetchLatestBlogs() {
//       try {
//         const response = await axios.get(`${baseUrl}/blog/showBlogs`);
//         setLatestBlogs(response.data.blogs);
//       } catch (error) {
//         console.error("Error fetching latest blogs:", error);
//       }
//     }
//     fetchLatestBlogs();

//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

  const prevArrow = (
    <Button>
      <LeftCircleOutlined />
    </Button>
  );
  const nextArrow = (
    <Button>
      <RightCircleOutlined />
    </Button>
  );

  return (
    <div id="latestBlog">
      <h3>LATEST FROM BLOG</h3>
        <div className="latestBlogsContainer">
        <Carousel dots={true}>
            {/* {latestBlogs.map((blog) => ( */}
              <div 
            //   key={blog._id}
              >
                <Card
                  cover={
                    <img
                      alt="blog cover"
                      src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-250nw-1714666150.jpg"
                      className="cardImage"
                    />
                  }
                  className="cardStyle"
                >
                  <Meta title="Blog1" description="Blog content" />
                </Card>
              </div>
            {/* ))} */}
          </Carousel>
        </div>
    </div>
  )
}
