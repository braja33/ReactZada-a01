import React from "react";

const App = () => {
  const proizvod = {
    ime: "mlijeko",
    količina: 4,
    pakiranje: "1L",
    rokTrajanja: "10 dana",
  };
  return (
    <>
      <h1>Informacije o proizvodu {proizvod.ime}</h1>
      <p>Količina {proizvod.količina}</p>
      <p>
        Pakiranje proizvoda {proizvod.ime} je {proizvod.pakiranje}
      </p>
      <p>
        Rok trajanja za {proizvod.ime} je {proizvod.rokTrajanja}
      </p>
    </>
  );
};

export default App;
