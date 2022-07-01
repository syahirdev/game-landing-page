export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-10 flex justify-between items-center text-sm">
      {/*Left footer*/}
      <div>
        <p className="font-normal">Copyright © 2022. All Rights Reserved</p>
        <div className="flex gap-x-5 mt-1">
          <a href="#" className="text-lupin-dark">Home</a>
          <a href="#" className="text-lupin-dark">Play</a>
          <a href="#" className="text-lupin-dark">Content</a>
          <a href="#" className="text-lupin-dark">Shop</a>
          <div className="opacity-50">|</div>
          <a href="#" className="text-mawheranui">Privacy policy</a>
          <a href="#" className="text-mawheranui">Terms & conditions</a>
        </div>
      </div>

      {/*Right footer*/}
      <div className="flex gap-x-5">
        <p className="text-mawheranui">Follow us on social media</p>
        <div className="flex gap-x-3">
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}
