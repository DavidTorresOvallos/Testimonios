import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js'
import userEvent from '@testing-library/user-event';
import { useSyncExternalStore } from 'react';
function Pruebas(){
  const users=[
    {
        nombre:"Emma Bostian",
        pais:"Suecia",
        imagen:"Emma",
        cargo:"Ingeniera de Software",
        empresa:"BloodyOrigin",
        testimonio:"<b>¡Oh macedonios y aliados griegos, manteneos firmes!</b> Gloriosos son los hechos de quienes acometen una gran labor y corren un gran riesgo, y es muy hermoso llevar una existencia valiente y morir dejando tras de sí la gloria imperecedera. ¿O no sabéis que nuestro ancestro ha alcanzado tan altas cotas de gloria, pasando de ser un mero mortal a convertirse en un dios, como parece ser, debido a que no permaneció en Tirinto o Argos, o incluso en el Peloponeso o en Tebas?"
    },
     
    {
        nombre: "Ana Milena",
        pais: "Locombia",
        imagen: "Sarah",
        cargo: "Ingeniera de Sistemas",
        empresa: "BloodyOrigin",
        testimonio: "No hay un hombre entre vosotros ante quien yo no haya efectuado más de una hazaña militar o de quien yo, que soy testigo fehaciente de su valor, no pueda contar sus propias acciones decorosas y el momento y lugar en que las acometió. <b>Yo fui vuestro alumno antes de ser vuestro jefe</b> y entraré en batalla, rodeado por hombres a los que he elogiado y recompensado miles de veces, contra unos que nada saben de los otros y que son mutuos desconocidos."
    },
    
    {  
        nombre: "Shawn Monterroza",
        pais: "China",
        imagen: "Shawn",
        cargo: "Ingeniero Multimedia",
        empresa: "BloodyOrigin",
        testimonio: "No hay retirada, ¡solo sumisión y esclavitud! ¡Nuestras cadenas han sido ya forjadas! ¡Su tintineo puede oírse en las llanuras de Boston! La guerra es inevitable. Así pues ¡dejadla venir señor! Os lo repito, ¡dejadla venir! Es inútil insistir en este asunto. Los caballeros podrán gritar paz, paz; pero no hay paz. De hecho, <b>¡la guerra ya ha comenzado!</b>"
    }
  ]

return(
  <div className="App">
    <div className="contenedor-principal">
      <h1>Esto es lo que dice la gente de BloodyOrigin</h1>
        {users.map((usuario, index) => {
          return (
                <Testimonio 
                  key={index}
                  nombre={usuario.nombre}
                  pais={usuario.pais}
                  imagen={usuario.imagen}
                  cargo={usuario.cargo}
                  empresa={usuario.empresa}
                  testimonio={usuario.testimonio}
                />
              );
            })}
        </div>
      </div>
    );
}        
export default Pruebas;
