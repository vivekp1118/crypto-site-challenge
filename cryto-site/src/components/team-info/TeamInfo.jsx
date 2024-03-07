import Header from "../common/Header";
import ProfileCard from "../common/ProfileCard";
function TeamInfo() {
  return (
    <div className="mt-8 rounded-md bg-white p-8" id="team">
      <Header heading={"Team"} />
      <p className="my-6">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <ProfileCard
        name={"John Smith"}
        picture={"/person1.jpg"}
        position={"Designation here"}
      />
      <ProfileCard
        name={"Elina Williams"}
        picture={"/person2.jpg"}
        position={"Designation here"}
      />
      <ProfileCard
        name={"John Smith"}
        picture={"/person3.jpg"}
        position={"Designation here"}
      />
    </div>
  );
}

export default TeamInfo;
