//forma de importar el style en module
import style from "./style.module.css"

//se importan las imagenes para luego en llamarlas en la funsion app
import sabanas from "./assets/img/bannerSabanasyAcolchados.jpg"
import frazadas from "./assets/img/bannerFrazadas.jpg"
import edredon from "./assets/img/bannerEdredon.jpg"
import juvenil from "./assets/img/bannerJuvenil.jpg"
import infantil from "./assets/img/bannerInfantil.jpg"
import NavBar from "./assets/Componentes/NavBar/NavBar"
import { Button } from "./assets/Componentes/Button/Button"

//forma de importar style css
/*impor .style.css  */

function App() {
  const data = [
    {
    id: 1,
    nombre: "Sabanas",
    descripcion: "OXFORD -DOVER - SENSE - NATIVA - PLUS - PLUS BASIC - HOGAR",
    img: sabanas,
    },
    {
    id: 2,
    nombre: "Acolchados",
    descripcion: "OXFORD -DOVER - SENSE - NATIVA - PLUS - PLUS BASIC - HOGAR",
    img: sabanas,
    },
    {
    id: 3,
    nombre: "Edredon",
    descripcion: "DE TERCIOPELO - TEDDY BEAR - CON CORDERITO - CON RELIEVE",
    img: edredon
    },
    {
    id: 4,
    nombre: "Frazadas",
    descripcion: "CON RELIEVE - DE FLANNEL FLEECE - DE CORDERITO - ESTAMPADAS",
    img: frazadas,
    },
    {
    id: 5,
    nombre: "Juvenil",
    descripcion: "KITS DE EDREDONES - SÁBANAS Y ACOLCHADOS - FRAZADAS - BATAS - TOALLONES",
    img: juvenil,
    },
    {
    id: 6,
    nombre: "Infantil",
    descripcion: "EDREDONES - FRAZADAS - SÁBANAS Y ACOLCHADOS  - BATAS - ALMOHADONES - ALFOMBRAS",
    img: infantil,
    }
  ]

//FORMA DE APLICAR ESTILOS DENTRO DE JSX
/*const styleProducto ={
  display: "grid",
  gridTemplateColums: "repeat(3, 1fr)"
}*/

  return (
    
    //si los estilos son creadas por style.module se llama a js y el nombre de la clase. ej: className = {style.principal}
    //si los estilos son creado con style.css se llama solo con el nombre de la clase. ej: className = "principal"
    //en este caso los estilos los creamos todos con style.module
    
    <div className = {style.principal}>
      <NavBar />
      <h1 className = {style.titulo}>Categorias</h1>
      <div /*style={styleProducto} forma de llamar al estilo creado con el const dentro del jsx*/>
        {
          data.map((art) => (
            <div className = {style.articulos}> 
              <p className = {style.seccion}>{art.nombre}</p>
              <img src={art.img} alt="" />
              <p>{art.descripcion}</p>
              <Button text="Ingresar"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
