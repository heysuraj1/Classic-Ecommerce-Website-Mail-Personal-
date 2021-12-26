import { useState } from "react";
import baseUrl from '../helpers/baseUrl'
// import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [collect, setCollect] = useState("");
  const router = useRouter()

  const handelSubmit = async (e) => {
    console.log("clicked");
    //https://cloudinary.com/v1_1/learnerboy
    e.preventDefault();

    const mediaUrl = await imageUpload();
    try {
      //  const mediaUrl =  await imageUpload()
      const res = await fetch(`${baseUrl}/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          mediaUrl,
          description,
          collect,
        }),
      });
      // console.log(res)
      const res2 = await res.json();
      if (res2.error) {
        // window.alert(res2.error);
      toast(res2.error)

      } else {
        // window.alert("Product Saved");
      toast("Product Saved Successfully")

        
        const timer = setTimeout(() => {
          router.push('/')
        }, 5000);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.log(err);
    }
  };


  
  const imageUpload = async () => {
    const data = new FormData();
    data.append("file", media);
    data.append("upload_preset", "mystore");
    data.append("cloud_name", "learnerboy");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/learnerboy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    return res2.url;
  };

  return (
    <div className="container mt-5 mb-5 aado">
      <div className="container text-center mt-5 mb-5">
        <img
          src="https://static.thenounproject.com/png/3022246-200.png"
          width={70}
          alt=""
        />
        <h5 className="mt-2">Add Products</h5>

      </div>
      <form onSubmit={handelSubmit}>
        <div className="mb-2">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Description</label>
          <textarea 
            type="text"
            className="form-control"
            value={description}
            rows="5"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => {
              setMedia(e.target.files[0]);
            }}
          />
        </div>
        <div className="text-center">

        <img
          src={media ? URL.createObjectURL(media) : ""}
          className="img-fluid henc text-center"
          alt="..."
          width={200}
        />

        </div>
        <div className="mb-2">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={collect}
            onChange={(e) => {
              setCollect(e.target.value);
            }}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-warning">
            <a className="sub">POST</a>
          </button>
        </div>
      </form>
      {/* <Link href='/Login'>
<p className="text-center yen  mt-5">{"Already Have An Account ?"}</p>
</Link> */}
              <ToastContainer />
    </div>
  );
};

export default AddProduct;
