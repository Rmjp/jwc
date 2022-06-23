import Image from 'next/image'
import Script from 'next/script'
import menu from "/public/Hamburger_icon.svg.png"
function Nav(){
    return (
        <nav id='nav'>
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
           <a href="#">เกี่ยวกับหมอ</a>
           <a href="#">บทความ</a>
           <a href="#">จองคิว</a>
           <a className="icon" id='icon' onClick={() =>addMenu()} href="javascript:void(0)"><Image src={menu} height={20} width={20}/></a>
           
        </nav>
        
        )
}

export default Nav