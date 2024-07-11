import style from "./styles.css"

export default function ConferenceLayout({ children }) {
    return (
      <>
        <header style={style.header}>
            <h1>Taking tech to the globe</h1>
        </header>
        <section>{children}</section>
      </> 
    );
  }
  