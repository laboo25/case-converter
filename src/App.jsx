import React, { useState, useEffect } from "react";
import "./App.css";
import Toast from "./Toast";
import StarNameModal from "./StarNameModal";
import { FaCopy } from "react-icons/fa6";
import { BsAlphabetUppercase } from "react-icons/bs";

export default function App() {
  const [channel, setChannel] = useState("");
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const [converterInput, setConverterInput] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedChannel = localStorage.getItem("channel");
    const savedTitle = localStorage.getItem("title");
    const savedStar = localStorage.getItem("star");
    const savedConverterInput = localStorage.getItem("converterInput");

    if (savedChannel) setChannel(savedChannel);
    if (savedTitle) setTitle(savedTitle);
    if (savedStar) setStar(savedStar);
    if (savedConverterInput) setConverterInput(savedConverterInput);
  }, []);

  useEffect(() => {
    localStorage.setItem("channel", channel);
  }, [channel]);

  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);

  useEffect(() => {
    localStorage.setItem("star", star);
  }, [star]);

  useEffect(() => {
    localStorage.setItem("converterInput", converterInput);
  }, [converterInput]);

  const handleCopy = (text) => {
    const trimmedText = text
      .split("●")
      .map((s) => s.trim())
      .join(" ● ");
    navigator.clipboard.writeText(trimmedText);
    setToastMessage("Text copied!");
  };

  const handleCopyConverterInput = () => {
    navigator.clipboard.writeText(converterInput);
    setToastMessage("Converter input copied!");
  };

  const handleChannelChange = (e) => {
    setChannel(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(capitalizeWords(e.target.value));
  };

  const handleStarChange = (e) => {
    setStar(e.target.value);
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const handleUppercaseChannel = () => {
    setChannel(channel.toUpperCase());
  };

  const handleUppercaseStar = () => {
    setStar(star.toUpperCase());
  };

  const handleConverterInputChange = (e) => {
    setConverterInput(e.target.value);
  };

  const handleUppercaseConverter = () => {
    setConverterInput(converterInput.toUpperCase());
  };

  const handleCapitalizeConverter = () => {
    setConverterInput(capitalizeWords(converterInput));
  };

  const handleLowercaseConverter = () => {
    setConverterInput(converterInput.toLowerCase());
  };

  const handleCloseToast = () => {
    setToastMessage("");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {toastMessage && (
        <Toast message={toastMessage} onClose={handleCloseToast} />
      )}
      <div className="channel-copy">
        <button className="cnl-btn" onClick={() => handleCopy("BLACKED")}>
          blkd
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("BLACKEDRAW")}>
          blkdraw
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("DEEPER")}>
          dpr
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("MILFY")}>
          milfy
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("TUSHY")}>
          tsy
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("TUSHYRAW")}>
          tsyraw
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("VIXEN")}>
          vxn
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("SLAYED")}>
          slayed
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("LHF")}>
          lhf
        </button>
        <button className="cnl-btn" onClick={() => handleCopy("KINK")}>
          kink
        </button>
      </div>
      <section className="inputs">
        <button
          className="copy-input"
          onClick={() => handleCopy(`${channel} ● ${title} ● ${star}`)}
        >
          <FaCopy />
        </button>
        <div className="input-container">
          <span>
            <input
              type="text"
              name="channel"
              value={channel}
              onChange={handleChannelChange}
            />
            <button className="uppercase" onClick={handleUppercaseChannel}>
              <BsAlphabetUppercase />
            </button>
          </span>
          <span className="separator"> ● </span>
          <span>
            <textarea
              rows="1"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </span>
          <span className="separator"> ● </span>
          <span>
            <textarea
              rows="1"
              name="star"
              value={star}
              onChange={handleStarChange}
            />
            <button className="uppercase" onClick={handleUppercaseStar}>
              <BsAlphabetUppercase />
            </button>
          </span>
        </div>
      </section>
      <div className="case-converter">
        <div className="extra-inpt">
          <input
            type="text"
            value={converterInput}
            onChange={handleConverterInputChange}
          />
          <div className="buttons">
            <button onClick={handleUppercaseConverter}>UPPERCASE</button>
            <button onClick={handleCapitalizeConverter}>Capitalize</button>
            <button onClick={handleLowercaseConverter}>lowercase</button>
            <button onClick={handleCopyConverterInput}>copy</button>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleOpenModal}>stanames</button>
        {isModalOpen && <StarNameModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
}
