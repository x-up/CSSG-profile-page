import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Profile() {
  const gridImages = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/301",
    "https://picsum.photos/201/300",
    "https://picsum.photos/199/300",
    "https://picsum.photos/200/299",
    "https://picsum.photos/199/299",
  ];

  const [following, setFollowing] = useState(false);

  const handleFollowToggle = () => {
    setFollowing(!following);
  };

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/profile.css" />
      </Head>

      {}
      <Link legacyBehavior href="/home">
        <a className="home-button">⬅ Home</a>
      </Link>

      <div className="profile-container">
        <div className="profile-header">
          <img src="https://picsum.photos/80/80" alt="Profile Picture" />
          <div className="profile-info">
            <h2>carson_king</h2>
            <p>this isnt instagram</p>
            <button onClick={handleFollowToggle}>
              {following ? "Unfollow" : "Follow"}
            </button>
          </div>
        </div>
        <div className="profile-stats">
          <div>
            <strong>6</strong><br />Posts
          </div>
          <div>
            <strong>200</strong><br />Followers
          </div>
          <div>
            <strong>200</strong><br />Following
          </div>
        </div>
        <div className="profile-grid">
          {gridImages.map((src, index) => (
            <img key={index} src={src} alt="Post" />
          ))}
        </div>
      </div>
    </>
  );
}