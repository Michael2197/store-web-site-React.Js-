import React from 'react';
import { Link } from 'react-router-dom';
 import { MobileOutlined, HeartOutlined, UserOutlined, SwapOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'


export default function Header() {
  return (
    <>
      
        {/* Start header */}
        <header>

            {/* Start header-top */}
            <div className="header-top">

                {/* Strat left-side */}
                <div className="left-side">
                    <select name="country">
                        <option value="English"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/eng.png" alt="en" />English</option>
                        <option value="English"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/fn.png" alt="fn" />Franch</option>
                        <option value="English"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/us.png" alt="us" />USA</option>
                    </select>

                    <select name="curency">
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBR">GBR</option>
                    </select>

                    <div className="number">
                    < MobileOutlined />
                        123-456-7890
                    </div>
                </div>
                {/* End left-side */}

                {/* Strat right-side */}
                <div className="right-side">
                    <div className="compare">
                    <SwapOutlined/>
                        compare
                    </div>

                    <div className="whishlist">
                    <HeartOutlined />
                        whishlist
                    </div>

                    <div className="login">
                    <UserOutlined />
                    <Link to={"/Login"}>login</Link>
                    </div>
                </div>
                {/* End right-side */}
            </div>
            {/* End header-top */}

             {/* Start header-buttom */}
             <div className="header-buttom">

{/* Strat left-side */}
<div className="left-side">
   <div className="homeimg">


   <Link to={"/"}><img src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png" alt="logo" /></Link>
   </div>

    
</div>
{/* End left-side */}

{/* Strat right-side */}
<div className="right-side">
    <div className="home">
      HOME

    <div className='home2'>
        {/* <ul>
           <li>Faction 1</li>
           <li>Faction 2</li>
           <li>Faction 3</li>
           <li>Faction 1</li>
           <li>Faction 1</li>


        </ul> */}
         </div>
    
    </div>

    <div className="pages">PAGES
    
    </div>

    <div className="blog">BLOG
    
    </div>
    <div className="products">PRODUCTS
    
    </div>
    <div className="shop">SHOP
    
    </div>
    <div className="contact us">CONTACT US
    
    </div>
    <div className="search">
    <Link ><SearchOutlined /></Link>

    </div>
    <div className="Card">
        <Link to={"/Card"}><ShoppingCartOutlined /></Link>

    </div>
    
</div>
{/* End right-side */}
</div>
{/* End header-top */}
        </header>
        {/* End header */}

    </>
  )
}
