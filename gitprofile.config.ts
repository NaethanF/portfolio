// gitprofile.config.ts a

const CONFIG = {
  github: {
    username: 'NaethanF', // Your GitHub org/user name. (This is the only required config)
  },

  summary: {
  title: 'About Me',
  body: 'I am a Computer Engineering graduate from UC Irvine focused on embedded systems and PCB design using Altium Designer, with an emphasis on hardware development. I also apply programming skills across software systems for firmware development, hardware interfacing, and system control using C/C++ and Python. I have experience developing designs and seeing them through to completed builds. Currently, I work with avionics hardware in a fast-paced production environment, supporting electrical fabrication, integration, verification, and system-level testing.\n\n' +
        'I value doing work thoroughly and learning through building and testing rather than just getting something done. I am comfortable learning new systems quickly, adapting to changing requirements, and collaborating across disciplines to move projects forward. Clear communication and coordination are an important part of how I approach technical work.'

  },


  
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'UCI CanSat, Atmospheric Probe',
          description:
            'As part of UCI\'s CanSat team for the 2025 National Student Space Competition, I served on the electrical subteam responsible for developing a telemetry-based atmospheric probe launched via rocket to 700 meters. We designed a custom PCB in Altium that included power regulation, sensor interfaces, and telemetry circuitry, and assembled the board by soldering SMD components for system integration. I performed test validation using a multimeter and oscilloscope, documented results, and diagnosed electrical and communication issues. We\'ve also developed a Python-based ground station that communicated with the onboard STM32 microcontroller via UART using XBee modules.',
          
          imageUrls: [
            'https://i.imgur.com/aMrdSqC.png',
            'https://i.imgur.com/N27xUHK.jpeg',
            ],
          link: 'https://docs.google.com/presentation/d/19ivVNNwkG5UCK_Q2B89-NhDH6ovsr8RY/edit?slide=id.p1#slide=id.p1',
        },
        {
          title: 'e-Human Powered Vehicle Competition, Electric Rocumbent Bicycle',
          description:
            'As part of UCI\'s ASME eHPVC team, I contributed to the electrical subteam in developing the electronics for an electric-assisted recumbent bicycle. We designed a motor control and power distribution circuit powered by a 48V, 10Ah battery with overcurrent protection, used to drive a 500W mid-drive motor. To support system functionality, I programmed the onboard microcontroller to process real-time data from hall effect sensors for speed and cadence, control lighting and signaling via GPIO and PWM, and implement thermal-based battery protection. An LCD was integrated to display live rider metrics during operation. To ensure reliability, I conducted thermal validation and battery performance testing under load. Custom wire harnesses were routed and assembled to connect all electrical subsystems securely across the bike frame.',
          imageUrls: [
            'https://i.imgur.com/KOKoZTA.jpeg',
            'https://i.imgur.com/Onm8VSb.jpeg',
            ],
          link: 'https://docs.google.com/presentation/d/1nrqD4Cpm3vBgDti1VYYca4P_vcLO7NBy6WaoXw6-h2Y/edit?slide=id.p#slide=id.p',
        },
      ],
    },
  },
  seo: { title: 'Naethan Fajarito\'s Portfolio', description: '', imageURL: '' },
  social: {
    linkedin: 'naethanf2001',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '+1-714-362-4195',
    email: 'nfajarit1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.

  enablePWA: true,
};

export default CONFIG;
