import React from 'react';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
const DataTables = props => {

    return (
        <DataTable
            data={props.data} // list of objects
            colNames={props.title} //List of Strings
            colSettings={[{ name: 'name', type: COL_TYPES.STRING }, { name: 'age', type: COL_TYPES.INT }, { name: 'gender', type: COL_TYPES.STRING }]}//List of Objects
            noOfPages={props.pages} //number
            onRowSelect={(row) => {console.log('ROW => ',row)}}
               
         />
    );
}

export default DataTables;