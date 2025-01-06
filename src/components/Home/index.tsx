import { Divider, Title } from "../common";
import LatestUpdates from "./LatestUpdates";
import PopularMangaCarousel from "./PopularMangaCarousel";

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
