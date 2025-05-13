function VernerVentoGrid() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "10px 1fr 2fr 1.5fr",
        gap: "40px",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        height: "100vh",
      }}
    >
      {/* Columna 1: Barra roja vertical */}
      <div
        style={{
          backgroundColor: "#F44336",
          height: "100%",
          width: "100%",
        }}
      ></div>

      {/* Columna 2: Texto */}
      <div style={{ textAlign: "left", marginBlock: "1lh" }}>
        <img
          src="../public/imgs/vernermain.jpg"
          alt="Verner Panton Logo"
          style={{
            width: "100%",
            maxWidth: "650px",
            marginBottom: "20px",
            borderBottom: "8px solid #f44336",
          }}
        />
        <h1 style={{ color: "#f44336", margin: "0", fontSize: "2rem" }}>
          PANTON
        </h1>
        <p style={{ margin: "0", fontSize: "1rem" }}> VERNER</p>
        <p style={{ fontStyle: "italic", fontSize: "0.9", color: "#555" }}>
          Una conversación donde la innovación siempre tiene la última palabra.
        </p>
      </div>

      {/* Columna 3: Texto central */}
      <div
        style={{
          color: "#444",
          fontSize: "0.95rem",
          lineHeight: "1.6",
          marginBlock: "1lh",
        }}
      >
        <p>
          Diseño para provocar, para emocionar, para inspirar. Cada curva
          desafía la geometría tradicional. Cada tono desafía la neutralidad.
        </p>

        <p>En mis espacios, el color no adorna.</p>
        <p style={{ color: "#c62828", fontWeight: "bold", marginBlock: "1lh" }}>
          El color vive, <br />
          El color guía, <br />
          El color domina.
        </p>
        <p>
          Las texturas invitan a ser exploradas. Los muebles no solo se usan, se
          sienten.
        </p>
        <br />
        <p>Cada pieza es un diálogo entre el arte y la funcionalidad.</p>
        <p>
          Una conversación donde la innovación siempre tiene la última palabra.
        </p>
      </div>

      {/* Columna 4: Imagen decorativa */}
      <div>
        <img
          src="../public/imgs/bannerVernermain.png"
          alt="Silla con textura. Diseño relacionado a Verner Panton"
          style={{
            width: "100%",
            maxWidth: "650px",
            marginBottom: "20px",
            borderTop: "4px solid #f44336",
          }}
        />
      </div>
    </section>
  );
}

export default VernerVentoGrid;
