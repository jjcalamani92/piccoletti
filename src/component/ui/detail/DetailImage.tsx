import { SwiperComponent} from "../swiper/Swiper";

import { FC } from "react";
import { IWearProduct } from "../../../interface";

interface Props {
  product: IWearProduct;
}

export const DetailImage: FC<Props> = ({product}) => {

  return (
        <div className="image">
          <SwiperComponent image={product.image}/>
        </div>
      
  )
}
