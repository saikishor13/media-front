import React, { useEffect, useState } from "react";
import Videocard from "./Videocard";
import { Col, Row } from "react-bootstrap";
import { getAlluploadedVideoAPI, getCategoryAPI, updateCategoryAPI } from "../../services/allAPI";

function View({uploadVideoResponse}) {
  const [allvideos, setAllvideos] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false);

  useEffect(() => {
    getUploadedVideos();
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse]);

  const getUploadedVideos = async () => {
    try {
      const result = await getAlluploadedVideoAPI();
      console.log(result);
      if (result.status === 200) {
        setAllvideos(result.data);
      } else {
        setAllvideos([]);
        console.log("API Failed");
      }
    } catch (error) {
      console.log("Error fetching videos:", error);
      setAllvideos([]);
    }
  };
  // console.log(allvideos);

  const VideoDragOver = (e) =>{
    e.preventDefault();
  }

  const videoDrop = async (e) => {
    const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData('data'))
    console.log(videoId,categoryId)
    const {data}= await getCategoryAPI()
    console.log(data)
    const selectCatedgory=data.find(items=>items.id==categoryId)
    let result =selectCatedgory.allVideos.filter(video=>videoId!==videoId)
    console.log(result)
    let {id,categoryName}=selectCatedgory
    let newCategory={id,categoryName,allVideos:result}
    console.log(newCategory);
    const res =await updateCategoryAPI(categoryId,newCategory)
  }
  return (
    <>
      <Row droppable='true' onDragOver={(e)=>VideoDragOver(e)} onDrop={e=>videoDrop(e)}>
        {
          allvideos?.length>0?allvideos.map(video =>(
            <Col sm={12} md={6} lg={4} xl={3}>
            <Videocard video ={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
            </Col>
          )):<p>Nothing to display</p>
          }
      </Row>
    </>
  );
}

export default View;
