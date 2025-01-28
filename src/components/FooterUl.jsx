import React from 'react'

const FooterUl = ({headingSix,liOne,litwo,liThree,liFour,liFive}) => {
  return (
    <div>
        <h6 className='pb-7 text-primary text-2xl font-pop font-normal'>{headingSix}</h6>
        <ul className='flex flex-col gap-y-6 text-third text-base font-pop font-normal'>
            <li>{liOne}</li>
            <li>{litwo}</li>
            <li>{liThree}</li>
            <li>{liFour}</li>
            <li>{liFive}</li>
           
        </ul>
    </div>
  )
}

export default FooterUl