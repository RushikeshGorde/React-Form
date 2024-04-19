import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { multiStepContext } from '../StepContext';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Styling for PDF document
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
//   section: {
//     marginBottom: 10,
//   },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});

export default function PreviewData() {
  const { userData, submitData } = useContext(multiStepContext);

  // PDF document component
  const PDFDocument = (
    <Document>
      <Page size="A5" style={styles.page}>
        <View style={styles.section}>
          <Text>Personal Details</Text>
          <br />
          <Image src={userData.profile} style={styles.image} />
          <Text>First Name: {userData.firstname}</Text>
          <Text>Middle Name: {userData.middlename}</Text>
          <Text>Last Name: {userData.lastname}</Text>
          <Text>Mobile: {userData.mobile}</Text>
          <Text>Email: {userData.email}</Text>
        </View>
        <View style={styles.section}>
          <Text>Address Details</Text>
          <br />
          <Text>Address: {userData.address}</Text>
          <Text>Postal Code: {userData.postalcode}</Text>
          <Text>State: {userData.state}</Text>
          <Text>Country: {userData.country}</Text>
        </View>
        <View style={styles.section}>
          <Text>Education Details</Text>
          <br />
          <Text>Qualification: {userData.yourQualification}</Text>
          <Text>Stream: {userData.yourStream}</Text>
          <Text>Institute Name: {userData.instituteName}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className='perdet three'>
      <h2 className='text-center'>Preview Data</h2>
      {/* Display PDF in a PDF viewer */}
      <PDFViewer width="50%" height={600}>
        {PDFDocument}
      </PDFViewer>
      <br />
      {/* Download button for the PDF */}
      <br />
      <button className='pd btn btn-outline-dark'>

      <PDFDownloadLink document={PDFDocument} fileName="UserData.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
      </button>
     
    </div>
  );
}


// import React, { useContext } from 'react';
// import { Button } from '@mui/material';
// import { multiStepContext } from '../StepContext';

// export default function PreviewData() {
//     const { userData, submitData } = useContext(multiStepContext);

//     return (
//         <div>
//             <h2>Preview Data</h2>
//             <div>
//                 <h3>Personal Details</h3>
//                 {/* Check if userData.profile is correctly set */}
//                 {userData.profile && <img src={userData.profile} alt="Profile" />} 
//                 {/* Display the image if userData.profile is not empty */}
//                 <p><strong>First Name:</strong> {userData.firstname}</p>
//                 <p><strong>Middle Name:</strong> {userData.middlename}</p>
//                 <p><strong>Last Name:</strong> {userData.lastname}</p>
//                 <p><strong>Mobile:</strong> {userData.mobile}</p>
//                 <p><strong>Email:</strong> {userData.email}</p>
//             </div>
//             <div>
//                 <h3>Address Details</h3>
//                 <p><strong>Address:</strong> {userData.address}</p>
//                 <p><strong>Postal Code:</strong> {userData.postalcode}</p>
//                 <p><strong>State:</strong> {userData.state}</p>
//                 <p><strong>Country:</strong> {userData.country}</p>
//             </div>
//             <div>
//                 <h3>Education Details</h3>
//                 <p><strong>Qualification:</strong> {userData.yourQualification}</p>
//                 <p><strong>Stream:</strong> {userData.yourStream}</p>
//                 <p><strong>Institute Name:</strong> {userData.instituteName}</p>
//             </div>
//             <Button variant="contained" onClick={() => setStep(3)} color="secondary">Edit</Button>
//             <Button variant="contained" onClick={submitData} color="primary">Submit</Button> {/* Fix the typo in "variant" */}
//         </div>
//     );
// }


// import React, { useContext } from 'react';
// import { Button } from '@mui/material';
// import { multiStepContext } from '../StepContext';

// export default function PreviewData() {
//     const { userData, submitData } = useContext(multiStepContext);

//     return (
//         <div>
//             <h2>Preview Data</h2>
//             <div>
//                 <h3>Personal Details</h3>
//                 {/* Ensure that userData.profile contains the correct image URL or base64 encoded data */}
//                 <img src={userData.profile} alt="Profile" style={{height:'50px',width:'50px'}} /> {/* Check if userData.profile is correct */}
//                 <p><strong>First Name:</strong> {userData.firstname}</p>
//                 <p><strong>Middle Name:</strong> {userData.middlename}</p>
//                 <p><strong>Last Name:</strong> {userData.lastname}</p>
//                 <p><strong>Mobile:</strong> {userData.mobile}</p>
//                 <p><strong>Email:</strong> {userData.email}</p>
//             </div>
//             <div>
//                 <h3>Address Details</h3>
//                 <p><strong>Address:</strong> {userData.address}</p>
//                 <p><strong>Postal Code:</strong> {userData.postalcode}</p>
//                 <p><strong>State:</strong> {userData.state}</p>
//                 <p><strong>Country:</strong> {userData.country}</p>
//             </div>
//             <div>
//                 <h3>Education Details</h3>
//                 <p><strong>Qualification:</strong> {userData.yourQualification}</p>
//                 <p><strong>Stream:</strong> {userData.yourStream}</p>
//                 <p><strong>Institute Name:</strong> {userData.instituteName}</p>
//             </div>
//             <Button variant="contained" onClick={() => setStep(3)} color="secondary">Edit</Button>
//             <Button variant="contained" onClick={submitData} color="primary">Submit</Button> {/* Fix the typo in "variant" */}
//         </div>
//     );
// }
