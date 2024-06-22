import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const LargeScreensNavBar = () => {
  // Getting links from the AppData.json file. making use of the useState and useEffect hooks.

  const [navLinks, setNavLinks] = useState([]);

  useEffect(()=>{
      const fetchlinks = async ()=>{
        try {
          const response = await fetch('/assets/data/AppData.json')
          const links = await response.json()
          setNavLinks(links.headerUrls)
        }
        catch(error){
            console.log("error" + error)
        }
      }
      fetchlinks()
    
  },[])

  return (
    <div className='hidden lg:flex z-50 fixed w-full bg-black items-center justify-centre align-center text-other shadow-lg  font-sm'>
      <div className='w-full flex relative mx-auto max-w-7xl justify-between'>
          <div className="flex items-center py-[5px] my-[5px]">
            1864
          </div>
          <div className="links flex m-[5px] p-[5px] justify-center align-center font-sm-">
            <ul className='flex text- justify-between'>
              {
                  navLinks.map((link)=>{
                  return <Link to={link.urlName} className='items-center hover:font-medium hover:cursor-pointer m-[5px] p-[2px]' key={link.urlName}>{link.urlName}</Link>
                  })
              }
            </ul>
          </div>
          <div className="flex items-center py-[5px] my-[5px]">
          <Link to={"login"} className='bg-primary font-sm hover:bg-secondary rounded-sm text-other py-[5px] px-[25px]'>Sign In</Link>
          </div>
      </div>

    </div>
  )
}

export default LargeScreensNavBar