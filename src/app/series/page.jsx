'use client'

const VideoPlayer = ({ searchParams }) => {
  const videoSrc = searchParams?.video

  return (
    <>
      {videoSrc &&
       <>
        <p>{videoSrc}</p>
        <video controls width="250">
          <source src={videoSrc} type="application/x-mpegURL" />
        </video>
      </>
      }
    </>
  );
};

export default VideoPlayer;
