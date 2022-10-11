import React from 'react';
import DashboardLayout from '../../components/layout/dashboardLayout/DashboardLayout';
import Card from '../../components/molecules/card/Card';
import { cardDatas } from '../../utilities/CardData';
import classes from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <>
        <h1 className={classes.dashboard_header}>Users</h1>
        <div className={classes.card_container}>
          {cardDatas.map(({ icon, text, num }, idx) => (
            <Card key={idx} icon={icon} text={text} value={num} />
          ))}
        </div>
      </>
    </DashboardLayout>
  );
};

export default Dashboard;
