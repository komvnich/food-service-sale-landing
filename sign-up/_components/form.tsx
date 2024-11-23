'use client'

import React, { useState } from 'react';

// components
import {
    Form,
    Input,
    InputNumber,
    Select,
    Button
} from 'antd';

// services
import MapModal from '@/common/Modals/MapModal';

const { Option } = Select;

const SignUp = () => {
    const [mapModal, setMapModal] = useState<boolean>(false);
    const [postData, setPostData] = useState<any>([]);
    const [dataForm, setDataForm] = useState<any>([]);
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        if (!values) return;

        setMapModal(prev => !prev);
        setDataForm({ ...values, phone: `+380${values.phone}` });
    };

    const handlerSetCoordsData = (data: any) => {
        setPostData([data, dataForm]);
    };

    const prefixSelector = (
        <Form.Item noStyle>
            <Select defaultValue="380" style={{ width: 90 }}>
                <Option value="380">+380</Option>
            </Select>
        </Form.Item>
    );

    return (
        <section>
            <MapModal
                isOpen={mapModal}
                postData={postData}
                handleSetCoordsData={handlerSetCoordsData}
                handleCancel={() => setMapModal(prev => !prev)}
            />
            <Form
                form={form}
                name="sign-up"
                onFinish={onFinish}
                scrollToFirstError
                className="max-w-[600px] mx-auto py-[50px]"
            >
                <p>E-mail для вашого облікового запису</p>
                <Form.Item
                    name="email"
                    required
                    rules={[
                        {
                            type: 'email',
                            message: 'Введений E-mail недійсний!',
                        },
                        {
                            required: true,
                            message: 'Будь ласка, введіть свій E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="Введіть ваш Email" className="bg-#a6a6a6-300 h-[39px]" />
                </Form.Item>
                <p>Пароль</p>
                <Form.Item
                    name="password"
                    required
                    rules={[
                        {
                            required: true,
                            message: 'Будь ласка, придумайте надійний пароль!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Введіть ваш пароль" className="bg-#a6a6a6-300 h-[39px]" />
                </Form.Item>
                <p>Повтор пароля</p>
                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Будь ласка, підтвердіть Ваш пароль!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Новий пароль, який ви ввели, не збігається!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Введіть повтор вашого пароля" className="bg-#a6a6a6-300 h-[39px]" />
                </Form.Item>
                <p>Номер телефону контактної особи</p>
                <Form.Item
                    name="phone"
                    rules={[
                        { required: true, message: 'Будь ласка, введіть номер телефону!' },
                    ]}
                >
                    <InputNumber
                        type="number"
                        addonBefore={prefixSelector}
                        maxLength={9}
                        className="bg-#a6a6a6-300 h-[39px] w-full"
                    />
                </Form.Item>
                <p>Найменування бізнесу</p>
                <Form.Item
                    name="agency"
                    rules={[{ required: true, message: 'Будь ласка, введіть найменування бізнесу!' }]}
                >
                    <Input
                        className="bg-#a6a6a6-300 h-[39px]"
                        count={{
                            show: true,
                            max: 300,
                        }} />
                </Form.Item>
                <Button className="w-full h-[39px] mt-[50px]" type="primary" htmlType="submit">
                    Зареєструватись
                </Button>
            </Form>
        </section>
    );
};

export default SignUp;