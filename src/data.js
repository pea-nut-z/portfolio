export const navOptions = ["About", "Stack", "Portfolio", "Contact", "Resume"];

export const aboutMe =
  "I am a resilient and resourceful self-starter looking to break into the tech world. I smoothly transitioned from office administration to building my business as an Esthetician, and I will do that again with tech. It has been a great pleasure meeting people in the industry via LinkedIn and Meetups; We motivate each other and code together. It made me realize that not only did I fall in love with programming but also with its culture.";

export const stack = [
  "Javascript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "Jest",
  "Puppeteer",
];

export const explore = ["Ruby", "Typescript", "Python"];

export const portfolio = [
  {
    title: "Marketplace",
    image: "/marketplace.jpg",
    desc: "Best to view on a mobile device; Please see its GitHub readme on how to. A mobile and browser-compatible app pack with e-commerce functionalities - posts, filters, search engines, edits, reviews, profiles, etc.",
    stack: ["Javascript", "React Native", "Express", "Postman", "Redux", "Expo"],
    demo: "https://drive.google.com/file/d/13r3OjZL79GkNJdT6bAutL0Z8CqEVVwmH/view",
    github: "https://github.com/pea-nut-z/karrot",
    app: "https://peanutz-emarketplace.herokuapp.com/",
  },
  {
    title: "Connect Four",
    image: "/connect-four.jpg",
    desc: "A single and multiplayer game. Use the login below or create your own.",
    stack: ["Javascript", "React", "Express", "Socket.io", "Firebase", "Puppeteer"],
    demo: "https://drive.google.com/file/d/1MkOhLko22vGLN958mTbkm0QLf4dRq65f/view",
    github: "https://github.com/pea-nut-z/connect-four-app-client-server",
    app: "https://peanutz-connect-four.herokuapp.com/",
  },

  {
    title: "Typing Test",
    image: "/type-test.jpg",
    desc: "A site that tests your typing speed and accuracy. It offers different options of languages and testing time frames. Also, keyboard shortcuts for redoing and fetching new quotes are available.",
    stack: ["Javascript", "React", "Google API", "Jest"],
    demo: "https://drive.google.com/file/d/1PNma30nUL6MmBqpDdpx2gqUzDv-lTRJ0/view",
    github: "https://github.com/pea-nut-z/PeaType",
    app: "https://pea-type.herokuapp.com/",
  },
];

export const renderLoginInfo = (title) => {
  return (
    <div>
      <p>Email: test1@gmail.com</p>
      <p>Password: 123456</p>
    </div>
  );
};

export const resumeLink =
  "https://drive.google.com/file/d/1Eo6MQRovZFA1PgOPba7kPw3ZGJY0fa68/view?usp=sharing";
