export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  liveLink?: string;
  price?: string;
  oldPrice?: string;
  Project?: string;
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
 
  
  {
    layout: "2x2",
    type: "social",
    title: "Github",
    // icon: "github",
    username: "@VaibhavTiw",
    // buttonTitle: "Follow",
    
    buttonLink: "https://github.com/VaibhavTiw",
    color: "#1DA1F2",
    description:
      "Coordinator at IoT Lab, KIIT || Enthusiastic tech geek || Aspiring Software Developer || DevOps || Project Management",
  },

  {
    layout: "2x2",
    type: "social",
    title: "Portfolio Website",
    username: "amaanbhati.tech",
    buttonLink: "Coming Soon",
    color: "#1DA1F2",
    description:
      "Still in development phase.",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Linkedin",
    username: "@amaan-bhati",
    description:
      "CSE'25 || Coordinator at IoT Lab, KIIT ||",
    color: "#1DA1F2",
    buttonLink: "https://www.linkedin.com/in/vaibhav-tiw/",
  },
 
 
  
  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    username: "@amaanbhatiii",
    color: "#1DA1F2",
    buttonLink: "https://instagram.com/vaibhav_tiw",
    // description: "Keeps me connected with family and friends while we share memes and reels only to waste time in the name of relaxing ourselves.",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    username: "@front_end_er",
    buttonLink: "https://x.com/Vaibhav_Tiw",
    color: "#1DA1F2",
    // description:
      // "Tech twitter is what keeps me updated with modern tech stacks and also keeps me entertained with technical memes and discussions.",
  },
 

  // {
  //   layout: "1x2",
  //   type: "social",
  //   title: "Youtube",
  //   username: "@amaan-bhati",
  //   buttonLink: "https://youtu.be/xvFZjo5PgG0?si=oroLylgt6dbhY8WQ",
  //   color: "#1DA1F2",
  // },

  {
    layout: "1x2",
    type: "social",
    title: "Spotify work mode playlist",
    buttonLink: " https://open.spotify.com/playlist/04DEjJ6oWgthgqYpFa9ULX?si=Vxw4f0-XRmCcuUpao1bNkQ&pi=EV3W6r_2RE6sW&nd=1&dlsi=65725a32417046df",
    color: "#1DA1F2",
    description:
      "My very own Spotify playlist with a bunch of songs that I listen to while writing code to bring the best out of my productivity.  ",
  },
 
  {
    layout: "2x4",
    type: "equipment",
    title: "SKILLS AND TOOLS",
    image: "/image.png",
    equipments: [
      {
        title: "HTML/CSS",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "Javascript",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "Spring Boot",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "ReactJS",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "Python",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "Java",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "AWS",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "DevOps",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "Data Structures",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "Firebase",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "OpenCv",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "SQL",
        link: "https://github.com/VaibhavTiw",
      },
      {
        title: "C++",
        link: "https://github.com/VaibhavTiw",
      },
    ],
  },


  {
    layout: "2x2",
    type: "social",
    title: "Check out my Projects",
    buttonLink: "https://github.com/VaibhavTiw",
    color: "#1DA1F2",
    description:
      "Visit my github to view my projects accross multiple domains using various tech stacks. From basic to advanced, all at one place.",
      
  },

  {
    layout: "2x2",
    type: "social",
    title: "Blog Website",
    username: "",
    buttonLink: "Coming Soon",
    color: "#1DA1F2",
    description:
      "I love to rant. Hence, I write blogs on various topics that I find interesting. Visit my blog to read my thoughts on various topics. Website is made using Wordpress.",
  },

  
  


 
  {
    layout: "2x2",
    type: "social",
    title: "Make sure you visit again",
    color: "#1DA1F2",
    description:
      "I designed this website while exploring NextJS. I hope you liked it. Make sure you visit again to check out new updates and projects that I'll be working on.",
      
  },
];



export const siteConfig = {
  creator: "Vaibhav Tiwari",
  title: "Web/Software Developer",
  
  bio: "Final-year Computer Science and Engineering student at Kalinga Institute of Industrial Technology, passionate about technology and problem-solving. Adept at combining technical expertise with strong communication and teamwork skills, honed through successful leadership initiatives throughout the college journey.",
  location: "Download Resume",
  
  email: "vaibhav.tiw543@gmail.com",
  items: GridItems,
  
} as const;

