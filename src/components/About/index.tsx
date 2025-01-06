import { Row, Col, Card, Title, Text } from "../common";

const About = () => {
  return (
    <div className="p-8">
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <Card className="overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Ian John Eugenio Samson"
              className="w-full h-auto rounded-lg"
            />
          </Card>
        </Col>
        <Col xs={24} md={16}>
          <Title level={2}>Ian John Eugenio Samson</Title>
          <Text className="block text-lg mb-6">
            Hey there! I'm a Full Stack Developer with 4 years of experience,
            and JavaScript is my playground. I've built everything from sleek
            websites to powerful web apps, always pushing to create something
            awesome.
          </Text>

          <Title level={3} className="mt-8 mb-4">
            Technical Skills
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={4}>Front-End</Title>
                <Text className="block">
                  ReactJS, Next.js, TypeScript, HTML5, CSS3, Javascript,
                  SCSS/SASS, Bootstrap, Material-UI, Ant Design, Radix, Tailwind
                  CSS, Redux, and GraphQL
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={4}>Back-End</Title>
                <Text className="block">
                  Node.js, Express.js, Nest.js, MongoDB, SQL, PostgreSQL, and
                  RESTful APIs
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={4}>Mobile Development</Title>
                <Text className="block">
                  React Native for iOS and Android development
                </Text>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full">
                <Title level={4}>Additional Skills</Title>
                <Text className="block">
                  Responsive design, MERN stack, API design, AWS, Azure,
                  WebSockets, and third-party API integration (Stripe, Twilio,
                  Google Maps, Socket.IO)
                </Text>
              </Card>
            </Col>
          </Row>

          <Title level={3} className="mt-8 mb-4">
            Professional Objective
          </Title>
          <Card>
            <Text className="block">
              Seeking a challenging role as a Full Stack Developer where I can
              leverage my extensive JavaScript expertise and diverse technical
              skills. I aim to contribute to innovative projects that push the
              boundaries of web and mobile development, while continuously
              expanding my skill set. My goal is to deliver high-quality,
              fostering collaborative relationships within cross-functional
              teams. I'm excited to tackle new challenges and make a significant
              impact in a dynamic development environment.
            </Text>
          </Card>

          <Title level={3} className="mt-8 mb-4">
            Education
          </Title>
          <Card>
            <Title level={4}>University of Mindanao - Digos (UM)</Title>
            <Text className="block">
              Bachelor's Degree in Computer Engineering
            </Text>
            <Text>Graduated: August 2021</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
