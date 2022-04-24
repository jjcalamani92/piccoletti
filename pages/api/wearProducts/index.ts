import { NextApiRequest, NextApiResponse } from 'next'
import { SHOP_CONSTANTS } from '../../../data'
import { connectToDatabase } from '../../../lib/mongobd';
import { IWearProduct } from '../../../src/interface';

type Data = 
| { message: string }
| IWearProduct[]



export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET':
            return getWearProducts( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getWearProducts = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    

    const { category = 'all' } = req.query;

    let condition = {};

    if ( category !== 'all' && SHOP_CONSTANTS.validCategory.includes(`${category}`) ) {
        condition = { category };
    }
    
    const { db } = await connectToDatabase();
    const wearproducts = await db
      .collection("wearproducts")
      .find(condition)
      .toArray();


    return res.status(200).json( wearproducts );

}