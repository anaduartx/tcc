import Artigos from "./artigos";

export default function Metas(){
    return(
        <>
        <section id="metas" className="grid-one main-bg section">
            <div className="main-content grid-one-content">
                <h2 className="grid-main-heading">Produtos</h2>
                <div className="grid">
                    <Artigos titulo="Closet Match" texto="Aplicativo que liga usuários com crianças de idades próximas promovendo assim a troca de roupas entre eles."></Artigos>
                    <Artigos titulo="Closet Match - The Game" texto="Guie o personagem pelo labirinto e colete as roupas espalhadas. Guarde suas roupas no closet e troque-as por prêmios no jogo."></Artigos>
                    
                </div>
            </div>
        </section>
        </>
    )
}