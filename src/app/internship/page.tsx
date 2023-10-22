import axios from "axios";
import Card from "../components/Card";

async function page() {

  const data=await axios.get("http://localhost:3000/api/post/adata")
  console.log(data.data[1].cname);
  const list=data.data;
  return (
    <>
      <div className="flex justify-center items-center p-5 m-4 text-2xl text-white">
        here you can find your dream job
      </div>
      <hr />
      <div className="flex justify-center text-2xl text-white">
        <div className="w-full flex flex-wrap gap-10 items-center justify-center m-10 p-6">
          {
           list.map((post:any) => <Card key={post._id} {...post}/>)
          }
        </div>
      </div>
    </>
  );
}

export default page;

