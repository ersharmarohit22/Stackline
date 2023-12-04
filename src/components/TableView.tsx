
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from './Card';

interface TableViewProps {
  columns: any;
  salesData: any;
}

const TableView : React.FC<TableViewProps>= ({columns,salesData}) => {
  return (
    <Card styleCss={{position: 'relative',
      height: '50%',
      }}>
      <TableContainer style={{position: 'absolute',height: '95%',overflowY: 'auto'}} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((col:any,index:number)=><TableCell align="center" key={`${col}_${index}`}>{col}</TableCell>)}
              
            </TableRow>
          </TableHead>
          <TableBody>
            {salesData.map((row:any) => (
              <TableRow
                key={row.weekEnding}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">
                  {row.weekEnding}
                </TableCell>
                <TableCell align="center">{row.retailSales}</TableCell>
                <TableCell align="center">{row.wholesaleSales}</TableCell>
                <TableCell align="center">{row.unitsSold}</TableCell>
                <TableCell align="center">{row.retailerMargin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default TableView;
