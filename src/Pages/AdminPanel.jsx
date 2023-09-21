import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Table, Button, message as antdMessage, Pagination } from "antd";
import axios from "axios";
import '../scss/AdminPanel.scss'
import BlogApi from "../Components/API/BlogApi";

function AdminPanel() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const blogsPerPage = 9;

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

  const deleteBlog = async (id) => {
    try {
      if (window.confirm(`Are you sure to delete blog?`)) {
        await axios.delete(`https://arintractor.onrender.com/api/v1/delete/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        antdMessage.success("Blog deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
      antdMessage.error("Error deleting blog");
    }
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img src={image} alt="Blog Cover" className="imageBlog" />
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button onClick={() => deleteBlog(record._id)}><i className="bi bi-trash" style={{color: "red"}}></i></Button>
      ),
    },
  ];

  return (
    <div className="adminPanel">
      <NavLink to={"/blogs"}>
        <Button type="primary">Add Blog</Button>
      </NavLink>

      <Table
        dataSource={latestBlogs}
        columns={columns}
        rowKey="_id"
      />
    </div>
  );
}

export default AdminPanel;

