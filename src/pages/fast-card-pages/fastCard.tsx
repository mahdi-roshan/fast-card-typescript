import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchProductInfo } from "./../../services/fast-card-api/productInfo";

import AddFrom from "../../components/fast-card/addForm";
import InfoSection from "../../components/fast-card/infoSection";
import ImageSection from "../../components/fast-card/imageSection";

const FastCard = () => {
  // const params = useParams();
  // const { isLoading, isError, data, error } = useQuery(
  //   ["product-info", params.productId],
  //   () => fetchProductInfo(params.productId)
  // );

  return (
    <>
      <div className="dark:bg-slate-900 m-0 p-0 font-yekan">
        <div className="container h-screen flex items-center justify-center mx-auto">
          <div className="md:w-[40%] w-[90%]">
            <div className="p-4 border dark:border-slate-800 bg-white dark:bg-slate-700 rounded-xl shadow-lg">
              <ImageSection src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80" />
              <div className=" space-y-4">
                <InfoSection {...{
                  name: 'کفش روزمره مردانه Emery مدل 30604',
                  price: 5360000
                }} />
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
