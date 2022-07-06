type CounterProps = {};

const Counter = () => {
  return (
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
          <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">
            −
          </span>
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
          <span className="m-auto text-2xl font-thin dark:text-white text-gray-900">
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
