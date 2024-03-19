

export default function Footer({position}){
    console.log(position);
    return(<>
    <div style={{ backgroundColor:"#9d75cf",position:`${position}`,width:"100%",bottom:0,boxShadow:"5px 5px 20px gray",zIndex:1000}}>
     <p style={{fontSize:"20px",color:"#fff",textAlign:"center",margin:0}}>&copy; All rights reserved - 2024</p>
    </div>
    </>)
}