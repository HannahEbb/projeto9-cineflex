

export default function Footer ({title, posterURL, diasemana, data}) {

    
    return (
        <div className="footer">
            <div className="poster-filme"><img width="48px" height="72px" src={posterURL} alt="HEY"/></div>
            <div>
                <div>{title}</div>
                <div>{diasemana}<span> </span>{data}</div>
            </div>
        </div>
    );
}