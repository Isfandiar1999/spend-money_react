import React from 'react'

const Header = ({money, total}) => {
  return (
    <> 
          {
            total>0 && money-total!==0 && (
              <div className='header'>Harcayacak <span>${money-total}</span> paraniz kaldi!</div>
            )
          }
          {
            total===0 && (
              <div className='header'>Harcamak icin <span>${money}</span> paraniz var!</div>
            )
          }
          {
            money-total===0 && (
              <div className='header'>Fakir.</div>
            )
          }
          <style jsx>{`
            .header{
              position:sticky;
              top:0;
              background:teal;
              height:60px;
              display:flex;
              align-items:center;
              justify-content:center;
              color:#fff;
              font-size:24px;
              letter-spacing:1px;
            }

            .header span{
              margin:0 10px;
              font-weight:bold; 
            }
          `}</style>
    </>
  )
}

export default Header