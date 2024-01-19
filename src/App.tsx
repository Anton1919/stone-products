import './App.module.scss';
import s from './App.module.scss';
import { useEffect, useState } from 'react';
import { ProductType } from './types/product-types.ts';

function App() {
  const [data, setData] = useState<ProductType[]>([]);

  console.log(data);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((data) => data.json())
      .then((res) => setData(res))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className={s.app}>
      {data.map((prod: ProductType) => {
        return (
          <div className={s.container} key={prod.id}>
            <span>Название товара: {prod.name}</span>
            <span>Цена: {prod.price}</span>
            <div className={s.mainImg}>
              <span>Main image:</span>
              <img src={prod.mainImage} alt="img" />
            </div>
            <span>List of images:</span>
            <div className={s.listImg}>
              {prod.images.map((img: string, index) => {
                return (
                  <div className={s.imgWrapper} key={index}>
                    <img src={img} alt="img" />
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
