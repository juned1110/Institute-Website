const Course = () => {
  return (
    <div className="w-full py-20 bg-[#F1F1F1]">
      <div className="w-full, px-20 border-b-[1px] pb-14 border-zinc-100">
        <h1 className="text-6xl font-semibold font-['NeueMontreal-Regular'] tracking-tight ">
          Courses
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10 ">
          <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden flex justify-center items-center  ">
            <div className="card w-full h-full rounded-xl bg-[#B9B9BA] flex justify-center items-center  ">
              <img
                className=" bg-cover w-1/2 h-[37.5vh] 0 "
                src="src/components/html.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[#CDEA68] absolute overflow-hidden leading-none tracking-tighter text-8xl left-[41vw] top-[235vh] ">
            {"HTML".split("").map((item, index) => (
              <span className="inline-block ">{item}</span>
            ))}
          </h1>
          <h1 className="text-[#CDEA68] absolute flex overflow-hidden leading-none tracking-tighter text-8xl left-[43vw] top-[235vh] ">
            {"CSS".split("").map((item, index) => (
              <span className="inline-block ">{item}</span>
            ))}
          </h1>
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden flex justify-center items-center ">
            <div className="card w-full h-full rounded-xl bg-[#19181E] flex justify-center items-center">
              <img
                className="w-1/2 h-[37.5vh] bg-cover"
                src="src/components/css.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-10 ">
          <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden ">
            <div className="card w-full h-full rounded-xl bg-[#B9B9BA] flex justify-center items-center  ">
              <img
                className=" bg-cover w-1/2 h-[37.5vh] 0 "
                src="src/components/javascript.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[#CDEA68] absolute leading-none tracking-tighter text-8xl left-[35vw] top-[315vh]">
            {"JavaScript".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden ">
            <div className="card w-full h-full rounded-xl bg-[#19181E] flex justify-center items-center">
              <img
                className="w-1/2 h-[37.5vh] bg-cover"
                src="src/components/python.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[#CDEA68] absolute leading-none tracking-tighter text-8xl left-[35vw] top-[315vh]">
            {"Python".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
        </div>
        <div className="cards w-full flex gap-10 mt-10 ">
          <div className="cardcontainer relative w-1/2 h-[75vh] overflow-hidden ">
            <div className="card w-full h-full rounded-xl bg-[#B9B9BA] flex justify-center items-center  ">
              <img
                className=" bg-cover w-1/2 h-[37.5vh] 0 "
                src="src/components/react.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[#CDEA68] absolute leading-none tracking-tighter text-8xl right-[40vw] top-[395vh]">
            {"ReactJs".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
          <div className="cardcontainer rounded-xl w-1/2 h-[75vh] overflow-hidden ">
            <div className="card w-full h-full rounded-xl bg-[#19181E] flex justify-center items-center">
              <img
                className="w-1/2 h-[37.5vh] bg-cover"
                src="src/components/nodejs.png"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[#CDEA68] absolute leading-none tracking-tighter text-8xl right-[40vw] top-[395vh]">
            {"NodeJs".split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Course;
