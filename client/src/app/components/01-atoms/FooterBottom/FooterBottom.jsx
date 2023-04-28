function FooterBottom() {
  return (
    <div className="text-white text-center border-t border-gray-400 border-solid py-8 uppercase">
      <div className="mb-8 font-light">
        <div>© 2023 Stealthy Whiskers</div>
      </div>
      <div className="flex flex-col gap-y-4">
        <a href="/" className="text-white text-xs inline-block font-light">
          <div>Privacy Policy</div>
        </a>
        <a href="/" className="text-white text-xs inline-block font-light">
          <div>Terms &amp; Conditions</div>
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
