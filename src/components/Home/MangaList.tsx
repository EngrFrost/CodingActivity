import { Row, Col } from 'antd';
import { mangaList } from '../../data/mangaData';
import MangaCard from './MangaCard';

const MangaList = () => {
  return (
    <Row gutter={[16, 16]}>
      {mangaList.map((manga) => (
        <Col xs={24} sm={12} md={8} lg={6} key={manga.id}>
          <MangaCard manga={manga} />
        </Col>
      ))}
    </Row>
  );
};

export default MangaList; 