const data = [
  {
    icon: "https://i.postimg.cc/dQHgDG8P/Screen-Shot-2021-03-07-at-10-39-2.png",
    serviceName: "Silk Screening",
    category: "Talent Management System",
    description:
      "The Hype! Agency works with marketing firms to find, vet, and select staff for marking events across the United States.",
  },
  {
    icon: "https://i.postimg.cc/k4ZZYmMM/Screen-Shot-2021-03-07-at-10-39-1.png",
    companyName: "Beswick Engineering",
    category: "E-Commerce",
    description:
      "Not only was the site a redesign, but we were tasked with upgrading their e-commerce to increase the number of sales made through their website.",
  },
  {
    icon: "https://i.postimg.cc/W1JBBtqR/Screen-Shot-2021-03-07-at-10-51.png",
    companyName: "Eastern Propane & Oil",
    category: "Design evolution of the marketing site",
    description:
      "We worked closely with the internal marketing team to redesign their marketing site.",
  },
];

data.forEach((item, i) => {
  item.id = i + 1;
});

export default data;
