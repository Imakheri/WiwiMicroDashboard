import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { getAll } from "../actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import './styles/Table.css'

const customStyles = {
     rows: {
         style:{
             background: '#f8f8f8'
         }
     },
     headCells: {
         style: {
             fontSize:'20px',
             cursor: 'move'
         }
     }
 }

const columnas = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true
    },
    {
        name: 'Mac',
        selector: 'mac',
        sortable: true
    },
    {
        name: 'Nodo',
        selector: 'nodo',
        sortable: true
    },
    {
        name: 'Disparo',
        selector: 'disparo',
        sortable: true
    },
    {
        name: 'Fecha y hora',
        selector: 'fecha',
        sortable: true
    },
]


const Table = () => {

    const dispatch = useDispatch();
    const allData = useSelector((state) => state.all)
    
    useEffect(() => {
        dispatch(getAll())
    },[])

    return (
        <div className='conten'>
            <div className='titulo'>
                <h2>Interacciones totales (01-01-2022)</h2>
            </div>
            <div className="table-responsive">
                <DataTable 
                    columns={columnas}
                    data={allData}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight='750px'
                    customStyles={customStyles}
                    />
            </div>
        </div>
    )
}

export default Table;