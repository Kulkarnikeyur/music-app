import "./App.css";
import sa from "./assets/sa.mp3";
import re from "./assets/re.mp3";
import ga from "./assets/ga.mp3";
import ma from "./assets/ma.mp3";
import pa from "./assets/pa.mp3";
import dha from "./assets/dha.mp3";
import ni from "./assets/ni.mp3";
function App() {
  const swara = { sa, re, ga, ma, pa, dha, ni };
  let seq = [];
  let func = () => {
    seq = [];
    let para = document.getElementById("t").value;
    for (let i = 0; i < para.length; i++) {
      if (para[i] == "s") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          seq.push("sa");
        } else {
          break;
        }
      } else if (para[i] == "r") {
        while (para[i] != "e" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          seq.push("re");
        } else {
          break;
        }
      } else if (para[i] == "g") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          seq.push("ga");
        } else {
          break;
        }
      } else if (para[i] == "m") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          seq.push("ma");
        } else {
          break;
        }
      } else if (para[i] == "p") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          seq.push("pa");
        } else {
          break;
        }
      } else if (para[i] == "d") {
        while (para[i] != "h" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          while (para[i] != "a" && i < para.length) {
            i++;
          }
          if (i < para.length) {
            seq.push("dha");
          } else {
            break;
          }
        } else {
          break;
        }
      } else if (para[i] == "n") {
        while (para[i] != "i" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          seq.push("ni");
        } else {
          break;
        }
      }
    }
    let delay = 0;
    for (let i = 0; i < seq.length; i++) {
      console.log(seq[i]);
      let swar = swara[seq[i]];
      setTimeout(() => {
        new Audio(swar).play();
      }, delay);
      delay += 335;
    }
  };
  return (
    <>
      <div id="notes">
        <input type="text" id="t" style={{ texttransform: "lowercase" }} />
        <input type="submit" id="su" onClick={func} />
      </div>
    </>
  );
}

export default App;
