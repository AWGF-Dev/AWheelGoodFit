import React, { useState, useEffect } from "react";
import Heart69 from "./UI/Heart69";

const FeedbackPrompt = () => {
  const [visible, setVisible] = useState(false); // DOM mount
  const [show, setShow] = useState(false);       // opacity/transform state
  const [wiggle, setWiggle] = useState(false);
  const [submitted, setSubmitted] = useState(false); 
  const [showThanks, setShowThanks] = useState(false); // new: show thank you message
  const [thanksVisible, setThanksVisible] = useState(false);
  const fadeDuration = 300;

  const questions = [
    "This resource has improved my knowledge of wheelchair fitting",
    "The 3D model is easy to navigate",
    "The information is easy to understand",
    "The website layout is visually appealing",
    "Overall, I am satisfied with the experience",
  ];

  const scaleLabels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  // Wiggle every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWiggle(true);
      setTimeout(() => setWiggle(false), 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const openPrompt = () => {
    if (!submitted) {
      setVisible(true);
      requestAnimationFrame(() => setShow(true));
    }
  };

  const closePrompt = () => {
    setShow(false);
    setTimeout(() => setVisible(false), fadeDuration);
  };

  const handleSelect = (qIdx, value) => {
    const updated = [...selectedAnswers];
    updated[qIdx] = value;
    setSelectedAnswers(updated);
  };

const handleSubmit = () => {
  if (selectedAnswers.every((ans) => ans !== null)) {
    setSubmitted(true);
    setThanksVisible(true);          // mount the element
    requestAnimationFrame(() => setShowThanks(true)); // start fade/slide in

    setTimeout(() => {
      setShowThanks(false);          // start fade/slide out
      setTimeout(() => setThanksVisible(false), 700); // unmount after animation
      closePrompt();
    }, 2500); 
  } else {

  }
};

  return (
    <>
      {/* Bottom prompt */}
      {!visible && !submitted && (
        <div
          onClick={openPrompt}
          className={`fixed hover:bg-blue-600 text-xl bottom-5 -right-16 transform -translate-x-1/2 bg-blue-500 text-white font-Pixelmono px-6 py-3 rounded-lg cursor-pointer shadow-lg transition-transform duration-300 ${
            wiggle ? "animate-wiggle" : ""
          }`}
        >
          Give Feedback
        </div>
      )}

      {/* Feedback overlay */}
      {visible && !submitted && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            transition: `opacity ${fadeDuration}ms`,
            opacity: show ? 1 : 0,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()} // prevent closing on background click
            className="bg-white p-8 rounded-xl w-200 max-w-full shadow-xl transition-all duration-300 ease-in-out"
            style={{
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Close button */}
            <button
              onClick={closePrompt}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-black mb-4">Feedback Survey</h2>
            <p className="text-gray-700 mb-6">
              Please provide your feedback using the scale below
            </p>

            {/* Likert scale header */}
            <div className="grid grid-cols-6 text-center font-semibold mb-4">
              <div></div> {/* empty corner */}
              {scaleLabels.map((label, i) => (
                <div key={i} className="text-xs px-1 text-black">
                  {label}
                </div>
              ))}
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-4">
              {questions.map((q, qIdx) => (
                <div key={qIdx} className="grid grid-cols-6 items-center gap-2">
                  <div className="text-left text-sm pr-2 text-black">{q}</div>
                  {[0, 1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      onClick={() => handleSelect(qIdx, n)}
                      className="flex justify-center items-center w-full h-8 cursor-pointer transition-transform duration-200"
                    >
                      <div
                        className={`w-4 h-4 rounded-full border border-gray-400 transition-all duration-200 transform ${
                          selectedAnswers[qIdx] === n ? "bg-blue-500" : "bg-gray-300"
                        } hover:scale-125`}
                      ></div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-10 mx-auto">
              <Heart69 />
            </div>

            {/* Submit button */}
            <div
              onClick={handleSubmit}
              className="mt-6 w-full bg-black font-Pixelmono text-center text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Submit
            </div>
          </div>
        </div>
      )}

{/* Thank you message overlay */}
{thanksVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div
      className="bg-green-400/80 border-2 border-white text-white font-Pixelmono px-6 py-3 rounded-xs shadow-lg font-bold text-xl transition-all duration-700 ease-in-out"
      style={{
        opacity: showThanks ? 1 : 0,
        transform: showThanks ? "translateY(-300px)" : "translateY(-320px)",
        transitionProperty: "opacity, transform",
      }}
    >
      Thanks for your feedback! 
    </div>
  </div>
)}

      {/* Wiggle keyframes */}
      <style>{`
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(4deg); }
          30% { transform: rotate(-3deg); }
          45% { transform: rotate(2deg); }
          60% { transform: rotate(-1deg); }
          75% { transform: rotate(1deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wiggle {
          animation: wiggle 0.6s ease-in-out;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default FeedbackPrompt;
