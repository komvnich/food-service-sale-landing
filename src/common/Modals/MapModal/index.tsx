
import React, { useMemo, useState } from 'react';

// components
import { Button, Modal } from 'antd';

// services
import dynamic from 'next/dynamic';
import { sendRequest } from '@/libs/aFetch';

interface IMapModal {
    isOpen: boolean,
    handleCancel: () => void,
    handleSetCoordsData: (values: any) => void,
    postData: any
}

const MapModal = (props: IMapModal) => {
    const { isOpen, handleCancel, handleSetCoordsData, postData } = props;
    const [advanceData, setAdvanceData] = useState([]);

    const MapPicker = useMemo(() => dynamic(() => import('@/components/MapPicker'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), []);

    const createClient = () => {
        const mergedObject = { ...postData[0], ...postData[1], latitude: postData[0]?.coords[0], longitude: postData[0]?.coords[1] };
        const { coords, confirm, ...newObj } = mergedObject;

        sendRequest('http://localhost:3000/api/create-client', 'POST', newObj)
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    return (
        <Modal
            width="80%"
            title={"Для реєстрації, Ви повинні вибрати адресу, де розташований Ваш бізнес"}
            footer={(
                <div className="flex gap-[12px] items-end justify-end">
                    <Button
                        onClick={createClient}
                        disabled={advanceData.length === 0 ? true : false}
                        className="w-[50%] h-[40px]" type="primary"
                    >
                        Зареєструватись
                    </Button>
                    <Button className="w-[30%] h-[40px]" type="dashed">
                        Відміна
                    </Button>
                </div>
            )}
            maskClosable
            open={isOpen}
            onCancel={handleCancel}
        >
            <MapPicker
                setAdvanceData={setAdvanceData}
                handlerSetCoordsData={handleSetCoordsData}
            />
        </Modal>
    );
};

export default MapModal;