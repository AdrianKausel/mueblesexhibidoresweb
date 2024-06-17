import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatarwhatsapp from '../Imgs/CSClogo.png'


function whatsappComp(){
    return(
        <FloatingWhatsApp phoneNumber="+56 9 9200 7523" accountName="CSC Muebles Exhibidores" chatMessage="Hola!, como puedo ayudarte?" 
                                statusMessage="Responde habitualmente en 30 minutos" placeholder="Escribe tu mensaje..." darkMode="true" avatar={avatarwhatsapp}    />
    )
}

export default whatsappComp;