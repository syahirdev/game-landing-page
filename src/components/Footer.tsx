export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto py-10 flex justify-between items-center">
      {/*Left footer*/}
      <div>
        <p>Copyright © 2022. All Rights Reserved</p>
        <div className="flex gap-x-5">
          <a href="#" className="text-nz-purple font-bold">Home</a>
          <a href="#" className="text-nz-purple font-bold">Play</a>
          <a href="#" className="text-nz-purple font-bold">Content</a>
          <a href="#" className="text-nz-purple font-bold">Shop</a>
          <div className="opacity-50">|</div>
          <a href="#" className="opacity-50">Privacy policy</a>
          <a href="#" className="opacity-50">Terms & conditions</a>
        </div>
      </div>

      {/*Right footer*/}
      <div className="flex gap-x-5">
        <p>Follow us on social media</p>
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
