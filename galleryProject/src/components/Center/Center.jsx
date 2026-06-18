  import React, { useEffect, useState } from 'react'
  import axios from 'axios'

function Center() {

     const [apiResponse, setapiResponse] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
    loadnewContent()
    }, [])
    

    async function loadnewContent(){
      const randomPage = Math.floor(Math.random() * 10) + 1;
      console.log(randomPage);

      setLoading(true);

      const {data} = await axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=16`);
      
      setapiResponse(prev =>[...prev,...data]); 

      setLoading(false);
    }
  return (

    <div onScroll={(e)=>{
          
          const {scrollTop , scrollHeight, clientHeight} = e.currentTarget;

          if (loading) return;

          if(scrollTop +clientHeight >=scrollHeight-10){
            loadnewContent()
          }
      }
      } className='h-[calc(100vh-128px)] w-full overflow-y-auto'>

      <div className="grid grid-cols-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">

        {apiResponse.map(function(elem,idx){
          return(
            <div key={idx} className="relative bg-gray-900 h-40 rounded-2xl overflow-hidden">
              <img 
              onClick={()=>{
                window.open(elem.url , "_blank")
              }}
              loading='lazy'
              decoding="async"
              className='object-cover h-full w-full cursor-pointer' 
              src={elem.download_url} 
              alt={elem.author} />

        <div className="absolute bottom-0 left-0 w-full text-white p-2 text-center bg-black/70">
          <h1 className="text-sm">{elem.author}</h1>
        </div>
            </div>
          )


        })}




  </div>

        </div>

  )
}

export default Center
