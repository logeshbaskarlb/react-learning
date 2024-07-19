
// eslint-disable-next-line react/prop-types
const PropsUsing = ({name, email, status}) => {
  return (
    <div>
      <article>
        <p>
           Hello {name},
           Your given email id is {email} and your status is {status}
        </p>
      </article>
    </div>
  )
}

export default PropsUsing
