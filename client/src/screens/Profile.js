import React from 'react'

const Profile = () => {
  return (
    <div style={{maxWidth:"550px",margin:"0px auto"}}>
      <div style={{
               display:"flex",
               justifyContent:"space-around",
               borderBottom:"1px solid grey"
           }}>
        <div>
        <img style={{width:"160px",height:"160px",borderRadius:"80px"}} 
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        </div>
        <div>
            <h4>DOnt Know</h4>
            <div style={{display:"flex",justifyContent:'space-between', width:"108%"   }}>
                <h5>40 Posts</h5>
                <h5>40 Followers</h5>
                <h5>40 Following</h5>
            </div>
        </div>
      </div>
      <div className='gallery'>
      <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
        <img className='item'
        src="https://images.unsplash.com/photo-1504203772830-87fba72385ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"/>
      </div>
    </div>
  )
}

export default Profile
