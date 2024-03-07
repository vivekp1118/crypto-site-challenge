function ProfileCard({ picture, name, position }) {
  return (
    <div className="my-4  flex w-full flex-col items-center justify-center rounded-lg bg-blue-100 p-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <div className="flex h-32 w-32 flex-col items-center justify-center gap-1">
        <div className="mx-3 h-36 w-24 overflow-hidden rounded-md">
          <img
            src={`${picture}`}
            alt="img"
            style={{ width: "6.3", height: "6.5" }}
          />{" "}
        </div>
        <h2 className="text-sm font-semibold leading-6">{name}</h2>
        <span className="text-xs leading-tight">{position}</span>
      </div>
      <p className="mt-4 text-sm">
        Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
        fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
        nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque
        sed pellentesque viverra. Consectetur proin amet ut id facilisi quis
        consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est
        ipsum. Malesuada etiam mi gravida praesent interdu
      </p>
    </div>
  );
}

export default ProfileCard;
