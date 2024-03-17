'use client'

const VideoPlayer = ({ searchParams }) => {
  const videoSrc = searchParams?.video

  return (
    <>
      {videoSrc &&
        <video controls width="250">
          <source src={videoSrc} type="application/x-mpegURL" />
          Seu navegador não suporta vídeos m3u8.
        </video>
      }
    </>
  );
};

export default VideoPlayer;
