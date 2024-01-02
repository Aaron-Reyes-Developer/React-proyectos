import { useState } from 'react'
import Testimonios from './componentes/cartas/CardtaTestimonios.jsx'
import Boton from './componentes/botones/Boton.jsx'
import './App.css'

function App() {
  
    // DATOS DE LAS CARTAS
    let objeto = [
        {
            id: '1',
            imagen: "https://scontent.fmec2-1.fna.fbcdn.net/v/t39.30808-6/290207076_118564544209319_815795936767934109_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG4Msk6rr9hzgS-RY1EKiwO7vcKzIfTQSLu9wrMh9NBIshM6S96g4b85gFZKadnc1UmIAITsN5lxhXXUo3fzt4a&_nc_ohc=p50um8VluCsAX8K4wND&_nc_ht=scontent.fmec2-1.fna&oh=00_AfAbcDlepB5yH4IqKumhOz_yx2A8c0KtmDUGismgauwQdA&oe=65961131",
            titulo: "TAE",
            subTitulo: "es el que canta greuso", 
            detalle: "Kim Tae-hyung, más conocido por su nombre artístico V, es un cantante, bailarín, actor y modelo surcoreano. Desde 2013 es miembro del grupo BTS bajo la compañía Big Hit Music"
        }


        // {
        //     id: '2',
        //     imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFA5209SfZV8C-arqaglxzcblPVfQ1hWOsnwvGa-GAQ&s",
        //     titulo: "Jk",
        //     subTitulo: "Jungkook", 
        //     detalle: "Jeon Jung-kook, conocido como Jungkook, es un cantante surcoreano. Saltó a la fama como miembro y vocalista del grupo BTS."
        // },

        // {
        //     id: '3',
        //     imagen: "https://www.metroecuador.com.ec/resizer/OO9xFxMrDmEL1z9e_BKvhes75gw=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/6VGRKERS4JD4ZEWQHO624IQTEY.jpg",
        //     titulo: "JIMIN",
        //     subTitulo: "Park Jimin", 
        //     detalle: "Park Ji-Min, más conocido como Jimin, es un cantante y bailarín surcoreano. En 2013 debutó como integrante del grupo BTS bajo la compañía Big Hit Entertainment.​"
        // },

        // {
        //     id: '4',
        //     imagen: "https://laverdadnoticias.com/export/sites/laverdad/img/2023/04/27/concierto_de_suga_agust_d.jpg_609545075.jpg",
        //     titulo: "SG",
        //     subTitulo: "Suga", 
        //     detalle: "Min Yoon-gi, más conocido por sus nombres artísticos Suga y Agust D, es un rapero, compositor y productor surcoreano. En 2013 debutó como miembro del grupo BTS bajo la compañía Big Hit. En 2010, formaba parte de un grupo underground de rap en su ciudad natal llamado D-Town"
        // },

        // {
        //     id: '5',
        //     imagen: "https://hips.hearstapps.com/hmg-prod/images/jin-bts-servicio-militar-1674037520.jpg",
        //     titulo: "JIN",
        //     subTitulo: "Jin", 
        //     detalle: "Kim Seok-Jin, conocido por su nombre artístico JIN, es un cantante, modelo, y bailarín surcoreano.​​ Desde 2013 es miembro del grupo BTS bajo la compañía Big Hit Music.​"
        // }
    ]

    // estado del contador, por defecto sera 0
    let [contador, setContador] = useState(0)


    // incrementa el contador
    function incrementar(){
        setContador(contador +1) 
    }

    // resetea el contador
    function resetear(){
        setContador(contador = 0) 
    }
    

    return(
        
        <>
            
            {objeto.map(carta => (
        
                <Testimonios 
                    id = {carta.id}
                    key={carta.id}
                    imagen = {carta.imagen} 
                    titulo = {carta.titulo} 
                    subTitulo = {carta.subTitulo} 
                    detalle = {carta.detalle} 
                />
            ))}

                <h1>Likes {contador}</h1>

            <Boton 
                texto="LIKE" 
                icono="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" estado="botonActivo" 
                miFuncion={incrementar}
            />

            <Boton 
                texto="RESETEAR" 
                estado="botonInactivo"  
                miFuncion={resetear}
                icono="https://cdn-icons-png.flaticon.com/512/5632/5632370.png"
            />
        </>

        
    )
    
    

}





export default App
