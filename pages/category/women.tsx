import { NextPage } from 'next'
import { useWearProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';


const RopaDeWomenPage: NextPage = () => {
  const { wearproducts, isLoading } = useWearProduct('/wearProducts?category=women');
  return (
    <Layout title={'Piccoletti - Ropa de Mujer'} pageDescription={'ropa de mujer al mejor precio'}>
      <HeadingPrimary titleP='Ropa de Mujer'/>
      {
        isLoading
          ? <h1>Cargando....</h1>
          : <ProductComponent products={wearproducts}/>
      }
    </Layout>
  )
}


export default RopaDeWomenPage