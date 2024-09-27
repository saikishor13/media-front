import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { uploadVideoAPI } from "../../services/allAPI";

function Add({setUploadVideoResponse}) {
  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: ""
  });

  const getYoutubeLink = (e) => {
    const { value } = e.target;
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11);
      console.log(`http://www.youtube.com/embed/${vID}`);
      setUploadVideo({ ...uploadVideo, link: `http://www.youtube.com/embed/${vID}` });
    } else {
      setUploadVideo({ ...uploadVideo, link: "" });
    }
  };

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo;
    if (!id || !caption || !url || !link) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const result = await uploadVideoAPI(uploadVideo);
      if (result.status >= 200 && result.status <= 300) {
        alert("Video uploaded successfully");
        handleClose()
        setUploadVideo({
          id: "",
          caption: "",
          url: "",
          link: ""
        });
        setUploadVideoResponse(result.data);
      }
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5></h5>
        <Button onClick={handleShow}>Upload Videos</Button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="videoIdInput">
            <Form.Control
              type="text"
              placeholder="Video ID"
              onChange={(e) => setUploadVideo({ ...uploadVideo, id: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="videoNameInput">
            <Form.Control
              type="text"
              placeholder="Video Caption"
              onChange={(e) => setUploadVideo({ ...uploadVideo, caption: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageUrlInput">
            <Form.Control
              type="text"
              placeholder="Image URL"
              onChange={(e) => setUploadVideo({ ...uploadVideo, url: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="videoUrlInput">
            <Form.Control
              type="text"
              placeholder="YouTube URL"
              onChange={getYoutubeLink}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
