import {
  DPIconDecision,
  DPIconGuarantor,
  DPIconKarmaLogo,
  DPIconLoanRquest,
  DPIconPiggyBank,
  DPIconSack,
  DPIconUser,
  DPIconWhiteList,
} from '../icons/index';

export const SidebarContent = [
  {
    route: '/dashboard',
    icon: <DPIconUser />,
    text: 'User',
  },
  {
    route: '/guarantor',
    icon: <DPIconGuarantor />,
    text: 'Guarantors',
  },
  {
    route: '/campaign',
    icon: <DPIconSack />,
    text: 'Loans',
  },
  {
    route: '/decision',
    icon: <DPIconDecision />,
    text: 'Decision Models',
  },
  {
    route: '/savings',
    icon: <DPIconPiggyBank />,
    text: 'Savings',
  },
  {
    route: '/loan-request',
    icon: <DPIconLoanRquest />,
    text: 'Loan Requests',
  },
  {
    route: '/white-list',
    icon: <DPIconWhiteList />,
    text: 'Whitelist',
  },
  {
    route: '/karma',
    icon: <DPIconKarmaLogo />,
    text: 'Karma',
  },
];
