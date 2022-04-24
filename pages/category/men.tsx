import { NextPage } from 'next'
import { useWearProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';


const RopaDeHombrePage: NextPage = () => {
  
  const { wearproducts, isLoading } = useWearProduct('/wearProducts?category=men');
  return (
    <Layout title={'Piccoletti - Ropa de Hombre'} pageDescription={'ropa de hombre al mejor precio'}>
      <HeadingPrimary titleP='Ropa de Hombre'/>
      {
        isLoading
          ? <h1>Cargando....</h1>
          : <ProductComponent products={wearproducts}/>
      }
    </Layout>
  )
}

export default RopaDeHombrePage