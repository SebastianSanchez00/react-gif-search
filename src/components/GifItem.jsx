
export const GifItem = ({id,title,url}) => {
  return (
    <div className="card" key={id}>
        <img src={url} alt={title} />
        <h2>{title}</h2>
       
        
    </div>
  )
}
