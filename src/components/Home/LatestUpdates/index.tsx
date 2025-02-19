import { List, Typography, Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { latestUpdates } from '../../../data/latestUpdatesData';

const { Text, Title } = Typography;

const LatestUpdates = () => {
  const navigate = useNavigate();

  const handleMangaClick = (title: string) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/manga/${formattedTitle}`);
  };

  return (
    <List
      className="bg-tertiary rounded-lg shadow px-2"
      header={<Title level={4} className="px-4">Latest Updates</Title>}
      dataSource={latestUpdates}
      renderItem={(item) => (
        <List.Item 
          className="px-4 cursor-pointer hover:bg-primary transition-colors"
          onClick={() => handleMangaClick(item.mangaTitle)}
        >
          <div className="flex gap-4 w-full">
            <img
              src={item.mangaImage}
              alt={item.mangaTitle}
              className="w-16 h-20 object-cover rounded"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/300x400?text=Manga';
              }}
            />
            <div className="flex-1">
              <Title level={5} className="mb-2">{item.mangaTitle}</Title>
              <div className="space-y-1">
                {item.chapters.map((chapter) => (
                  <div key={chapter.number} className="flex justify-between items-center">
                    <Text>Chapter {chapter.number} - {chapter.title}</Text>
                    <Space>
                      <ClockCircleOutlined />
                      <Text type="secondary">{chapter.releaseDate}</Text>
                    </Space>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default LatestUpdates; 