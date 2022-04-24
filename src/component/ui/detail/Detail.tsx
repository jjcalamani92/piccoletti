import { DetailImage } from "./DetailImage";
import { DetailContent } from "./DetailContent";
import { IWearProduct } from "../../../interface";
import { FC } from "react";

interface Props {
  product: IWearProduct;
}

export const Detail: FC<Props> = ({product}) => {
  return (
    <>
      
      <section className="detail">
        {/* <!-- card left --> */}
        <DetailImage product={product} />
        {/* <!-- card right --> */}
        <DetailContent product={product} />
      </section>

      
    </>
  );
};
