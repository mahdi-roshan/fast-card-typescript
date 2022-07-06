type InfoSectionProps = {
  name: string;
  price: number;
};

const InfoSection = ({ name, price }: InfoSectionProps) => {
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="flex items-center w-full justify-between min-w-0 ">
          <h2 className="text-xl font-bold ml-auto cursor-pointer text-gray-800 dark:text-gray-200 hover:text-purple-500 truncate ">
            {name}
          </h2>
          <div className="text-lg text-white dark:text-slate-700 font-semibold bg-purple-500 dark:bg-purple-300 inline-block p-1 rounded-lg">
            {price.toLocaleString() + ' تومان'}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
