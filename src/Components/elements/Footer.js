import React from 'react'
import '../css/Footer.css'

function Footer() {
    return (
        <div className="Footer-main">
            <div class="card">
                <h1>Zona de trabalho</h1>
                <hr className="linha"></hr>
                <p>Lisboa</p>
            </div>


            
            <div class="card">
                <h1>Email</h1>
                <hr className="linha"></hr>
                <p>JorgeFernandes11@gmail.com</p>
            </div>


            <div class="card">
                <h1>Telemóvel</h1>
                <hr className="linha"></hr>
                <p>936071788</p>
            </div>

         <div className="creditos">
             <small>Developer: NunoFernandes</small>
             </div>   
        </div>   
        
    )
}

export default Footer
