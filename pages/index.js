import Main from './components/main'
import Info from './components/info'
export default function Home() {
  return (
    <div>
      <Main image="/../public/perfil.jpeg"/>
      <Info image="/../public/perfil.jpeg" title="Estudo na...">ETEC Dr. Demétrio de Azevedo Júnior. Faço técnico em Informática para Internet</Info>
    </div>
  );
}
