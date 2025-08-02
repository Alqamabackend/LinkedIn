

import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 👈 ye import karo
import api from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await api.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      {posts.map((post) => (
        <div key={post._id} className="bg-white p-4 shadow rounded">
          <p className="mb-2">{post.content}</p>
          <p className="text-sm text-gray-500">
            By{" "}
            <Link
              to={`/profile/${post.author._id}`} // 👈 yahan author ID lagao
              className="text-blue-600 hover:underline font-medium"
            >
              {post.author.name}
            </Link>{" "}
            at {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
