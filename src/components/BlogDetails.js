import React from 'react'
import { useParams } from 'react-router-dom';
import {Helmet} from "react-helmet";
function BlogDetails() {
    const { blogID } = useParams();
  return (
    <div className="flex justify-center items-center ">
    <Helmet>
      <title>{ blogID } - My Website </title>
       <meta name="description" content={`${blogID}-Application`}/>
    </Helmet>
    <div>
    <h1 className="py-4">Blog ID: {blogID}</h1>
  </div>
</div>
  )
}

export default BlogDetails