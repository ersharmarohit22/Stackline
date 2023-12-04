import {useMemo} from 'react';
import Header from "./Header"
import Info from "./Info";
import TableView from "./TableView";
import ChartView from "./ChartView";
import { useSelector } from 'react-redux';

const PageLayout = () =>{
  const data = useSelector((state: any) => state.dataJson.value[0]);
  const salesData = useMemo(()=>data.sales,[]);
  const tableColumns = ['WEEK ENDING', 'RETAIL SALES', 'WHOLESALE SALES', 'UNITS SOLD', 'RETAILER MARGIN'];

  return(
    <>
      <Header/>
      <div style={{display:'flex'}}>
        <div style={{width:'20%'}}>
          <Info/>
        </div>
        
        <div style={{width:'80%'}}> 
          <ChartView jsonData = {data}/>
          <TableView columns={tableColumns} salesData={salesData} />
        </div>
      </div>
      
    </>
  )
}

export default PageLayout;