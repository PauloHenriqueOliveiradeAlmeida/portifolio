import Main from './components/main'
import Info from './components/info'
import Perfil from '/public/perfil.jpeg'
export default function Home() {
  return (
    <div>
      <Main image={Perfil}/>
      <Info image={Perfil} title="Estudo na...">ETEC Dr. Demétrio de Azevedo Júnior. Faço técnico em Informática para Internet</Info>
    </div>
  );
}
