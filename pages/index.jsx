import Head from "next/head";
import Topo from "../components/topo";
import Home from "../components/home";
import Intro from "../components/intro";
import Metas from "../components/metas";

export default function Tudo(){
  return(
    <>
    <Head>
      <title>Urban Economy</title>
    </Head>
    <Topo></Topo>
    <Home titulo="URBAN ECONOMY" texto="Focamos na promoção de um modo de vida sustentável, baseado no consumo e produção responsável. Nossos produtos tem como foco reduzir o descarte indevido de roupas de criança, que acabam por ter uma curta vida útil em razão do rápido crescimento nessa faixa etária. Através da troca de roupas entre famílias, planejamos reduzir o número de roupas descartadas dessa forma e auxiliar no planejamento financeiro de famílias. "></Home>
    <Intro titulo="Missão, visão e valores" texto="Nossa missão é prolongar a vida útil de objetos, ajudando assim no desenvolvimento de um mundo sustentável e auxiliando na organização de renda de diversas famílias, sendo esses dois princípios nossos principais valores. Temos o compromisso de aumentar significativamente a vida útil de objetos, especialmente de roupas infantis, promovendo assim uma economia mais sustentável e responsável, respeitando as necessidades e limites do meio ambiente e criando uma comunidade preocupada com questões ambientais e seus impactos na economia."></Intro>
    <Metas></Metas>
    </>
  )
}
