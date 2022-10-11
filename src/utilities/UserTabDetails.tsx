import { ReactNode } from 'react';
import EmptyState from '../components/molecules/emptystate/EmptyState';
import UserInfo from '../components/molecules/userinfocard/UserInfo';

export const userTabs: { title: string; component: ReactNode }[] = [
  { title: 'General Details', component: <UserInfo /> },
  { title: 'Documents', component: <EmptyState /> },
  { title: 'Bank Details', component: <EmptyState /> },
  { title: 'Bank Details', component: <EmptyState /> },
  { title: 'Savings', component: <EmptyState /> },
  { title: 'App and System', component: <EmptyState /> },
];
