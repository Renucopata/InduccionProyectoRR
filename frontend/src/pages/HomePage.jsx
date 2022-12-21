import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
    return (
      <MainLayout>
          <div className='bg-light p-5 mt-4 rounded-3'>
              <h1>Bienvenido al sistema de venta "Jacks POS"</h1>
              <p>Este sistema esta diseñado para que usted pueda tomar las ordenes de una manera muy facil y minimizando posibles errores!
              </p>
              <p>En caso de cualquier error por favor contactarse con el administrador</p>
              <Link to='/pos' className='btn btn-primary'>Nueva Orden</Link>
          </div>
      </MainLayout>
    )
  }

export default HomePage