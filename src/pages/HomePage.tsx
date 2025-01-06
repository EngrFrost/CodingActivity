import { Typography, Divider } from 'antd';
import PopularMangaCarousel from '../components/Home/PopularMangaCarousel';
import LatestUpdates from '../components/Home/LatestUpdates';

const { Title } = Typography;

const HomePage = () => {
  return (
    <div className="p-8">
      <section className="mb-8">
        <Title level={2} className="mb-4">Popular Manga</Title>
        <PopularMangaCarousel />
      </section>
      
      <Divider />
      
      <section>
        <LatestUpdates />
      </section>
    </div>
  );
};

export default HomePage; 