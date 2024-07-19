import { speakerJson } from "../page";

function fetchSpeakerInfo(params) {
    //fetch api call, db, etc
    //console.log("fabio");
    //console.log(speakerJson);
    console.log(params.params.slug);
    const speakerNameToFind = params.params.slug;
    const speakerInfo = speakerJson.speakers.find(
        (speaker) => speaker.name === speakerNameToFind
    );
    //console.log(speakerInfo);
    return speakerInfo;
}


export default async function Page(params) {

    //console.log(params);
    const speakerInfo = await fetchSpeakerInfo(params);

    const { name, bio, sessions } = speakerInfo;

    return (
        <div>
            <h3>{name}</h3>
            <h5>About: {bio}</h5>
            {sessions &&
                sessions.map(({name, id}) => (
                    <div key={id}>
                        <h5>session: {name} </h5>
                    </div>
                ))}
        </div>
    );

}