const positions = [
  {
    company: 'Google | Android',
    position: 'Software Engineer',
    link: 'https://source.android.com/devices/contexthub',
    daterange: 'June 2019 - Present',
    points: [
      {
        point:
          'Worked on the Android Contexthub Rumtime Environment (CHRE) and '
              + 'Sensors team',
      },
      {
        point:
          'Developed a sensors hardware abstraction layer (HAL) framework in '
              + 'C++ that allows multiple partners too write HALs that work '
              + 'seamlessly with each other',
        subpoints: [
          'Built in such a way to extend existing HAL interface and make it '
              + 'thread-safe',
          'Improved performance by removing interprocess communication '
          + 'between partners',
        ],
      },
      {
        point:
        'Designed and developed a testing framework in Java that validates '
        + 'sensor data received from my team\'s chipset by cross referencing '
        + 'data from the main application chipset',
      },
      {
        point:
          'Designed and implemented a library to buffer logs from the '
          + 'contexthub to the main processor when the hub loses connection',
        subpoints: [
          'Enabled debugging of ealry stage boot errors while system was'
          + 'still unstable',
        ],
      },
      {
        point:
        'Created a Python script which parses binary images to ensure that '
        + 'only certain allowed symbols are being linked against',
        subpoints: [
          'Ensures that other teams do not create dependencies to banned APIs',
        ],
      },
      {
        point:
          'Implemented platform dependent features in C++ for a new chipset'
          + 'for CHRE',
      },
      {
        point:
          'Managed code changes across a large code base with numerous'
          + 'nested git projects with dependencies between most of them',
      },
    ],
  },
  {
    company: 'ServiceNow',
    position: 'Software Engineering Intern',
    link: 'https://servicenow.com/',
    daterange: 'June 2018 - Aug 2018',
    points: [
      {
        point:
          'Developed a customer success application with a team of 4 other '
          + 'sofware engineer interns and a PM intern',
      },
      {
        point:
          'Designed a rest API and DB schema that captures time series '
          + 'data and aggregates it',
      },
      {
        point:
          'Created server-side JS scripts and frontend React that fit into a '
          + 'larger platform',
      },
    ],
  },
  {
    company: 'University of Michigan | Computer Aided Engineering Network',
    position: 'Web Devoloper',
    link: 'https://caen.engin.umich.edu',
    daterange: 'Jan. 2017 - Jan. 2019',
    points: [
      {
        point:
          'Developed Python Flask web apps for the CoE that automated '
          + 'processes such as software licensing requests/management',
      },
      {
        point:
          'Implemented my own open source testing framework flask-eztest and '
          + 'used it to test the most used faculty web application for QA',
      },
    ],
  },
  {
    company: 'Nexteer Automotive',
    position: 'Software Engineer Intern',
    link: 'https://nexteer.com',
    daterange: 'May 2017 - July 2017',
    points: [
      {
        point:
          'Developed in-house Android mobile application that assists '
          + 'engineers in reading diagnostic data from steering '
          + 'micro-controllers',
      },
    ],
  },
];

export default positions;
