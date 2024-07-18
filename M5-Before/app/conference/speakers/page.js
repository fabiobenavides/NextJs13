import styles from "../conference.module.css";

// Static site generation with revalidation
async function fetchSpeakers() {
  const response = await fetch(
    "https://raw.githubusercontent.com/adhithiravi/Consuming-GraphqL-Apollo/master/api/data/speakers.json",
    {next: {revalidate: 20}}
  );

  const data = await response.json();
  return data;
}

export default async function Page() {

  const data = await fetchSpeakers();

  return (
    <div className={styles.parentContainer}>
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        Last Rendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Welcome to Globomantics Speakers</h1>

      {data.speakers.map(({id, name, bio}) => (
        <div key={id} className={styles.infoContainer}>
          <h3 className="text-2xl font-bold">{name}</h3>
          <h5 className="text-2xl font-bold">{bio}</h5>
        </div>

      ))} 

    </div>
  );
}
