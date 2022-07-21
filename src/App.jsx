import React, { useState } from 'react'
import './App.css'
import CarouselComponent from './components/CarouselComponent';
import ProductPage from './components/ProductPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <span className='freteGratis'>Frete Grátis </span>
        <span className='valorCompras'>nas compras acima de R$ 399,99</span>
<<<<<<< HEAD
        <div className="caioaqui">Teste de merge para caio</div>
=======
        <span className='freteGratis'>Frete Grátis </span>
        <span className='valorCompras'>nas compras acima de R$ 399,99</span>
        <span className='freteGratis'>Frete Grátis </span>
        <span className='valorCompras'>nas compras acima de R$ 399,99</span>
>>>>>>> feature/alteracao-merge
      </header>
      <section className='paginaProduto'>
            <CarouselComponent/>
            <ProductPage/>
        </section>
      <section className="precoCondicoes">
        <span className="condicoesPreco">Preços e condições válidos em XX/XX/2022 para a região: São Paulo - SP</span>
        <span className="alterarCidade">(Alterar)</span>
      </section>
    </div>
  )
}

export default App
