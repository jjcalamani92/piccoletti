
import { Detail, HeadingPrimary } from '../../src/component/ui'
import { IWearProduct } from '../../src/interface'
import { Layout } from '../../src/component/layout'
import { connectToDatabase } from '../../lib/mongobd'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

interface Props {
  product: IWearProduct
}


const ProductPage:NextPage<Props>= ({ product }) => {

  return (
    <Layout
      title={`${product.title}`} 
      pageDescription={`${product.description}`} 
      imageFullUrl={`${product.image[1]}`} 
      >
      <HeadingPrimary titleP='Detalles del producto'/>
      <Detail product={product} />
    </Layout>
  )
}




const getProductBySlug = async( slug: string ): Promise<IWearProduct | null> => {

    const { db } = await connectToDatabase();
    const wearproduct = await db.collection("wearproducts").findOne({ slug });
    
    if ( !wearproduct ) {
        return null;
    }

    return JSON.parse( JSON.stringify( wearproduct ) );
}

interface WearProductSlug {
    slug: string;
}

const getAllProductSlugs = async(): Promise<WearProductSlug[]>  => {
    const { db } = await connectToDatabase();
    const slugs = await db
      .collection("wearproducts").find().toArray();

    return slugs;
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const productSlugs = await getAllProductSlugs();

  
  return {
    paths: productSlugs.map( ({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: 'blocking'
  }
}


// // You should use getStaticProps when:
// //- The data required to render the page is available at build time ahead of a user’s request.
// //- The data comes from a headless CMS.
// //- The data can be publicly cached (not user-specific).
// //- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.


export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { slug = '' } = params as { slug: string };
  const product = await getProductBySlug( slug );

  if ( !product ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}

export default ProductPage
