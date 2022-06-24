import Image from 'next/image'
import Script from 'next/script'
import menu from "/public/Hamburger_icon.svg.png"
import Link from 'next/link'
function Nav(){
    return (
        <nav id='nav' className='nav'>
            <Script>
            {`
            function addMenu() {
            var x = document.getElementById("nav");
            if (x.className === "nav") {
                x.className += " responsive";
            } else {
                x.className = "nav";
            }
            }`
            }
            </Script>
           <Link href="#">เกี่ยวกับหมอ</Link>
           <Link href="#">บทความ</Link>
           <Link href="#">จองคิว</Link>
           <div className="icon" id='icon' onClick={() =>addMenu()} href="javascript:void(0)"><Image src={menu} height={20} width={20}/></div>
           
        </nav>
        
        )
}

export default Nav