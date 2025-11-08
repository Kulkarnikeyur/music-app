import "./App.css";
import sa from "./assets/sa.mp3";
import re from "./assets/re.mp3";
import ga from "./assets/ga.mp3";
import ma from "./assets/ma.mp3";
import pa from "./assets/pa.mp3";
import dha from "./assets/dha.mp3";
import ni from "./assets/ni.mp3";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const showScoreRef = useRef();
  const swara = { sa, re, ga, ma, pa, dha, ni };

  // const [clicksubmit, setclicksubmit] = useState(0);
  const [notes, setnotes] = useState("");
  const [seq, setseq] = useState([]);
  const [clicksubmit, setclicksubmit] = useState(0);
  const [clickvs, setclickvs] = useState(0);

  const [clickedvs, setclickedvs] = useState(0);

  const [score, setscore] = useState(0);
  const [messe, setmesse] = useState("");
  const [iddd, setiddd] = useState("");
  let dusc = 0;
  let func = () => {
    let se = [];
    setclicksubmit(1);
    setclickvs(0);
    setclickedvs(0);
    let para = document.getElementById("t").value;
    for (let i = 0; i < para.length; i++) {
      if (para[i] == "s") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          se.push("sa");
          dusc += 2;
        } else {
          break;
        }
      } else if (para[i] == "r") {
        while (para[i] != "e" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          se.push("re");
          dusc += 2;
        } else {
          break;
        }
      } else if (para[i] == "g") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          se.push("ga");
          dusc += 2;
        } else {
          break;
        }
      } else if (para[i] == "m") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          se.push("ma");
          dusc += 2;
        } else {
          break;
        }
      } else if (para[i] == "p") {
        while (para[i] != "a" && i < para.length) {
          i++;
        }
        if (i < para.length) {
          se.push("pa");
          dusc += 2;
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
            se.push("dha");
            dusc += 3;
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
          se.push("ni");
          dusc += 2;
        } else {
          break;
        }
      }
    }

    setseq(se);

    if (se.length == 0) {
      alert("your paragraph is not at all musical bro!!");
    }
    let k = "";
    for (let i = 0; i < se.length; i++) {
      k += se[i];
      k += " ";
    }
    setnotes(k);

    let delay = 500; // 1 second delay before the first note
    for (let i = 0; i < se.length; i++) {
      let swar = swara[se[i]];
      setTimeout(() => {
        new Audio(swar).play();
      }, delay);
      delay += 500; // 0.5s note + 1s gap
    }
    let kk = Math.round((dusc * 10) / para.length);
    setscore(kk);

    if (kk < 5) {
      setmesse("Needs rhythm");
      setiddd("score-low");
    } else if (kk >= 5 && kk < 9) {
      setmesse("Nice flow!");
      setiddd("score-mid");
    } else if (kk >= 9) {
      setmesse("Beautiful cadence");
      setiddd("score-high");
    }
  };
  const handleViewScore = () => {
    setclickvs(1);
    setclickedvs(1);
  };
  useEffect(() => {
    if (clickedvs === 1) {
      showScoreRef.current.scrollIntoView({ behavior: "smooth" });
      setclickedvs(0);
    }
  }, [clickedvs]);
  return (
    <div id="body">
      <p id="name">ParaTune</p>
      <p id="tagline">see how musical your paragraph is!!</p>
      <div id="notes">
        <textarea
          type="text"
          id="t"
          onChange={(e) => {
            e.target.value = e.target.value.toLowerCase();
          }}
          autoFocus={true}
          required={true}
          placeholder="Enter your paragraph here..."
        />
        <input type="submit" id="su" onClick={func} />
      </div>

      {seq.length > 0 && clicksubmit === 1 && (
        <div id="show-seq">
          <div id="noteis">
            <p id="note">{notes}</p>
          </div>
          <button id="view-score" onClick={handleViewScore}>
            View Score
          </button>
        </div>
      )}
      {clickvs === 1 && (
        <div id="show-score" className={iddd} ref={showScoreRef}>
          <p id="scoore">{score}/10</p>
          <p id="message">{messe}</p>
        </div>
      )}
    </div>
  );
}

export default App;
