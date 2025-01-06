import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;

const Contact = () => {
  return (
    <div className="p-8">
      <Title>Contact Us</Title>
      <Form layout="vertical" className="max-w-md">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Message" name="message">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact; 