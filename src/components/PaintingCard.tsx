import { Artwork } from "../context/AppContext";

function PaintingCard(props: Artwork) {
    return ( 
        <div className="w-full rounded-lg overflow-hidden">
            <img 
            src={`https://www.artic.edu/iiif/2/${props.image_id}/full/400,/0/default.jpg`} 
            alt="thumbnail"
            className="w-full"
            onError={(e) => {
                const element = e.target.parentElement as HTMLDivElement;
                element.style.display = 'none';
            }}
            />
            <p className="my-2">{props.title}</p>
            <p className="text-sm">{props.artwork_type_title}, {props.dimensions}</p>
            <p className="text-sm">{props.artist_title}, {props.date_display}</p>
        </div>
    );
}

export default PaintingCard;