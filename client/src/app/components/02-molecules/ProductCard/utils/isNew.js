export const isNewItem = (isNew) => {
  if (isNew) {
    return (
      <div className="flex justify-start items-center">
        <div className="">
          <div className="text-sm uppercase">New</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://assets.website-files.com/642fc428f0c0b966d5ba7a46/642fc428f0c0b989cbba7b18_tag---filled-Red(24x24)%402x.svg"
            alt=""
            className="h-[24px] ml-2"
          />
          <div className="label-text discount"></div>
        </div>
      </div>
    );
  }
  return null;
};
