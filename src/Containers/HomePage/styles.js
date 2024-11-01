import styled from 'styled-components'
import BannerMain from '../../assets/mainbanner.png'

export const Container = styled.div`
    @media screen and (max-width: 576px) {
        Container{overflow-x:hidden }
    }
`

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

    @media screen and (max-width: 576px) {
        .NavContainer {
            width: 100%;
            box-sizing: border-box;
        }
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

    @media screen and (max-width: 576px) {
        .navbar-items li {
            font-size: 12px;
            margin-left: 10px;
        }
    }
`

export const Main = styled.main`
    .specialties-container{
        padding: 5em 0;
    }
    .specialties-container ul {
	display: flex;
	width: 90%;
	position: relative;
	margin-left: auto;
	margin-right: auto;
	padding-left: 0;
    }

    .specialties-container ul li {
	flex: 1 1 200px;
	list-style: none;
	text-align: center;
	padding: 20px;
    }

    .fas {
        font-size: 60px;
        margin-bottom: 15px;
    }

    .faShieldAlt {
        color: #2CC76A;
    }

    .faRocket {
        color: #EF3F29
    }

    .faComments {
        color: #EF8F29;
    }

    .specialties-container ul li h3 {
        margin-bottom: 25px;
        color: #333;
    }

    .specialties-container ul li p {
        line-height: 24px;
        color: #70747A;
    }

    .price-container {
        padding-bottom: 5em;
        text-align: center;
    }

    .price-container h1 {
        font-size: 36px;
        margin-top: 0;
    }

    .price-container p {
        font-size: 20px;
    }


    .search-domain{
        background-color: #34454e;
	    text-align: center;
	    padding: 5em 0;
    }

    .search-domain h2 {
	    color: #FFF;
	    font-size: 42px;
	    margin-top: 0;
	    margin-bottom: 15px;
    }
    

    .search-domain p {
        color: #D5D5D5;
        font-size: 24px;
        margin-bottom: 25px;
    }

    .search-domain input {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        border: none;
        border-radius: 5px;
    }

    .search-domain input[type=text] {
        margin-bottom: 25px;
        width: 60%;
        padding: 20px;
        font-size: 20px;
    }

    .search-domain input[type=submit] {
        background-color: #2cc76a;
        padding: 15px 30px;
        color: #FFF;
        font-size: 24px;
    }

    .contact{
        text-align: center;
	    padding-top: 5em;
	    padding-bottom: 2em;
    }

    .contact h2 {
	font-size: 36px;
    }

    .contact p {
        font-size: 20px;
        margin-bottom: 40px;
    }

    .contact input, .contact textarea {
        width: 200px;
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #CCC;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
    }

    .contact textarea {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        width: 468px;
        height: 150px;
    }

    .contact input[type=submit] {
        display: block;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        background-color: #2cc76a;
        color: #FFF;
    }

    @media screen and (max-width: 576px) {
        .search-domain {
            padding: 3em 2em;
        }
        .container .search-domain input {
		width: 100%;
		box-sizing: border-box;
	    }

        .contact {
            padding: 3em 2em;
        }

        .contact input, .contact textarea {
            width: 100%;
            display: block;
            margin-left: 0;
            margin-right: 0;
            box-sizing: border-box;
        }
    }
`

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

export const Plans = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
	width: 90%;
	position: relative;
	margin-left: auto;
	margin-right: auto;

    .plan {
	flex: 1 1 200px;
	max-width: 275px;
	margin-left: 20px;
	margin-right: 20px;
    }
    @media screen and (max-width: 576px) {
        .plan {
            max-width: 100%;
        }
    }

    .plan ul {
        padding: 0;
    }   

    .plan li {
        list-style: none;
        height: 50px;
        line-height: 50px;
        background-color: #e8e9ea;
        color: #333;
    }

    .plan .price {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #2cc76a;
        color: #FFF;
        text-align: center;
        line-height: 120px;
        font-size: 18px;
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -50px;
    }

    .plan .plan-name {
	text-transform: uppercase;
	font-size: 20px;
	font-weight: bold;
	color: #FFF;
	background-color: #202b34;
	padding-top: 50px;
	padding-bottom: 20px;
    }

    .plan .plan-btn {
        background-color: #2cc76a;
        color: #FFF;
        font-size: 24px;
        height: 75px;
        line-height: 75px;
        cursor: pointer;
    }

    .plan .recomend {
        background-color: #f45c57;
    }
`
