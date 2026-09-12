
//Lo Convertimos en funcion para usarlo en la exportacion (en lugar de default export const ProgressBar = () => {

export const ProgressBar = ({bgColor, completed}) => {


  const containerStyle = { 
    height: '25px',
    backgroundColor: '#e0e0de',
    borderRadius: '50px',
    margin: '50px',
    width: '100%'
  };
  const fillerStyle = { 
    backgroundColor: bgColor,
    height: '100%',
    width: `${completed}%`,    
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out'
  };
  const labelStyle = { 
    padding: '15px', 
    margin:10,
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyle}>{`${completed}%`}</span>
      </div>
    </div>
  )
}
