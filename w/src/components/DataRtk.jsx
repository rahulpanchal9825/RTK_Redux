import React, { useState } from "react";
import { useAddNewPostMutation,useDeletePostMutation 
  ,useGetPostsQuery,useUpdatePostMutation} from "../services/apiSlice";

const DataRtk = () => {
  const [addNewPost] = useAddNewPostMutation();
  const [deletepost] = useDeletePostMutation();
  const [updatepost] = useUpdatePostMutation();
  const {data,isError,isFetching,isLoading,isSuccess} = useGetPostsQuery();
  const [state, setstate] = useState({
    id:"",
    title: "",
    desc: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setstate((preProps) => ({
      ...preProps,
      [name]: value,
    }));
    
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    addNewPost(state)
    
  };
  
  if(isLoading&&isFetching){
    <h1 style={{color:'white'}}>...loading</h1>
  }
  if(isError){
    <h1>...Something wrong</h1>
  }
  const storeSingledata = (data) =>{
    setstate({
      id:data.id,
      title:data.title,
      desc:data.desc
    })
    alert('Make Changes in input and hit Update Button')
    };  
    console.log(state);
  const handleupdate =() =>{
    updatepost(state)
    setstate({
      id:'',
      title:'',
      desc:''
    })
  }
  return (
    <div>
      <div style={{ margin: "12px" }}>
        <label style={{color:'white'}}>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={state.title}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ margin: "12px" }}>
        <label  style={{color:'white',marginRight:'inherit'}}>Desc</label>
        <textarea
          name="desc"
          type="text"
          placeholder="Enter Desc"
          onChange={handleInputChange}
          value={state.desc}
        />
      </div>

      <button
        style={{ marginLeft: "40px" }}
        type="submit"
        onClick={handlesubmit}
      >
        Submit
      </button>
      <button
        style={{ marginLeft: "40px" }}
        type="submit"
        onClick={handleupdate}
      >
        Update
      </button>
      <div  style={{color:'white'}}>
       {isSuccess&&
       data?.map(item =>{
        return(
          <div style={{border:'1px solid white',marginBottom:'15px'}}>
          <div>{item.title}</div>
          <div>{item.desc}</div>
          <button style={{background:'red'}} onClick={()=>deletepost(item.id)}>Remove</button>
          <button style={{background:'green'}} onClick={()=>storeSingledata(item)}>Edit</button>
          </div>
        )
       })
       }
      </div>
    </div>
  );
};

export default DataRtk;
