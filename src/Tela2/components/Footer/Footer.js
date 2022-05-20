

export default function Footer ({title, posterURL}) {


    
    return (
        <div className="footer">
            <div className="poster-filme"><img width="48px" height="72px" src={posterURL} alt="HEY"/></div>
            <div>
                <div>{title}</div>
                <div>"Data do filme"</div>
            </div>
        </div>
    );
}