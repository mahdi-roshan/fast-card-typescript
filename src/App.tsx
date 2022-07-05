
function App() {
  return (
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
              {/* title */}
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
              {/* price */}

              {/* info fields*/}
              <div>
                <form>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200"
                      >
                        ویژگی
                      </label>
                      <select
                        id="countries"
                        className="bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <div className="flex justify-center">
                      <div className="custom-number-input h-10 w-full">
                        <label
                          htmlFor="custom-input-number"
                          className="w-full text-gray-800 dark:text-gray-200 text-sm font-semibold"
                        >
                          تعداد
                        </label>
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button
                            data-action="decrement"
                            className=" bg-slate-300 dark:bg-slate-600 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none"
                          >
                            <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">−</span>
                          </button>
                          <input
                            type="number"
                            className="outline-none focus:outline-none text-center w-full bg-slate-300 dark:bg-slate-600 dark: font-semibold text-md focus:text-black  md:text-basecursor-default flex items-center text-gray-900 dark:text-white"
                            name="custom-input-number"
                            defaultValue="1"
                          ></input>
                          <button
                            data-action="increment"
                            className="bg-slate-300 dark:bg-slate-600 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer"
                          >
                            <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold"
                        htmlFor="browser"
                      >
                        استان
                      </label>
                      <input
                        type="text"
                        list="data"
                        className="bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />

                      <datalist id="data">
                        <option value="test1" />
                        <option value="test2" />
                        <option value="test3" />
                        <option value="test4" />
                      </datalist>
                    </div>
                    <div>
                      <label
                        className="text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold"
                        htmlFor="browser"
                      >
                        شهر
                      </label>
                      <input
                        type="text"
                        list="data"
                        className="bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />

                      <datalist id="data">
                        <option value="test1" />
                        <option value="test2" />
                        <option value="test3" />
                        <option value="test4" />
                      </datalist>
                    </div>
                    <div className="mb-2">
                      <label
                        className="text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold"
                        htmlFor="browser"
                      >
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        className="text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold"
                        htmlFor="browser"
                      >
                        شماره همراه
                      </label>
                      <input
                        type=""
                        id="number"
                        className="bg-slate-300 dark:bg-slate-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="col-span-2 mb-2">
                      <label
                        className="text-sm text-gray-800 dark:text-gray-200 mb-2 font-semibold"
                        htmlFor="browser"
                      >
                        نشانی
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-slate-300 dark:bg-slate-600 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="w-full text-center transition ease-in duration-300 text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-purple-600 py-5">
                      <span className="text-center font-bold text-lg">
                        ادامه خرید محصول
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* add card */}
              <div className="flex space-x-2 text-sm font-medium justify-start"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
