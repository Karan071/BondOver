import styles from './InstaFastTrack.module.css';
import videoData from './videoData.js';
import logo from '../../assets/Icon/InstaIcon.png';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const InstaFastTrack = () => {
  const [playingId, setPlayingId] = useState(null);
  const videoRefs = useRef({});

  const handleVideoClick = (videoId) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    // Pause any other playing video
    Object.entries(videoRefs.current).forEach(([id, vid]) => {
      if (id !== String(videoId) && vid && !vid.paused) {
        vid.pause();
      }
    });

    if (video.paused) {
      video.muted = false;
      video.play();
      setPlayingId(videoId);
    } else {
      video.pause();
      setPlayingId(null);
    }
  };

  // When a video ends, clear playingId
  const handleEnded = (videoId) => {
    setPlayingId(prev => (prev === videoId ? null : prev));
  };

  return (
    <section className={styles.section} id='insta'>
      <div className={styles.top}>
        <div>
          <h2 className={styles.h2}>BOS Insta Fast Track</h2>
          <p className={styles.subtitle}>Quick Glimpses. Real Stories. Pure Passion.</p>
        </div>
        <div className={styles.description}>
          <p>
            Catch bite-sized moments of joy, grit, and heritage from kabaddi dives to victory dances.
            Fast fun and full of heart watch and share the spirit of BOS anytime anywhere.
          </p>
          <Link to="https://www.instagram.com/hswf.network/#" target="_blank">
            <button className={styles.followBtn}>
              <img src={logo} alt="Instagram" /> Follow Us
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.videoScroller}>
        {videoData.map((video) => (
          <div
            key={video.id}
            className={`${styles.videoCard} ${playingId === video.id ? styles.playing : ''}`}
          >
            <video
              ref={el => videoRefs.current[video.id] = el}
              muted
              playsInline
              src={video.url}
              className={styles.video}
              width="180"
              height="320"
              onClick={() => handleVideoClick(video.id)}
              onEnded={() => handleEnded(video.id)}
            />
            {(!videoRefs.current[video.id] || videoRefs.current[video.id].paused) && (
              <div
                className={styles.playOverlay}
                onClick={() => handleVideoClick(video.id)}
              >
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <circle cx="12" cy="12" r="12" fill="rgba(0,0,0,0.5)" />
                  <path d="M9 7v10l8-5z" fill="#fff" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstaFastTrack;
