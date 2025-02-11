import Image from "next/image";
import { AiOutlineUserAdd } from "react-icons/ai";
import Table from "./components/table";
import Form from "./components/form";


export default function Home() {
  return (
    <div className="">
      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">Employee Management</h1> 
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button className="flex bg-indigo-500 px-4 py-2 text-white border rounded-md hover:bg-indigo-600  hover:border-gray-700">Add Employee <span className="px-1"><AiOutlineUserAdd size={23}/></span></button>
          </div>
        </div>
        <div className="container mx-auto">
       <Form/>
       
        </div>
        <div className="container mx-auto">

       <Table/>
        </div>
        </main>
      
    </div>
  );
}
