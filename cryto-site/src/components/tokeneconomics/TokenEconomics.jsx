import Header from "../common/Header";
import tokennomicsSvg from "../../assets/tokenomics.svg";
function Tokenomics() {
  return (
    <div className="mt-8 rounded-md bg-white p-8">
      <Header heading={"Tokenomics"} />
      <h2 className="my-8 text-xl font-semibold">Initial Distribution</h2>

      <div className="mb-6 flex items-center justify-start gap-6 space-x-2">
        <img src={tokennomicsSvg} height={"120px"} width={"120px"}></img>

        <div className=" flex flex-col items-start justify-start space-y-2">
          <div className="flex items-center justify-center space-x-1">
            <div className="mr-3 h-3 w-3 rounded-full bg-blue-500"></div>
            <p className="text-lg">Crowdsale investors: 80%</p>
          </div>

          <div className="flex items-center justify-center space-x-1">
            <div className="mr-3 h-3 w-3 rounded-full bg-yellow-400"></div>
            <p className="text-lg">Foundation: 20%</p>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
}

export default Tokenomics;
