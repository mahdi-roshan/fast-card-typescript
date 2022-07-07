import { useFastCard } from "../../hooks/fast-card-hooks/useFastCard";

import InfoSection from "../../components/fast-card/infoSection";
import CustomLoader from "../../components/custom-components/custom-ui/loader/customLoader";

const FastCard = () => {
  const { data, isLoading, error, isError } = useFastCard();

  return (
    <>
      <div className="dark:bg-slate-900 m-0 p-0 font-yekan">
        <div className="container h-screen flex items-center justify-center mx-auto">
          {isLoading ? <CustomLoader /> : <InfoSection {...data?.data.data}/>}
        </div>
      </div>
    </>
  );
};

export default FastCard;
