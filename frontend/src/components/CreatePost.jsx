import { useState, useContext } from "react";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

const CreatePost = ({ refresh }) => {
  const [content, setContent] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/posts", { content }, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setContent("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4 w-full max-w-2xl mx-auto">
      <textarea value={content} onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?" className="border p-2 w-full mb-2 rounded" required />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">Post</button>
    </form>
  );
};

export default CreatePost;



