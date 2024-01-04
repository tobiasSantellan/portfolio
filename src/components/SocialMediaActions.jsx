const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com/in/tobias-s-4063aa21b/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
