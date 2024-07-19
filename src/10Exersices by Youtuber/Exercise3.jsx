
const Exercise3 = (props) => {
    const isLoggedIn = props?.isLoggedIn;
    const name = props?.name;
  return (
    <div>
      {isLoggedIn && <h1>Welcom, {name}!</h1>}
      {!isLoggedIn && <h1>Please Sign In!</h1>}
    </div>
  )
}

export default Exercise3
