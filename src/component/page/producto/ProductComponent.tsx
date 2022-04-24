
import { FC } from "react";
import { IWearProduct } from "../../../interface";
import { Card } from "../../ui";

interface Props {
  products: IWearProduct[];
}

export const ProductComponent:FC<Props> = ({ products }) => {
	
	return (
		<>
			<section className="product">
				{products.map((product, i) => (
					<Card key={i} product={product} />
				))}
			</section>
		</>
	);
};
