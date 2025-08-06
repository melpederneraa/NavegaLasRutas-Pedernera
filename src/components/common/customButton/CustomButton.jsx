export const CustomButton = ( {texto, unaFuncion} ) => {
  return(
  <button
    style = {{
    backgroundColor: "steelblue",
    color: "white",
    padding: "12px 8px",
    border: "none",
    borderRadius: "12px",
    }}
   onClick={unaFuncion}
  >
    {texto}
  </button>
  )
}
