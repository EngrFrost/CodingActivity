import { Carousel, Card, Typography, Rate } from "antd";
import { mangaList } from "../../../data/mangaData";
import { useState } from "react";
import VideoModal from "./VideoModal";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface VideoState {
  isOpen: boolean;
  url: string;
  title: string;
}

const PopularMangaCarousel = () => {
  const [videoState, setVideoState] = useState<VideoState>({
    isOpen: false,
    url: "",
    title: "",
  });

  const handleCardClick = (manga: typeof mangaList[0]) => {
    setVideoState({
      isOpen: true,
      url: manga.trailerUrl,
      title: manga.title,
    });
  };

  const handleCloseModal = () => {
    setVideoState({
      isOpen: false,
      url: "",
      title: "",
    });
  };

  return (
    <div className="relative">
      <Carousel
        arrows
        slidesToShow={4}
        slidesToScroll={4}
        className="px-8 bg-tertiary rounded-lg"
      >
        {mangaList.map((manga) => (
          <div key={manga.id} className="px-2 py-4">
            <Card
              hoverable
              className="bg-tertiary border-none transition-transform hover:scale-105 cursor-pointer relative group"
              onClick={() => handleCardClick(manga)}
              cover={
                <div className="relative">
                  <img
                    alt={manga.title}
                    src={manga.imageUrl}
                    className="h-64 object-cover rounded-t-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "https://static.zerochan.net/Wano.Kuni.1024.3520522.webp";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <PlayCircleOutlined className="text-4xl text-white" />
                  </div>
                </div>
              }
            >
              <Title level={5} className="mb-2 line-clamp-1 text-primary">
                {manga.title}
              </Title>
              <div className="flex items-center gap-2">
                <Rate
                  disabled
                  defaultValue={manga.rating}
                  allowHalf
                  className="text-xs"
                />
                <Text className="text-sm text-primary">{manga.rating}</Text>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>

      <VideoModal
        isOpen={videoState.isOpen}
        onClose={handleCloseModal}
        videoUrl={videoState.url}
        title={videoState.title}
      />
    </div>
  );
};

export default PopularMangaCarousel;
