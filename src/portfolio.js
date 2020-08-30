
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "FoobarTech",
  title: "Hi all, I'm Praveen Shukla",
  subTitle: emoji("A passionate Site Reliability Engineer / DevOps / Infrastructure Platform Engineer 🚀 having an experience of building platform tools to enhance developer productivity"),
  resumeLink: "https://docs.google.com/document/d/1P14yuPEInKaP4Mrg7wYpiCA_X-Csi18GQY7ptsAyp80/edit?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/achilles42",
  linkedin: "https://www.linkedin.com/in/praveen-shukla-66b52b76/",
  gmail: "praveen.shukla.c42@gmail.com",
  medium: "https://medium.com/@chaoskid",
  stackoverflow: "https://stackoverflow.com/users/3719105/praveen-shukla",
  twitter: "https://twitter.com/_praveenshukla"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "SRE / DevOps / Infrastructure platform Engineer",
  skills: [
    emoji("⚡ Develop various tools to enhance developer productivity"),
    emoji("⚡ Golang, Ruby On Rails, Kubernetes, Prometheus, Cortex, Grafana"),
    emoji("⚡ Terraform, CI/CD, Git, Shell, Docker, Chef, Helm"),
    emoji("⚡ Redis, PostgreSQL, GCP, AWS, TICK stack")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Gojek",
      companylogo: require("./assets/images/gojek.png"),
      date: "Sept 2015 – Present",
      desc: "",
      descBullets: [
      ]
    },
    {
      role: "Product Engineer",
      company: "C42 Enginering",
      companylogo: require("./assets/images/c42_logo.png"),
      date: "June 2015 – Oct 2015",
      desc: ""
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "achilles42", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to share what I have learnt.",

  blogs: [
    {
      url: "https://blog.gojekengineering.com/service-networking-in-a-hybrid-infrastructure-30030c71f6eb",
      title: "Service Networking in a Hybrid Infrastructure",
      description: "In the land of the Super App, we are working on migrating all our services and workload to Containers. We are primarily on GKE and GCE. While migrating to Containers, we faced some challenges running high throughput services. "
    },
    {
      url: "https://medium.com/@chaoskid/system-design-introduction-1e81595d1dd8",
      title: "System Design Introduction",
      description: "Ask right sets of questions when thinking about systems problem statement"
    },
    {
      url: "https://medium.com/praveen-shukl/lets-get-started-with-terraform-6dcff60457bc",
      title: "Lets Get Started with Terraform",
      description: "Terraform is an open source tool that allows you to define infrastructure for a variety of cloud providers (e.g. AWS, Azure, Google Cloud, DigitalOcean, etc) using a simple, declarative programming language and to deploy and manage that infrastructure using a few CLI commands."
    },
    {
      url: "https://medium.com/praveen-shukl/test-driven-infrastructure-with-chef-8bbdabfe7cf",
      title: "Test Driven infrastructure with chef",
      description: "Coming from the development side of the product building to DevOps expecting every line of code should have descent amount of test around it. But Traditionally, much of infrastructure is managed."
    },
    {
      url: "https://medium.com/praveen-shukl/crystal-for-rubyists-d0e6f692b6df",
      title: "Crystal for Rubyists",
      description: "Although Crystal closely resembles ruby in terms of syntax, its a different language, not another ruby implementation. The language is statically typed and compiled making it completely different from ruby."
    },
    {
      url: "https://medium.com/praveen-shukl/a-journy-from-ruby-to-golang-215e8f39d573",
      title: "A Journy From Ruby To Golang",
      description: "Golang and Ruby both are pure object oriented languages but the way they achieve OO is totally different. So let’s discuss how both languages are used in programming."
    },
    {
      url: "https://medium.com/praveen-shukl/its-about-time-56061fbda046",
      title: "It’s About Time",
      description: "It is highly important for the application which is used by different users to maintain the date and time based on geographical location in a meaningful way. For example if a user from India enters some data into the database with its own local timestamp at 5:30 a.m and at the same time a user from U.S.A want to see the data, at that time he will feel very weird because that time which is entered in the database has not arrived yet."
    },
    {
      url: "https://medium.com/praveen-shukl/the-strategy-pattern-536eb6bc0282",
      title: "The Strategy Pattern",
      description: "Strategy Pattern is one of the patterns from the behavioural category of design patterns. So we’ll start with the standard dictionary meaning of strategy after that we’ll see how it is implemented in real life scenario and then we come to practical software development code scenario to understand where exactly it is used."
    }
  ]
};

// Talks Sections

//const talkSection = {
//  title: "",
//  subtitle: emoji(""),
//  talks: [
//  ]
//};
//
// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [""]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
//  number: "+92-3243454077",
  email_address: "praveen.shukla.c42@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "_praveenshukla"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, workExperiences, openSource, blogSection, podcastSection, contactInfo , twitterDetails};
