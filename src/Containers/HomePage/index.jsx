import { Banner, Container, Main, NavContainer, Plans } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faRocket, faShieldAlt } from '@fortawesome/free-solid-svg-icons'; // Importando o ícone
import Logo from '../../assets/hdchostlogo.png'

function Home() {
    return (
        <Container>
            <NavContainer>
                <nav>
                    <a href="#"><img src={Logo} alt="logo" /></a>
                    <ul className="navbar-items">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Planos</a></li>
                        <li><a href="#">Contatos</a></li>
                        <li><a href="#" className="default-btn">Login</a></li>
                    </ul>
                </nav>
            </NavContainer>

            <Main>
                <Banner>
                    <h1>kDC Host</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum tenetur quae eos asperiores animi, harum, eligendi non sint labore ratione autem facere nemo explicabo, suscipit mollitia? Aspernatur ad fuga mollitia.</p>
                </Banner>

                <section className="specialties-container">
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faShieldAlt} className="faShieldAlt" />
                            <h3>Segurança</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus voluptas ab fugit, atque dolorem quasi. Tenetur deleniti tempore quisquam sapiente nihil voluptas dicta? Consequuntur dignissimos ea accusamus laboriosam facere.</p>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faRocket} className="faRocket" />
                            <h3>Velocidade</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus voluptas ab fugit, atque dolorem quasi. Tenetur deleniti tempore quisquam sapiente nihil voluptas dicta? Consequuntur dignissimos ea accusamus laboriosam facere.</p>
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faComments} className="faComments" />
                            <h3>Suporte</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente necessitatibus voluptas ab fugit, atque dolorem quasi. Tenetur deleniti tempore quisquam sapiente nihil voluptas dicta? Consequuntur dignissimos ea accusamus laboriosam facere.</p>
                        </li>

                    </ul>
                </section>

                <section className="price-container">
                    <h1>Planos e Preços</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam alias velit fuga quae assumenda, expedita iste illo? Voluptatum, odit explicabo iure, praesentium ducimus quam iusto ipsam cum vel accusantium recusandae?</p>
                    <Plans>
                        <div className="plan">
                            <ul>
                                <li className="price">R$15,00/mês</li>
                                <li className="plan-name">Padrão</li>
                                <li>2GB de espaço em disco</li>
                                <li>10 Sub-dominios</li>
                                <li>25 Contas de E-mail</li>
                                <li>Painel de Chamados</li>
                                <li>Suporte 24/7</li>
                                <li className="plan-btn">Selecionar</li>
                            </ul>
                        </div>
                        <div className="plan">
                            <ul>
                                <li className="price">R$35,00/mês</li>
                                <li className="plan-name">Dedicado</li>
                                <li>5GB de espaço em disco</li>
                                <li>20 Sub-dominios</li>
                                <li>35 Contas de E-mail</li>
                                <li>Painel de Chamados</li>
                                <li>Suporte 24/7</li>
                                <li className="plan-btn">Selecionar</li>
                            </ul>
                        </div>
                        <div className="plan">
                            <ul>
                                <li className="price recomend">R$50,00/mês</li>
                                <li className="plan-name">Dedicado Plus</li>
                                <li>20GB de espaço em disco</li>
                                <li>50 Sub-dominios</li>
                                <li>100 Contas de E-mail</li>
                                <li>Painel de Chamados</li>
                                <li>Suporte 24/7</li>
                                <li className="plan-btn recomend">Selecionar</li>
                            </ul>
                        </div>
                        <div className="plan">
                            <ul>
                                <li className="price">R$150,00/mês</li>
                                <li className="plan-name">Cloud</li>
                                <li>25GB de espaço em disco</li>
                                <li>150 Sub-dominios</li>
                                <li>300 Contas de E-mail</li>
                                <li>Painel de Chamados</li>
                                <li>Suporte 24/7</li>
                                <li className="plan-btn">Selecionar</li>
                            </ul>
                        </div>
                    </Plans>
                </section>

                <section className="search-domain">
                    <h2>Buscar um dominio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <form>
                        <input type="text" name="domain" placeholder="Digite seu dominio desejado" />
                        <input type="submit" value="Buscar dominio" />
                    </form>
                </section>

                <section className="contact">
                    <h2>Entre em contato</h2>
                    <p>Mande uma mensagem para analisarmos a melhor hospedagem para seu negocio</p>
                    <form>
                        <input type="text" name="name" placeholder="Digite seu nome" />
                        <input type="email" placeholder="E-mail" />
                        <textarea name="message" placeholder="digite sua mensagem"></textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </section>
            </Main>
        </Container>
    )
}

export default Home
