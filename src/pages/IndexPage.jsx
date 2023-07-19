import React from 'react'

const IndexPage = () => {
  return (
    <div className='flex-col  mt-2 p-4'>
        <div className="flex flex-row mx-auto justify-between">
            <div>Profile your Business</div>
            <div>Sign In</div>
        </div>
      <div className="flex justify-center space-y-6 mt-8">
        <div className='flex-col'>
           <h1>Seller Hub</h1> 
           <p className="text-xs text-gray-500 mb-2">
            Search by a product, services or company name
           </p>
           <input type='text' className='border rounded-md border-green-500 justify-center' />
            </div>
      </div>
    </div>
  )
}

export default IndexPage
