import React from 'react';
import { Header } from '../../components/Header/Header';
import Ilustration from '../../assets/illustration.png';
export const Cadastro = () => {
  return (
    <div className='container-fluid h-100 bg-primary'>
      <Header whiteVersion hideCart />
      <div className='row'>
        <div className='col-6 text-right my-auto'>
          <img src={Ilustration} alt='img-cadastro' className='img-fluid'></img>
        </div>
        <div className='col-6'>
          <div className='box col-8'>
            <h2 className='text-center'>
              Falta pouco para o seu pet ser feliz.
            </h2>
            <br />
            <br />
            <input
              type='text'
              className='form-control form-control-lg mb-3'
              placeholder='Nome completo'
            />

            <input
              type='text'
              className='form-control form-control-lg mb-3'
              placeholder='E-mail'
            />

            <input
              type='text'
              className='form-control form-control-lg mb-3'
              placeholder='Telefone'
            />

            <input
              type='text'
              className='form-control form-control-lg mb-3'
              placeholder='Cpf'
            />

            <input
              type='date'
              className='form-control form-control-lg mb-3'
              placeholder='Data de Nascimento'
            />

            <button className='btn btn-lg btn-block btn-secondary'>
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
