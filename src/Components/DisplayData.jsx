import React, { useContext } from 'react'
import { TableContainer,TableHead,TableBody,TableCell,TableRow,Table } from '@mui/material'
import { multiStepContext } from '../StepContext'

export default function DisplayData() {
    const {finalData}=useContext(multiStepContext);
    // localStorage.setItem('finalData', JSON.stringify(finalData))
  return (
    <div>
      <TableContainer style={{display:'flex', justifyContent:'center'}}>
        <Table border="1" style={{width:'90%',justifyContent:'center'}}>
            <TableHead>
                <TableRow style={{backgroundColor:'burlywood',color:'aliceblue'}}>
                    <TableCell>Profile Picture</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Midle Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>PostalCode</TableCell>
                    <TableCell>State</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Qualification</TableCell>
                    <TableCell>Stream</TableCell>
                    <TableCell>Institute</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {finalData.map(data=>(
                    <TableRow key={data.email}>
                        <TableCell>{data.profile}</TableCell>
                        <TableCell>{data.firstname}</TableCell>
                        <TableCell>{data.midlename}</TableCell>
                        <TableCell>{data.lastname}</TableCell>
                        <TableCell>{data.address}</TableCell>
                        <TableCell>{data.postalcode}</TableCell>
                        <TableCell>{data.state}</TableCell>
                        <TableCell>{data.country}</TableCell>
                        <TableCell>{data.yourQualification}</TableCell>
                        <TableCell>{data.yourStream}</TableCell>
                        <TableCell>{data.instituteName}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}





// import React, { useContext, useEffect } from 'react';
// import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table } from '@mui/material';
// import { multiStepContext } from '../StepContext';

// export default function DisplayData() {
//     const { finalData, setFinalData } = useContext(multiStepContext);

//     // Retrieve finalData from localStorage when the component mounts
//     useEffect(() => {
//         const dataFromLocalStorage = localStorage.getItem('finalData');
//         if (dataFromLocalStorage) {
//             setFinalData(JSON.parse(dataFromLocalStorage));
//         }
//     }, [setFinalData]);

//     return (
//         <div>
//             <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
//                 <Table border="1" style={{ width: '90%', justifyContent: 'center' }}>
//                     <TableHead>
//                         <TableRow style={{ backgroundColor: 'burlywood', color: 'aliceblue' }}>
//                             <TableCell>Profile Picture</TableCell>
//                             <TableCell>First Name</TableCell>
//                             <TableCell>Middle Name</TableCell>
//                             <TableCell>Last Name</TableCell>
//                             <TableCell>Address</TableCell>
//                             <TableCell>Postal Code</TableCell>
//                             <TableCell>State</TableCell>
//                             <TableCell>Country</TableCell>
//                             <TableCell>Qualification</TableCell>
//                             <TableCell>Stream</TableCell>
//                             <TableCell>Institute</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {finalData.map(data => (
//                             <TableRow key={data.email}>
//                                 <TableCell>{data.profile}</TableCell>
//                                 <TableCell>{data.firstname}</TableCell>
//                                 <TableCell>{data.midlename}</TableCell>
//                                 <TableCell>{data.lastname}</TableCell>
//                                 <TableCell>{data.address}</TableCell>
//                                 <TableCell>{data.postalcode}</TableCell>
//                                 <TableCell>{data.state}</TableCell>
//                                 <TableCell>{data.country}</TableCell>
//                                 <TableCell>{data.yourQualification}</TableCell>
//                                 <TableCell>{data.yourStream}</TableCell>
//                                 <TableCell>{data.instituteName}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// }

