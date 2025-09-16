export default function Sobre() {
    return (
        <div className="sobre-page">
            <div className="container">
                {/* Hero Section */}
                <section className="sobre-hero">
                    <div className="sobre-content">
                        <div className="sobre-text">
                            <h1 className="section-title">Sobre a Hilary Grace</h1>
                            <p className="lead">Criando peças atemporais que celebram a jornada da mulher moderna através da vida com elegância, confiança e sofisticação única.</p>
                        </div>
                        <div className="sobre-image">
                            <img src="/image/about-main.jpg" alt="Sobre a Boutique Hilary Grace" />
                        </div>
                    </div>
                </section>


                {/* Story Section */}
                <section className="story-section">
                    <h2 className="section-title">Nossa História</h2>
                    <div className="story-content">
                        <div className="story-text">
                            <p>
                                Fundada com uma paixão por empoderar mulheres através da moda, a Boutique Hilary Grace nasceu de um sonho de criar um espaço onde elegância encontra conforto, onde sofisticação abraça individualidade.
                            </p>
                            <p>
                                Cada peça em nossa coleção é cuidadosamente curada para refletir a natureza multifacetada da mulher moderna - forte mas feminina, confiante mas graciosa, atemporal mas contemporânea.
                            </p>
                            <p>
                                Acreditamos que a verdadeira beleza vem de dentro, e nossa missão é criar peças que realcem seu brilho natural e façam você se sentir extraordinária em cada momento.
                            </p>
                        </div>
                        <div className="story-stats">
                            <div className="stat">
                                <h3>500+</h3>
                                <p>Clientes Felizes</p>
                            </div>
                            <div className="stat">
                                <h3>3</h3>
                                <p>Anos de Excelência</p>
                            </div>
                            <div className="stat">
                                <h3>100+</h3>
                                <p>Peças Únicas</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Values Section */}
                <section className="values-section">
                    <h2 className="section-title">Nossos Valores</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <div className="value-icon">✨</div>
                            <h3>Qualidade</h3>
                            <p>Selecionamos apenas os melhores materiais e trabalhamos com artesãos qualificados para garantir que cada peça atenda nossos altos padrões.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">💝</div>
                            <h3>Elegância</h3>
                            <p>Design atemporal que transcende tendências, criando peças que você valorizará por anos.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">🌸</div>
                            <h3>Empoderamento</h3>
                            <p>Moda que faz você se sentir confiante, bonita e pronta para conquistar o mundo.</p>
                        </div>
                        <div className="value-item">
                            <div className="value-icon">🤝</div>
                            <h3>Atendimento</h3>
                            <p>Atenção personalizada e atendimento excepcional que torna sua experiência de compra memorável.</p>
                        </div>
                    </div>
                </section>


                {/* Team Section */}
                <section className="team-section">
                    <h2 className="section-title">Conheça Nossa Equipe</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="/image/team-1.jpg" alt="Fundadora" />
                            <h3>Julia Neves</h3>
                            <p>Fundadora & Diretora Criativa</p>
                            <p>"A moda é minha linguagem, e cada peça conta uma história de força e graça feminina."</p>
                        </div>
                        <div className="team-member">
                            <img src="/image/team-2.jpg" alt="Designer" />
                            <h3>Mariana Silva</h3>
                            <p>Designer Principal</p>
                            <p>"Acredito em criar peças que fazem as mulheres se sentirem como a melhor versão de si mesmas."</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}