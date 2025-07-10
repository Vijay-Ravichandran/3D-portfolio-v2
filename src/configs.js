import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: ' Immerse yourself',
  subTitle: 'into my portfolio.',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Building immersive web experiences from frontend to backend.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: "It's me !",
      infos: [ 
        "* Transitioned From Project Management to Software Development. ",
        "* Former Associate Project Co-Ordinator | Certified Scrum Master",
        "* I'm now channeling my skills into Web development, building both robust backend systems and dynamic frontends.",
        "* My drive is to create compelling, scalable immersive applications, applying continuous learning and hands-on experience to deliver real-world impact.",
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'Tap the first logo to explore my present company.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1_zBzKTuFgl-rJQhg2p8jM_VgNzNvBwqB/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 1,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/duetlogo.png',
            websiteURL: 'https://duetvr.com/',
          },
          {
            url: 'websites-preview/Capture.JPG',
            websiteURL: 'https://drive.google.com/file/d/1s9WS_6zVNQLg5yVUZODf-MYc74iwEurY/view?usp=sharing',
          },
          {
            url: 'websites-preview/ARRi.png',
            websiteURL:'https://arr.mindwox.com/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 1],
      title: 'You can reach out me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 1,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/linkedin.png',
            websiteURL: 'https://www.linkedin.com/in/vijayaragavanr2',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/Vijay-Ravichandran',
          },
        ],
      },
    },
  ],
};

export default configs;
