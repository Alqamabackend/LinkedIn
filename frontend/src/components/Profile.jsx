

import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/users/${id}`);
        setProfile(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await api.get(`/posts/user/${id}`);
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
    fetchPosts();
  }, [id]);

  if (!profile) return <p className="text-center p-6 text-gray-400">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex flex-col items-center">
      {/* Profile Card */}
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2 text-gray-100">{profile.name}</h1>
        <p className="text-gray-400 mb-1">{profile.email}</p>
        <p className="text-gray-300">{profile.bio || "No bio available."}</p>
      </div>

      {/* Posts */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-100">Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-400">No posts yet.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-800 p-5 rounded-xl shadow hover:shadow-md transition-shadow"
              >
                <p className="text-gray-100">{post.content}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Posted on {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

