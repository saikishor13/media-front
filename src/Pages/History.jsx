import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from "../../services/allAPI";


function History() {
  const [history,setHistory] = useState([]);

  useEffect(() => {
    getHistory()
  },[])

  const getHistory = async () =>{
    const result = await getHistoryAPI();
    if(result.status == 200){
      setHistory(result.data);
    }
    else{
      console.log("API failed");
      console.log(result.message);
    }
  }
  const removeHistory = async(id) => {
    await deleteHistoryAPI(id)
    getHistory()
  }
  
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <h5>Watch History</h5>
        <Link
          style={{
            textDecoration: "none",
            color: "",
            fontsize: "25px",
          }}
          to={"/home"}
        >
          Back To Home <i className="fa-solid fa-arrow-rotate"></i>
        </Link>
      </div>
      <table className="table mb-5 container shadow w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              history?.length>0?history.map((video,index) => (
                <tr>
                  <td>{index+1}</td>
                  <td className="text-dark">{video?.caption}</td>
                  <td><a href={video.link} target="_blank">{video?.link}</a></td>
                  <td>{video.timeStamp}</td>
                  <td><button className="btn" onClick={()=>removeHistory(video?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
              )):<p className="text-danger">Nothing to display</p>
            } 
        </tbody>
      </table>
    </>
  );
}

export default History;
