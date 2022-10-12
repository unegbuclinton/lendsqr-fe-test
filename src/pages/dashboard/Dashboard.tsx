import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../components/layout/dashboardLayout/DashboardLayout';
import Card from '../../components/molecules/card/Card';
import Table from '../../components/molecules/table/Table';
import { getUsers } from '../../components/utilities/fetchFunc';
import { cardDatas } from '../../utilities/CardData';
import classes from './Dashboard.module.scss';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const url =
    'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
  useEffect(() => {
    setLoading(true);

    getUsers(url).then((data) => {
      setUsers(data);
    });
    setLoading(false);
  }, []);

  console.log(users);
  return (
    <DashboardLayout>
      <>
        <h1 className={classes.dashboard_header}>Users</h1>
        <div className={classes.card_container}>
          {cardDatas.map(({ icon, text, num }, idx) => (
            <Card key={idx} icon={icon} text={text} value={num} />
          ))}
        </div>

        <Table data={users} />
      </>
    </DashboardLayout>
  );
};

export default Dashboard;
