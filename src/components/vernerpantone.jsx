function PantonAppreciationGrid() {
  return (
    <section
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        fontFamily: "sans-serif",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
          zIndex: "0",
        }}
      >
        <div style={{ backgroundColor: "#9c27b0", width: "10%" }} />
        <div style={{ backgroundColor: "#f44336", width: "10%" }} />
        <div style={{ backgroundColor: "#fdd835", width: "10%" }} />
        <div style={{ backgroundColor: "#4a148c", width: "10%" }} />
        <div style={{ backgroundColor: "#880e4f", width: "10%" }} />
        <div style={{ backgroundColor: "#ffffff", width: "10%" }} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: "2",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
          padding: "60px",
          alignItems: "start",
        }}
      >
        {/* Columna 1 */}
        <div>
          <img
            src="/imgs/bannerVernermain.png"
            alt="Interior retro"
            style={{ width: "100%", height: "auto", borderRadius: "4px" }}
          />
        </div>
        {/* Columna 2*/}

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <img
            src="/imgs/Vernermain.jpg"
            alt="Verner Panton 1"
            style={{ width: "50%", borderRadius: "4px" }}
          />
          <img
            src="/imgs/vernercolorscol2.png"
            alt="Diseño gráfico"
            style={{ width: "100%", borderRadius: "4px" }}
          />
        </div>

        {/* Columna 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <img
            src="/imgs/vernerprofile.png"
            alt="Verner Panton 2"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="/imgs/wavesverner.png"
            alt="Diseño ondas"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>

        {/* Texto lateral */}
        <div
          style={{
            position: "absolute",
            top: 60,
            right: 60,
            textAlign: "right",
            zIndex: 3,
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#444",
          }}
        >
          <p>
            <em>Vivencia</em>
          </p>
          <p>
            <em>Guía</em>
          </p>
          <p>
            El <span style={{ color: "#c62828" }}>color</span>
            <br /> domina.
          </p>
        </div>

        {/* Título superior izquierdo */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            zIndex: 3,
            fontSize: "2rem",
          }}
        >
          <span style={{ fontStyle: "italic" }}>Mi</span>{" "}
          <span style={{ fontWeight: "300" }}>Apreciación</span>
        </div>
      </div>
    </section>
  );
}

export default PantonAppreciationGrid;
