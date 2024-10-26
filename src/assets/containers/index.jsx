import { Banner, Container, ContainerItems, ContentBemVindo, Descriptiom, DessaoDescricao, MiniBanner, MiniBannerTwo, Nav, Section, Session, SidBar, SidBarContainer } from "./style"
import UsersImage from '../imagens/stand.png'
import UsersImageBanner from '../imagens/banner2.jpg'
import UsersImageBannerMini from '../imagens/banner4.jpg'
import UsersImageBannerMiniTwo from '../imagens/banner.jpg'

function Home() {
    return (
        <>
            <Container>
                <SidBar>
                    <SidBarContainer>
                        <img src={UsersImage} alt='Logo' />
                        <h1>Doceria</h1>
                        <Nav>
                            <ul>
                                <li><a href="#sessao-bemvindo">Bem vindo</a></li>
                                <li><a href="#sessao-sobre">Sobre nós</a></li>
                                <li><a href="#sessao-doces1">Doces 1</a></li>
                                <li><a href="#sessao-doces2">Doces 2</a></li>
                                <li><a href="#sessao-doces3">Doces 3</a></li>
                                <li><a href="#sessao-contato">Entre em contato</a></li>
                            </ul>
                        </Nav>
                    </SidBarContainer>
                </SidBar>
            </Container>

            <ContainerItems>
                <Section>
                    <Banner>
                        <img src={UsersImageBanner} alt='Banner' />
                    </Banner>
                    <ContentBemVindo>
                        <h1>Seja bem vindo a Doceria</h1>
                        <MiniBanner>
                            <img src={UsersImageBannerMini} alt='Banner' />
                        </MiniBanner>
                        <Descriptiom>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <a>Leia mais</a>
                        </Descriptiom>
                    </ContentBemVindo>
                </Section>
            </ContainerItems >

            <Section>
                <Session>
                    <h1>Sobre nós</h1>
                    <MiniBannerTwo>
                        <img src={UsersImageBannerMiniTwo} alt='Banner' />
                    </MiniBannerTwo>
                    <DessaoDescricao>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </DessaoDescricao>
                </Session>
            </Section>

        </>
    )
}

export default Home

