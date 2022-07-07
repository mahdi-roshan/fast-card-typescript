import AddFrom from "./addForm";

const InfoSection = (props: any) => {
  console.log(props);
  const { title, price, discountPrice, mainPicture } = props.shopsProduct;
  const { feature } = props;
  return (
    <>
      <div className="md:w-[40%] w-[90%]">
        <div className="p-4 border dark:border-slate-800 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
          <div className="w-full mb-3">
            <img
              src={`http://cdn.dayan.shop/${mainPicture}`}
              alt="Just a flower"
              className="w-full h-80 object-fill rounded-xl"
            />
          </div>
          <div className=" space-y-4">
            <div className="flex flex-wrap ">
              <div className="flex items-center w-full justify-between min-w-0 ">
                <h2 className="text-xl font-bold ml-auto cursor-pointer text-gray-800 dark:text-gray-200 hover:text-purple-500 truncate ">
                  {title}
                </h2>
                <div className="">
                  <span
                    className={`${
                      discountPrice !== 0
                        ? "line-through text-xl text-white block p-1"
                        : "text-xl text-white inline-block p-1"
                    }`}
                  >
                    {`${(price / 10).toLocaleString()} تومان`}
                  </span>
                  {discountPrice !== 0 ? (
                    <span className="text-xl text-green-500 inline-block">
                      {`${(discountPrice / 10).toLocaleString()} تومان`}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div>
              <AddFrom feature={feature}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
