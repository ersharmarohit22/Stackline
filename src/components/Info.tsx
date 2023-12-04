import {CSSProperties} from 'react';
import Card from "./Card";
import { useSelector } from 'react-redux';

const Info = ()=>{
  const subtitleStyle: CSSProperties = {
    color:'grey',
    fontSize:'12px',
    textAlign:'center',
    margin:'5px'
  };
  const textCenter: CSSProperties = {
    textAlign:'center',
    margin:'10px 0 0 0'
  };

  const tagsDivStyle : CSSProperties = {
    width: '100%', /* Set the width of the parent div */
    padding: '12px'
  }
  const tagsStyle : CSSProperties = {
    display: 'inline-block',
    margin: '10px', /* Add margin for spacing between elements */
    border: '1px solid #ccc', /* Just for visualization */
    padding: '5px',
    fontSize:'13px'

  }

  const data = useSelector((state: any) => state.dataJson.value[0]);
  const {image,title, subtitle,tags} = data
  return(
    <div>
      <Card styleCss={{height:'175vh'}}>
        <div style={textCenter}>
          <img width={100} src ={image}/>
        </div>
        
        <div>
          <h3 style={textCenter}>{title}</h3>
          <p style={subtitleStyle}>{subtitle}</p>
        </div>
        <div style={tagsDivStyle}>
          {tags.map((tag:string,index:number)=><p style={tagsStyle} key={tag+'_'+index}>{tag}</p>)}
        </div>
        
      </Card>
      
    </div>
  )
}

export default Info;