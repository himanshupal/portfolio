interface LinkToProps {
  name?: string
  url: string
}

const LinkTo: React.FC<LinkToProps> = ({ url, name }) => {
  return (
    <a href={url} className='link' target='_blank'>
      <span className='active'>[</span>
      {name || `\u279A`}
      <span className='active'>]</span>
    </a>
  )
}

export default LinkTo
