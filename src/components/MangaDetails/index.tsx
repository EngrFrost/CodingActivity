import { useParams } from "react-router-dom";
import { Typography, Card, List, Divider } from "antd";
import { latestUpdates } from "../../data/latestUpdatesData";
import { mangaList } from "../../data/mangaData";
import CommentSection from "./CommentSection";
import { formatTitle } from "../../utils/utils";

const { Title, Text, Paragraph } = Typography;

type Chapter = {
  number: number;
  title: string;
  releaseDate: string;
};

const MangaDetails = () => {
  const { title } = useParams();

  const mangaUpdate = latestUpdates.find(
    (m) => formatTitle(m.mangaTitle) === title
  );

  const mangaInfo = mangaList.find((m) => formatTitle(m.title) === title);

  if (!mangaUpdate) {
    return <div className="p-8">Manga not found</div>;
  }

  const MangaListItem = ({ chapter }: { chapter: Chapter }) => {
    return (
      <List.Item className="px-4 py-2 hover:bg-primary rounded cursor-pointer">
        <div className="flex justify-between items-center w-full">
          <Text>
            Chapter {chapter.number} - {chapter.title}
          </Text>
        </div>
      </List.Item>
    );
  };

  return (
    <div className="p-8">
      <Card className="bg-tertiary">
        <div className="flex gap-8">
          <img
            src={mangaUpdate.mangaImage}
            alt={mangaUpdate.mangaTitle}
            className="w-64 h-96 object-cover rounded"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/300x400?text=Manga";
            }}
          />
          <div className="flex-1">
            <Title level={2}>{mangaUpdate.mangaTitle}</Title>
            <Paragraph className="text-lg mb-6">
              {mangaInfo?.description}
            </Paragraph>
            <Title level={4} className="mb-4">
              Latest Chapters
            </Title>
            <List
              dataSource={mangaUpdate.chapters}
              renderItem={(chapter) => <MangaListItem chapter={chapter} />}
            />
          </div>
        </div>

        <Divider className="my-8" />

        <Title level={4} className="mb-4">
          Comments
        </Title>
        <CommentSection />
      </Card>
    </div>
  );
};

export default MangaDetails;
