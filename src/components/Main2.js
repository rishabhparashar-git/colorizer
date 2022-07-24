import React , {useState} from "react";

export default function Main(){
    const [URL,setURL]=useState("")
    const [colorList, setColorList]=useState([])

    const fetchColors = () => {
        if(URL){
          fetch(
            `https://www.colorfyit.com/api/swatches/list.json?url=${URL}`
        ).then(async (resp) => {
            const json = await resp.json();
            let res = JSON.stringify(json)
            let colors=json.colors
            let colorLi=[]
            Object.entries(colors).map((ele)=>{
                let colorCode = ele[1].Hex
                colorLi.push(colorCode)
            })
            setColorList(colorLi)
            console.log(colorList)
          })
        .catch((err) => console.log(err));
        }else{
          alert("Please Enter URL")
        }
        
      };

      const styles = {
        cardHolder:{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          minHeight:"80vh"
        },
        input:{
          margin:20,
          width:400,
          padding:18,
          border:"1px solid grey",
          borderRadius:8
        },
        btn:{
          background:"#e3e3e3",
          margin:20,
          width:100,
          height:30,
          cursor:"pointer",
          border:"1px solid grey",
          borderRadius:8
        }
        
    }

    function ColorCard(props){
        const divStyle={
          background:props.c,
          margin:20,
          height:"200px",
          width:"200px",
          borderRadius:"5%",
          boxShadow:"0px 5px 12px black"
        }
        const pStyle={
          fontWeight:"bolder",
          color:"white",
          position:"relative",
          top:"50%",
          left:"50%",
          transform:"translate(-50%,-50%)"
        }
        return (
          <div style={divStyle}>
            <p style={pStyle}>{props.c}</p>
          </div>
        )
      }

    return(
      <div style={styles.main} >
        <center>
          <input style={styles.input} type="text" onChange={(e)=>{setURL(e.target.value)}} placeholder="Paste your URL" /><br/>
          <button style={styles.btn} onClick={fetchColors}>Show Colors</button>
          <div style={styles.cardHolder}>
            {colorList.map((ele,key) => <ColorCard key={key} c={ele} />)}
          </div>
        </center> 
      </div>
    )
    
};
