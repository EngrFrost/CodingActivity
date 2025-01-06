import { MangaCard as MangaCardType } from "../../../types/manga";
import { Card, Paragraph, Rate, Tag, Text, Title } from "../../common";

interface MangaCardProps {
  manga: MangaCardType;
}

const MangaCard = ({ manga }: MangaCardProps) => {
  return (
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
      className="h-full"
    >
      <Title level={4} className="mb-2">
        {manga.title}
      </Title>
      <div className="mb-2">
        {manga.genre.map((g) => (
          <Tag key={g} className="mb-1 mr-1">
            {g}
          </Tag>
        ))}
      </div>
      <Paragraph className="h-12 overflow-hidden text-ellipsis">
        {manga.description}
      </Paragraph>
      <div className="flex items-center justify-between mt-4">
        <div>
          <Rate
            disabled
            defaultValue={manga.rating}
            allowHalf
            className="text-sm"
          />
          <Text className="block">{manga.rating}/5</Text>
        </div>
        <Text className="text-right">Chapters: {manga.chapters}</Text>
      </div>
    </Card>
  );
};

export default MangaCard;
