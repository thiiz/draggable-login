'use client'
import { useSearchParams } from 'next/navigation';

const VideoPlayer = () => {
  const [searchParams] = useSearchParams();
  const videoSrc = searchParams.get('video'); // Supondo que 'video' é a chave para a URL do vídeo

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
