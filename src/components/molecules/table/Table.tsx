import React, { ReactNode } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DPIconMoreIcon } from '../../../icons';
import { formatDate } from '../../utilities/dateFormat';
import TableHeader from '../tableheadercomponent/TableHeader';
import classes from './Table.module.scss';

interface DataRow {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: number;
  createdAt: number;
  status: ReactNode;
}

interface Data {
  data: any;
}
const columns: TableColumn<DataRow>[] = [
  {
    name: <TableHeader text="ORGANISATION" />,
    selector: (row) => row.orgName,
    width: '10.8rem',
  },
  {
    name: <TableHeader text="USERNAME" />,
    selector: (row) => row.userName,
    width: '9rem',
  },
  {
    name: <TableHeader text="EMAIL" />,
    selector: (row) => row.email,
    width: '10.8rem',
  },
  {
    name: <TableHeader text="PHONE" />,
    selector: (row) => row.phoneNumber,
    width: '12rem',
  },
  {
    name: <TableHeader text="DATE JOINED" />,
    selector: (row) => formatDate(row.createdAt),
    width: '10rem',
  },
  {
    name: <TableHeader text="STATUS" />,
    cell: (row) => row.status,
  },
  {
    name: '',
    cell: (row) => <DPIconMoreIcon />,
  },
];

const Table: React.FC<Data> = ({ data }) => {
  return (
    <div className={classes.table_wrapper}>
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
};

export default Table;
