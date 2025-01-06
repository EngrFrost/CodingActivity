import { useState } from "react";
import { Button, Input, TextArea, Title, useToast } from "../common";
import { Form } from "antd";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form] = Form.useForm<ContactForm>();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (values: ContactForm) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", values);
      toast.success("Message sent successfully!");
      form.resetFields();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <Title level={2} className="mb-6">
        Contact Us
      </Title>
      <Form
        form={form}
        layout="vertical"
        className="max-w-md"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <TextArea rows={4} placeholder="Write your message here..." />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full"
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
