import React from "react";
import "./About.css";
// import gambar01 from "./assets/images/gambar-01.webp";

const About = () => {
  return (
    <>
      <div id="about">
        <h1>About Us</h1>
        <div className="container-about">
          <div className="about-gambar">
            <img src='./assets/images/gambar-01.webp' alt=""  />
          </div>
          <div className="about-text">
            <p>
              Kelas XII TJKT 3 di SMK Negeri 1 Beringin adalah kelas yang unik
              dan penuh warna. Meskipun terkenal dengan kenakalan mereka, para
              siswa di kelas ini juga memiliki rasa tanggung jawab yang kuat.
              Dengan jumlah 33 siswa, mereka membuktikan bahwa di balik
              kenakalan terdapat semangat kekompakan dan kesadaran untuk saling
              membantu serta bertanggung jawab atas tindakan mereka. Hal ini
              menciptakan dinamika yang menarik di dalam kelas, di mana humor
              dan keceriaan berpadu dengan dedikasi terhadap pendidikan dan masa
              depan mereka.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
