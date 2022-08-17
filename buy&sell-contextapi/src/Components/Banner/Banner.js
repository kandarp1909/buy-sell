import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();
  
  return (
   
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
           
           
          <DropdownButton
          style={{margin:5}}
      align="end"
      title="Categories"
      id="dropdown-menu-align-end"
      onSelect={(e)=>{setCategory(e);
        
      }}
    >
      <Dropdown.Item eventKey="null">All Categories</Dropdown.Item>
      <Dropdown.Item eventKey="Cars">Cars</Dropdown.Item>
      <Dropdown.Item eventKey="Cameras & Lenses">Cameras & Lenses</Dropdown.Item>
   
      <Dropdown.Item eventKey="Computers & Laptops">Computers & Laptops</Dropdown.Item>
      <Dropdown.Item eventKey="Mobile Phones">Mobile Phones</Dropdown.Item>
      <Dropdown.Item eventKey="Motorcycles">Motorcycles</Dropdown.Item>
      <Dropdown.Item eventKey="Tablets">Tablets</Dropdown.Item>
    </DropdownButton>
           
           
           
            {/* <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select> */}
          </div>
          <div className="otherQuickOptions">

          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Cars")}>Cars</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Cameras & Lenses")}>Cameras & Lenses</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Computers & Laptops")}>Computers & Laptops</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Mobile Phones")}>Mobile Phones</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Motorcycles")}>Motorcycles</Button>{' '}
          <Button  style={{margin:5}}  variant="primary" onClick={()=>setCategory("Tablets")}>Tablets</Button>{' '}




            {/* <span onClick={()=>setCategory("Cars")} >Cars</span>   
            <span onClick={()=>setCategory("Cameras & Lenses")} >Cameras & Lenses</span>
            <span onClick={()=>setCategory("Computers & Laptops")} >Computers & Laptops</span>
            <span onClick={()=>setCategory("Mobile Phones")} >Mobile Phones</span>
            <span onClick={()=>setCategory("Motorcycles")} >Motorcycles</span>
            <span onClick={()=>setCategory("Tablets")} >Tablets</span> */}
          </div>
        </div>
        
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
     { category!=null && <DynamicPosts category={category}/>  }
    </div>
  );
}

export default Banner;
