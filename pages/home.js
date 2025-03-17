import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

function Post({ postData }) {
  const [likes, setLikes] = useState(postData.likes);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (e) => {
    if (e.key === 'Enter' && commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={postData.headerImg} alt={postData.username} />
        <span>
          <strong>{postData.username}</strong> · {postData.time}
        </span>
      </div>
      <img className="post-img" src={postData.postImg} alt="Post Image" />
      <div className="post-actions">
        <span onClick={handleLike} style={{ cursor: 'pointer' }}>❤️</span>
        <span style={{ marginLeft: '10px' }}>💬</span>
        <span style={{ marginLeft: '10px' }}>📤</span>
      </div>
      <p className="post-likes">{likes} likes</p>
      <p className="post-caption">
        <strong>{postData.username}</strong> {postData.caption}
      </p>
      {comments.length > 0 && (
        <div className="post-comments">
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      )}
      <input
        className="add-comment"
        type="text"
        placeholder="Add a comment..."
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        onKeyDown={handleAddComment}
      />
    </div>
  );
}

export default function Home() {
  const stories = [
    { id: 1, img: "https://picsum.photos/60/60", title: "story 1" },
    { id: 2, img: "https://picsum.photos/60/61", title: "story 2" },
    { id: 3, img: "https://picsum.photos/61/60", title: "story 3" },
  ];

  const initialPosts = [
    {
      id: 1,
      headerImg: "https://picsum.photos/40/40",
      username: "user1",
      time: "1h",
      postImg: "https://picsum.photos/500/500",
      likes: 100,
      caption: "user1 caption 1"
    },
    {
      id: 2,
      headerImg: "https://picsum.photos/41/40",
      username: "user2",
      time: "1m",
      postImg: "https://picsum.photos/501/500",
      likes: 50,
      caption: "user2 caption 2"
    }
  ];

  return (
    <>
      <Head>
        <title>Instagram Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/home.css" />
      </Head>

      {}
      <Link legacyBehavior href="/profile">
        <a className="profile-button">
          <img src="https://picsum.photos/40/40" alt="Profile" />
        </a>
      </Link>

      <div className="container">
        <div className="stories">
          {stories.map(story => (
            <div key={story.id} className="story">
              <img src={story.img} alt={story.title} />
              <span>{story.title}</span>
            </div>
          ))}
        </div>

        {initialPosts.map(post => (
          <Post key={post.id} postData={post} />
        ))}
      </div>
    </>
  );
}