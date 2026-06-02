const config = {
  title: "Vivek Kumar | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Vivek Kumar, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work. Let's build something amazing together!",
    short:
      "Discover the portfolio of Vivek Kumar, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Vivek Kumar",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
  ],
  author: "VIVEK KUMAR",
  email: "ehv1v3k@gmail.com",
  site: "",

  // for github stars button
  githubUsername: "ehvivek",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/ehvivek",
    linkedin: "https://www.linkedin.com/in/vivekk52/",
    instagram: "https://www.instagram.com/eh.v1v3k/",
    github: "https://github.com/ehvivek",
  },
};
export { config };
