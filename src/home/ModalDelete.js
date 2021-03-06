import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { dataFomVl, DeleteData, PostData } from "../redux/reducer";

const ModalDelete = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const datafom = useSelector(dataFomVl);
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    dispatch(DeleteData(datafom.id));
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        DELETE
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <h1>Xóa Sách</h1>
        <p>
          Bạn có muốn xóa Danh Sách có ID :{datafom.id} và NAME : {datafom.name}{" "}
        </p>
      </Modal>
    </>
  );
};

export default ModalDelete;
