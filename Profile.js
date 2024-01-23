import React from "react";
import bamboo from './bamboo fab.jpg';
import './App.css';
function Profile(){
    return(
        <div className="profile-background" style={{color:'black',backgroundImage:`url(${bamboo})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',height:'100vh'}}>
<h2 style={{fontFamily:'revert-reverse'}}>SREE KNIT FASHIONS</h2>
<p style={{fontFamily:'revert-layer',fontWeight:'bold'}}>"Warm Embraces, Innovative Patterns."</p>
<p style={{fontFamily:'unset',fontSize:'20px'}}>Sree knit Fashions is an emerging brand in the 
world of ethnic knitting, with its diverse collection of fleece, honeycomb, and rib knitwear.</p>
<p style={{fontFamily:'unset',fontSize:'20px'}}>The production process of Sree knit Fashions is designed to provide maximum efficiency and high-quality output. 
The company's expertise in knitting and their dedication to the production process ensure the final product meets the desired quality standards.</p>
    <p style={{fontFamily:'unset',fontSize:'20px'}}>Sree knit Fashions partners with various partners, such as textile manufacturers and distributors, to access the required machines, materials, and technologies. 
 This collaborative approach enhances the overall production capabilities of the company and ensures the timely delivery of high-quality knitwear</p>
 <p style={{fontFamily:'unset',fontSize:'20px'}}>The efficient operation of the production process at Sree knit Fashions is achieved through a combination of skilled workers, advanced technologies, and quality control measures.
 This ensures that only the best-quality products reach the consumers.</p>
 <p style={{fontFamily:'unset',fontSize:'20px'}}>The strict quality control process followed by Sree knit Fashions involves the use of advanced technologies to inspect and monitor the cloth production process. 
    This ensures that the company maintains its commitment to producing high-quality knitwear and catering to the diverse needs of its customers.
 </p>
 <p  style={{fontFamily:'unset',fontSize:'20px'}}>In conclusion, the sree knit fashions knitting business is a prime example of how innovative products and marketing strategies can successfully capture a substantial share of the market. 
    By offering high-quality products and focusing on sustainability, the company has been able to create a strong brand loyalty among its customers.
     The combination of exceptional design and comfortable wear also ensures that the products continue to attract new customers and maintain the interest of existing ones. 
     Additionally, the strategic partnerships with celebrities and social media influencers have further contributed to the company's growth and market visibility.
</p>
 <div className="footer">
        <p style={{fontFamily:'revert',fontSize:'20px', backgroundColor:'black',color:'white',padding:'50px',textAlign:'center'}}>Sree Knit Fashions &copy; 2023. All rights reserved.</p>
      </div>
        </div>
    )
}
export default Profile;