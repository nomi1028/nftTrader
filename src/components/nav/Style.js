import styled from 'styled-components'

const Style = styled.div`
height: 88px;
width: 100%;
background: rgb(45 0 247);
.nav_class{
    gap: 30px !important;
}
.container{
    max-width: 98%;
}
.dropdown {
  position: static !important;
}
.dropdown-item{
    color:blue;
}
/* Nav bar Style Tabash */
.dropdown-menu {
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15)!important;
  margin-top: 0px !important;
  width: 100% !important;
  text-align: center !important;
  min-height: 80px;
  color: #1636b8 !important;
}
.nav-link{
  color: #fff !important;
}
.dropdown-menu.show{
  display: inline-flex !important;
  color: #1636b8 !important;
}
.dropdown:hover .dropdown-menu {
  display: inline-flex;
  margin-top: 0; 
  color: #1636b8 !important;
}
.address_bar{
    border: 1px solid white;
    color: white;
    padding: 5px 20px;
    display: flex;
    gap:10px !important
}
.username{
    font-size: 10px;
}
.icon{
    width: 30px;
    height: 30px;
    object-fit: contain;
}
.WalletButon:hover{
    background: yellow !important;
    border: none;
}
.buyCrypto{
    background: white;
    color: blue;
    padding: 20px;
    width: 100%;
    border: none;
}
.modalPosition{
    position: absolute;
    top:20%;
    right: 2%;
}
`;

export default Style