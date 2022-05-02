import React from 'react'
import ShowMoreButton from './ShowMoreButton/ShowMoreButton'
import starP from '../images/star.svg'
import PlusButtonCount from './PlusButton/PlusButtonCount';

const ProductPage = () => {
  return (
    <section className='infoProdutos'>
      <section className='codRef'>
        <div className="loja">Loren</div>
        <div className="referenciaCod">REF.:2-1955-U</div>
      </section>
      <section className="productBrand">
        <div className="nomeProduto">Loren Ipsum Dolor</div>
        <div className="descProduto">
        <ShowMoreButton/>
        </div>
        <div className="starProduct">
          <img className='imageStar' src={starP}/>
          <img className='imageStar' src={starP}/>
          <img className='imageStar' src={starP}/>
          <img className='imageStar' src={starP}/>
          <img className='imageStar' src={starP}/>
        </div>
          <section className="selectCount">
            <section className="priceStatus">
              <section className="priceSelect">
                <div className="precoDe">R$ 269,99</div>
                <section className="precoCondicao">
                  <div className="condicao">5x de R$ 53,99</div>
                  <div className="semJuros">sem juros</div>
                </section>
              </section>
             <PlusButtonCount/>
          </section>
        </section>
        <button className="add-toCart">COMPRAR</button>
      </section>
    </section>
  )
}

export default ProductPage