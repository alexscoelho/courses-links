const socialMedia = [
  {
    link: "https://twitter.com/coelhoalexs",
    name: "Twitter",
  },
  {
    link: "https://www.linkedin.com/in/alexsoncoelho/",
    name: "Linkedin",
  },
];

export const Footer = () => {
  return (
    <div className="flex items-center h-20 justify-center">
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="mr-4 text-blue-500 underline"
          target="_blank"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};
