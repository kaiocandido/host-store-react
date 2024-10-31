import styled from 'styled-components'
import BannerMain from '../../assets/mainbanner.png'

export const Container = styled.div``

export const NavContainer = styled.div`
    width: 100%;
	height: 80px;
	background-color: #232A31;
	padding: 0 2em;
	position: relative;
	box-sizing: border-box;

    nav {
	    position: relative;
    }
    img{
        width: 50px;
        margin-top: 15px;
    }

    .navbar-items{
        list-style: none;
	    position: absolute;
	    display: inline-block;
	    height: 80px;
	    line-height: 80px;
	    margin: 0;
	    right: 0;
    }

    .navbar-items li {
	display: inline-block;
	text-transform: uppercase;
	margin-left: 25px;
    }

    .navbar-items li a {
        color: #FFF;
        text-decoration: none;
        transition: .5s;
    }

    .navbar-items li a:hover {
        color: #CCC;
    }

    .default-btn {
        padding: 15px 20px;
        background-color: #2CC76A;
        border-radius: 5px;
        color: #FFF;
    }

    .default-btn:hover {
        background-color: #22BB5F;
        color: #FFF;
    }
`

export const Main = styled.main``

export const Banner = styled.div`
    background: url('${BannerMain}');
	background-position: center;
	background-size: cover;
	padding: 10em 0;
	position: relative;

    h1{
        color: #FFF;
        text-align: center;
        font-weight: bold;
        font-size: 54px;
    }

    p{
        color: #FFF;
        text-align: center;
        font-weight: bold;
        font-size: 32px;
    }
`

export const Plans = styled.div``

export const Footer = styled.footer``