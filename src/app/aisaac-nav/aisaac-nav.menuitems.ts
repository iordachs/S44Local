import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faCalendarCheck,
  faChartLine,
  faChartPie,
  faClipboardCheck,
  faClipboardList,
  faClipboardQuestion,
  faClockRotateLeft,
  faDatabase,
  faDesktop,
  faFileLines,
  faGear,
  faGears,
  faListCheck,
  faListUl,
  faMagnifyingGlassChart,
  faNetworkWired,
  faScrewdriverWrench,
  faShieldHalved,
  faSliders,
  faTags,
  faUserShield,
  faUsersGear,
} from '@fortawesome/free-solid-svg-icons';

export const menuItems: (
  | {
      id: number;
      name: string;
      icon: IconDefinition;
      url: string;
      children?: never;
    }
  | {
      id: number;
      name: string;
      icon: IconDefinition;
      children: {
        id: number;
        name: string;
        icon: IconDefinition;
        url: string;
      }[];
      url?: never;
    }
)[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: faChartPie,
    url: '/dashboard',
  },
  {
    id: 2,
    name: 'Scans',
    icon: faMagnifyingGlassChart,
    children: [
      {
        id: 201,
        name: 'Listing',
        icon: faListUl,
        url: '/scans/listing',
      },
    ],
  },
  {
    id: 3,
    name: 'Tests',
    icon: faClipboardList,
    children: [
      {
        id: 301,
        name: 'Listing',
        icon: faListUl,
        url: '/tests/listing',
      },
      {
        id: 302,
        name: 'Repositories',
        icon: faDatabase,
        url: '/tests/repositories',
      },
    ],
  },
  {
    id: 4,
    name: 'Triage',
    icon: faShieldHalved,
    children: [
      {
        id: 401,
        name: 'Listing',
        icon: faListUl,
        url: '/triage/listing',
      },
      {
        id: 402,
        name: 'Configuration',
        icon: faSliders,
        url: '/triage/configuration',
      },
    ],
  },
  {
    id: 5,
    name: 'Remediation',
    icon: faClipboardCheck,
    children: [
      {
        id: 501,
        name: 'Ticket Listing',
        icon: faListUl,
        url: '/remediation/listing',
      },
      {
        id: 502,
        name: 'Configuration',
        icon: faSliders,
        url: '/remediation/configuration',
      },
    ],
  },
  {
    id: 6,
    name: 'SAQ',
    icon: faClipboardQuestion,
    children: [
      {
        id: 601,
        name: 'Manage SAQ',
        icon: faListCheck,
        url: '/SAQ/listing',
      },
      {
        id: 602,
        name: 'Configuration',
        icon: faSliders,
        url: '/SAQ/configuration',
      },
    ],
  },
  {
    id: 7,
    name: 'Consolidated Reports',
    icon: faFileLines,
    children: [
      {
        id: 701,
        name: 'Analytics',
        icon: faChartLine,
        url: '/reports/analytics',
      },
      {
        id: 702,
        name: 'Scheduled Reports',
        icon: faCalendarCheck,
        url: '/reports/scheduled',
      },
      {
        id: 703,
        name: 'Configuration',
        icon: faSliders,
        url: '/reports/configuration',
      },
      {
        id: 704,
        name: 'SAQ',
        icon: faClipboardQuestion,
        url: '/reports/SAQ',
      },
    ],
  },
  {
    id: 8,
    name: 'Assets',
    icon: faDesktop,
    children: [
      {
        id: 801,
        name: 'Listing',
        icon: faListUl,
        url: '/assets/listing',
      },
      {
        id: 802,
        name: 'Tags',
        icon: faTags,
        url: '/assets/tags',
      },
      {
        id: 803,
        name: 'Configuration',
        icon: faSliders,
        url: '/assets/configuration',
      },
      {
        id: 804,
        name: 'Device Types',
        icon: faNetworkWired,
        url: '/assets/devicetypes',
      },
    ],
  },
  {
    id: 9,
    name: 'Administration',
    icon: faGears,
    children: [
      {
        id: 901,
        name: 'Companies',
        icon: faUsersGear,
        url: '/administration/companies',
      },
      {
        id: 902,
        name: 'Roles',
        icon: faUserShield,
        url: '/administration/roles',
      },
      {
        id: 903,
        name: 'Tools & Scans Configuration',
        icon: faScrewdriverWrench,
        url: '/administration/tsconfiguration',
      },
      {
        id: 904,
        name: 'Notifications',
        icon: faBell,
        url: '/administration/notifications',
      },
      {
        id: 905,
        name: 'Event Logs',
        icon: faClockRotateLeft,
        url: '/administration/eventlogs',
      },
      {
        id: 906,
        name: 'Settings',
        icon: faGear,
        url: '/administration/settings',
      },
    ],
  },
];
