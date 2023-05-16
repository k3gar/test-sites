import React from 'react'

const Search = () => {
  const [Ip, setIp] = React.useState("")
  const [IPdata, SetIPData] = React.useState();

    function sendIp(e){
        let inputValue = document.getElementById('search_input')
        e.preventDefault()
        console.log(inputValue.value)
        setIp(inputValue.value === "" ? null : `&ipAddress=${inputValue.value}`)
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_Fhhu3EY5qKuqbPGR0LC7SIyWuO096${Ip}`)
        .then(response => response.json())
        .then(data => {
          SetIPData(data)
        })
    }


  return (
    <React.Fragment>
      <section className='firstSection'>
        <h1>IP Address Tracker</h1>
        <form action="" className='firstSection--form'>
          <input id="search_input" type="text" placeholder="Ingrese su IP" />
          <button type='button' id="search_button" onClick={sendIp}></button>
        </form>
        {
        IPdata === undefined 
        ? null 
        :
        <section className='firstSection--result'>
          <div>
            <p className="info-tittle">IP ADDRESS</p>
            <p className="ip-info">{IPdata.ip === undefined ? "" : IPdata.ip}</p>
          </div>
          <div>
            <p className="info-tittle">LOCATION</p>
            <p className="ip-info">
              {IPdata.location.region === undefined ? "" : IPdata.location.region}
            </p>
          </div>
          <div>
            <p className="info-tittle">TIMEZONE</p>
            <p className="ip-info">{`UTC${
              IPdata.location.timezone === undefined ? "" : IPdata.location.timezone
            }`}</p>
          </div>
          <div>
            <p className="info-tittle">ISP</p>
            <p className="ip-info">{IPdata.isp === undefined ? "" : IPdata.isp}</p>
          </div>
        </section>
      }
      </section>
      <section className='secondSection'>
      <div id="map"></div>
      </section>


    </React.Fragment>
  );
}

export default Search