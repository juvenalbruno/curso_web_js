import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/primeiro'
//import BomDia from './componentes/bomDia'
//import { BoaTarde, BoaNoite } from './componentes/multiplos'
//import Multi from './componentes/multiplos'
//import Saudacao from './componentes/saudacao'
import Pai from './componentes/pai'
import Filho from './componentes/filho'

//const elemento = <h1>React</h1>
//ReactDOM.render(<BomDia nome="Juvenal" />, document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Juvenal" />
//         <Multi.BoaNoite nome="Juvenal" />
//     </div>
// , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="Juvenal" />
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* COmo passo os componentes filhos por aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
        
    </div>
, document.getElementById('root'))