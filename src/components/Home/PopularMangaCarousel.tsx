import { Carousel, Card, Typography, Rate, Tag } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { mangaList } from "../../data/mangaData";
import { useState } from "react";

const { Title, Text } = Typography;

const PopularMangaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative">
      <Carousel
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        afterChange={setCurrentSlide}
        slidesToShow={4}
        slidesToScroll={4}
        className="px-8 bg-black"
      >
        {mangaList.map((manga) => (
          <div key={manga.id} className="px-2">
            <Card
              hoverable
              cover={
                <img
                  alt={manga.title}
                  src={manga.imageUrl}
                  className="h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/300x400?text=Manga";
                  }}
                />
              }
            >
              <Title level={5} className="mb-2 line-clamp-1">
                {manga.title}
              </Title>
              <div className="flex items-center gap-2">
                <Rate
                  disabled
                  defaultValue={manga.rating}
                  allowHalf
                  className="text-xs"
                />
                <Text className="text-sm">{manga.rating}</Text>
              </div>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMangaCarousel;
