import AddFrom from "../../components/fast-card/addForm";

const FastCard = () => {
  return (
    <>
      <div className="dark:bg-slate-900 m-0 p-0 font-yekan">
        <div className="container h-screen flex items-center justify-center mx-auto">
          <div className="md:w-[40%] w-[90%]">
            <div className="p-4 border dark:border-slate-800 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
              <div className="w-full mb-3">
                <img
                  src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                  alt="Just a flower"
                  className="w-full h-80 object-fill rounded-xl"
                />
              </div>
              <div className=" space-y-4">
                <div className="flex flex-wrap ">
                  <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-xl font-bold ml-auto cursor-pointer text-gray-800 dark:text-gray-200 hover:text-purple-500 truncate ">
                      کفش روزمره مردانه Emery مدل 30604
                    </h2>
                    <div className="text-lg text-white dark:text-slate-700 font-semibold bg-purple-500 dark:bg-purple-300 inline-block p-1 rounded-lg">
                      299,000 تومان
                    </div>
                  </div>
                </div>
                <div>
                  <AddFrom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastCard;
