import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  return (
    <>

      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred! 404</h1>
        <br />
        {error && (
          <div className='flex gap-5'>
            <p className='text-red-500 text-2xl'>{error.statusText || error.message || error.stack}</p>
            <p className='text-2xl'>{error.status}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ErrorPage
