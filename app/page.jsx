"use client";
import React from 'react';
import { Form, Input, Select, Button, message } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

function Home() {
  const onFinish = (values) => {
    console.log('Submitted Data:', values);
    message.success('Registration successful!');
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 500, margin: '0 auto' }}
    >
      <Form.Item
        label="Student Name"
        name="studentName"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label="Grade"
        name="grade"
        rules={[{ required: true, message: 'Please select your grade' }]}
      >
        <Select placeholder="Select your grade">
          <Option value="X">X</Option>
          <Option value="XI">XI</Option>
          <Option value="XII">XII</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Extracurricular Activity"
        name="activity"
        rules={[{ required: true, message: 'Please choose an activity' }]}
      >
        <Select placeholder="Choose an activity">
          <Option value="Basketball">Basketball</Option>
          <Option value="Futsal">Futsal</Option>
          <Option value="Music">Music</Option>
          <Option value="Flag Raising Team">Flag Raising Team</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Reason for Joining"
        name="reason"
        rules={[
          { required: true, message: 'Please provide a reason' },
          { min: 10, message: 'Reason must be at least 10 characters' },
        ]}
      >
        <TextArea rows={4} placeholder="Tell us why you want to join" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Home;

