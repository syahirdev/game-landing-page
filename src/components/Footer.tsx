import footer_data from "../data/footer.json";

export default function Footer() {
  return (
    <footer
      className="max-w-7xl mx-auto px-5 py-10 flex flex-col lg:flex-row justify-between items-center text-sm gap-5">
      {/*Left footer*/}
      <div className="text-center lg:text-left">
        <p className="font-normal">{footer_data.copyright}</p>
        <div className="flex flex-col md:flex-row gap-x-5 mt-1">
          {footer_data.links.map((link, index) => (
            <a key={index} href={link.url} className="text-lupin-dark">
              {link.name}
            </a>
          ))}
          {footer_data.extraLinks.map((link, index) => (
            <a key={index} href={link.url} className="text-mawheranui">
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/*Right footer*/}
      <div className="flex flex-col md:flex-row items-center gap-x-7 gap-y-3">
        <p className="text-mawheranui">Follow us on social media</p>
        <div className="flex flex-row items-center gap-x-5">
          {footer_data.socials.map((social, index) => (
            <a href={social.url} key={index}>
              <img src={social.imageUrl} alt={social.alt}/>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
