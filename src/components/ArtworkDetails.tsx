import { Artwork } from "../context/AppContext";

type setMode = {setMode : React.Dispatch<React.SetStateAction<'list' | 'detail'>>};


type ArtworkDetailsProps = Artwork & setMode;


function ArtworkDetails(props: ArtworkDetailsProps) {
    return (
        <div className="w-full p-24 flex gap-8 justify-center">
            <img
                src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`}
                alt="thumbnail"
                className="w-96 object-cover"
            />
            <div className="flex flex-col">
                <p className="text-5xl -mt-4 mb-4">{props.title}</p>
                <p className="text-sm">{props.artwork_type_title}, {props.dimensions}</p>
                <p className="text-sm mb-4">{props.artist_title}, {props.date_display}</p>
                {
                    props.description ?
                        <div className="" dangerouslySetInnerHTML={{__html:props.description}}></div>
                        :
                        <p className="">{props.thumbnail.alt_text}</p>
                }
                {
                    <div className="flex gap-4 my-8 flex-wrap">
                        {props.subject_titles.map(subject => <p className="text-sm bg-slate-200 px-4 py-2 rounded-full">{subject}</p>)}
                    </div>
                }
                <button className="text-xl" onClick={() => props.setMode('list')}>Back</button>
            </div>
        </div>
    );
}

export default ArtworkDetails;