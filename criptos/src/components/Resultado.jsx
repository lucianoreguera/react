import styled from "@emotion/styled"

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display:flex;
  align-items: start;
  gap: 1rem;
  margin-top: 30px;
`

const Imagen = styled.img`
  display:block;
  width: 120px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Resultado = ({ cotizacion }) => {
    const { PRICE, CHANGEPCT24HOUR, IMAGEURL, HIGHDAY, LOWDAY, LASTUPDATE } = cotizacion
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
      <div>
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 hs: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado