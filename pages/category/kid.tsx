import { NextPage } from 'next'
import { useWearProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';



const RopaDeNiñoPage: NextPage= () => {
  const { wearproducts, isLoading } = useWearProduct('/wearProducts?category=kid');
  return (
    <Layout title={'Piccoletti - Ropa de Niño'} pageDescription={'ropa de niño al mejor precio'}>
      <HeadingPrimary titleP='Ropa de Niño'/>
      {
        isLoading
          ? <h1>Cargando....</h1>
          : <ProductComponent products={wearproducts}/>
      }
      
    </Layout>
  )
}


export default RopaDeNiñoPage 