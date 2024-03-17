import { useSearchParams } from 'next/navigation';

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();

  return (
  <>
  {params &&
    <video controls width="250">
      <source src={searchParams} type="application/x-mpegURL" />
      Seu navegador não suporta vídeos m3u8.
    </video>
    }
    </>
  );
};

export default VideoPlayer;
