import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: black;

    p{
        color: white;
        font-size: 200px;
    }
`
export const SidBar = styled.div`
    position: fixed;
    height: 100%;
    width: 300px;
    background-color: #006599;
    padding-top: 40px;

    h1{
    color: #FFF;
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
    }

    a {
    color: #FFF;
    text-decoration: none;
    font-size: 16px;
}

    a:hover {
    color: #F4EF5E;
    }

    li {
    padding: 20px;
    }
`

export const SidBarContainer = styled.div`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 200px;

    img{
        width: 60px;
        height: 60px;
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }
`

export const Nav = styled.div``


export const ContainerItems = styled.div`

`
export const Section = styled.section`
    padding-left: 50px;
`
export const Banner = styled.div`

    img {
        height: 500px;
        width: 100%;
        background-position: center;
        background-size: cover;

    }
`
export const ContentBemVindo = styled.div`
    padding-left: 50px;
    position: absolute;
    left: 300px;
    width: calc(100% - 300px);

    h1{
        color: #006599;
        font-size: 48px;
    }
`


export const MiniBanner = styled.div`
    img{
    width: 300px;
    height: 400px;
    background-image: url('../img/banner3.jpg');
    background-position: center;
    background-size: cover;
    float: left;
    margin-right: 20px;
    margin-top: 10px;
    }
`

export const MiniBannerTwo = styled.div`
    img{
    width: 300px;
    height: 400px;
    background-image: url('../img/banner3.jpg');
    background-position: center;
    background-size: cover;
    float: right;
    margin-right: 20px;
    margin-top: 10px;
    }
`

export const Descriptiom = styled.div`
    position: absolute;
    left: 370px;
    padding-right: 30px;
p {
    line-height: 2;
    font-size: 16px;
    margin-bottom: 30px;
    margin-left: 25px;
}
`
export const Session = styled.div`
    padding-left: 50px;
    position: absolute;
    left: 300px;
    width: calc(100% - 300px);
    margin-top: 500px;

    h1{
        color: #006599;
        margin-bottom: 30px;
        font-size: 48px;
    }

    h2 {
    color: #006599;
    margin-bottom: 30px;
    font-size: 35px;
    }
`
export const DessaoDescricao = styled.div`
    p {
    line-height: 2;
    font-size: 16px;
    margin-bottom: 30px;
    margin-left: 25px;
}
`
