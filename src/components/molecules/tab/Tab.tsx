import React, { ReactNode, useState } from 'react';
import Button from '../../atoms/button/Button';
import classes from './Tab.module.scss';

interface Props {
  tabs: { title: string; component: ReactNode }[];
}
const Tab: React.FC<Props> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={classes.tab_wrapper}>
      <div className={classes.tab_container}>
        {tabs?.map((tab: any, index: number) => (
          <div key={index}>
            <Button
              className={
                activeTab === index ? classes.active_btn : classes.inactive_btn
              }
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {tab.title}
            </Button>
          </div>
        ))}
      </div>
      <div className={classes.tab_content}>
        {tabs && tabs[activeTab]?.component}
      </div>
    </div>
  );
};

export default Tab;
