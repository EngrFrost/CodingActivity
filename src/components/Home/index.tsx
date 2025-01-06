import { Typography, Divider } from "antd";
import PopularMangaCarousel from "./PopularMangaCarousel";
import LatestUpdates from "./LatestUpdates";

const { Title } = Typography;

const Home = () => {
  return (
    <div className="p-8">
      <section className="mb-8">
        <Title level={2} className="mb-4">
          Popular Anime's
        </Title>

        <PopularMangaCarousel />
      </section>

      <Divider />

      <section>
        <Title level={2} className="mb-4">
          Popular Manga
        </Title>

        <LatestUpdates />
      </section>
    </div>
  );
};

export default Home;
