import {
  X,
  Check,
  Copy,
  ExternalLink
} from "lucide-react";

import {
  PLATFORM_ADAPTERS
} from "../lib/platformAdapters";

interface CopyModalProps {

  open:boolean;

  onClose:()=>void;

  prompt:string;

}


export default function CopyModal({

  open,

  onClose,

  prompt

}:CopyModalProps){


  if(!open){

    return null;

  }


  const handleCopy = async()=>{

    try{

      await navigator.clipboard.writeText(prompt);

      alert("复制成功！");

    }catch(error){

      console.error(error);

      alert("复制失败，请手动复制");

    }

  };



  const openPlatform=(url:string)=>{

    window.open(url,"_blank");

  };



  return (

    <div className="
      fixed inset-0 
      bg-black/60 
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
    ">


      <div className="
        w-[520px]
        max-h-[80vh]
        overflow-y-auto
        bg-[#111827]
        rounded-2xl
        p-6
        border
        border-gray-700
      ">


        <div className="
          flex
          justify-between
          items-center
          mb-5
        ">

          <div>

            <h2 className="
              text-xl
              font-bold
              text-white
            ">
              复制成功！
            </h2>


            <p className="
              text-gray-400
              mt-1
            ">
              选择 AI 平台继续使用
            </p>

          </div>


          <button
            onClick={onClose}
          >

            <X
              className="
              text-gray-400
              "
            />

          </button>


        </div>




        <button
          onClick={handleCopy}
          className="
          w-full
          mb-5
          flex
          items-center
          justify-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          text-white
          py-3
          rounded-xl
          "
        >

          <Copy size={18}/>

          再次复制提示词

        </button>




        <div className="
          grid
          grid-cols-3
          gap-3
        ">


        {
          PLATFORM_ADAPTERS.map((item)=>(


            <button

              key={item.id}

              onClick={()=>openPlatform(item.url)}

              className="
              bg-[#1f2937]
              hover:bg-blue-600
              transition
              rounded-xl
              p-4
              text-white
              flex
              flex-col
              items-center
              gap-2
              "

            >


              <span className="
              text-2xl
              ">
                {item.icon}
              </span>


              <span>

                {item.name}

              </span>


              <ExternalLink
                size={14}
              />


            </button>


          ))

        }


        </div>



        <div className="
        mt-5
        text-sm
        text-gray-400
        flex
        items-center
        gap-2
        ">

          <Check size={16}/>

          提示词已复制到剪贴板

        </div>


      </div>


    </div>

  );


}