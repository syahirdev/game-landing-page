export default function Footer() {
  return (
    <footer
      className="max-w-7xl mx-auto px-5 py-10 flex flex-col lg:flex-row justify-between items-center text-sm gap-5">
      {/*Left footer*/}
      <div className="text-center lg:text-left">
        <p className="font-normal">Copyright © 2022. All Rights Reserved</p>
        <div className="flex flex-col md:flex-row gap-x-5 mt-1">
          <a href="#" className="text-lupin-dark">Home</a>
          <a href="#" className="text-lupin-dark">Play</a>
          <a href="#" className="text-lupin-dark">Content</a>
          <a href="#" className="text-lupin-dark">Shop</a>
          <a href="#" className="text-mawheranui">Privacy policy</a>
          <a href="#" className="text-mawheranui">Terms & conditions</a>
        </div>
      </div>

      {/*Right footer*/}
      <div className="flex flex-col md:flex-row items-center gap-x-7 gap-y-3">
        <p className="text-mawheranui">Follow us on social media</p>
        <div className="flex flex-row items-center gap-x-5">
          <div>
            <img src="assets/icons/twitter.svg"/>
          </div>
          <div>
            <img src="assets/icons/facebook.svg"/>
          </div>
          <div>
            <img src="assets/icons/instagram.svg"/>
          </div>
          <div>
            <img src="assets/icons/linkedin.svg"/>
          </div>
        </div>
      </div>
    </footer>
  );
}
