import React, {useState,useContext,useEffect} from "react"
export default function Experience(){
    const [style,setStyle] = useState({

        padding:"2vw"
        
    })

    // useEffect(()=>{
    //     window.location.hash = window.decodeURIComponent(window.location.hash);
    //     const scrollToAnchor = () => {
    //         const hashParts = window.location.hash.split('#');
    //         if (hashParts.length > 2) {
    //         const hash = hashParts.slice(-1)[0];
    //         document.querySelector(`#${hash}`).scrollIntoView();
    //         }
    //     };
    //     scrollToAnchor();
    //     window.onhashchange = scrollToAnchor;
    // })

    return(
        <div style={style}>
            <a name="top" id="experience-top-anchor"></a><h1 className="baloo-title">Experience and Skills</h1>
          
            <p className="regular-text">
                 <h2>Education</h2>
                I am a rising senior at Marymount University in Arlington VA, majoring in Computer Science, <br></br>
               and a recipient of the Clare Boothe Luce Scholarship (full-ride 4 year scholarship) at my university.<br></br>

               <h2>Web Development Experience</h2>
               I am 21 years old, and I've gained over 9 years of web development experience since I've learned how to code at 12. 
               I created a fullstack cosmetics marketplace web application in high school, which I ran in production for a few months. 
               Now, I work as an instuctor assistant/TA for a FullStack Flex web development class of over 20 students, a 6 month coding bootcamp at George Washington University, Arlington VA. 
               My job consists of teaching students how to code and assimilate new web development libraries and technologies. I also help them debug their code in one-on-one meetings, and I grade their web development assignments.

               <h2>Programming Languages</h2>
               Javascript, Python , Java

               <h2>Web Dev Skills</h2>
               React, Angular JS 1, NodeJS, MongoDb, ExpressJs, MySQL, Git
            </p>
         
            
           
        </div>
    )
 
    
}
