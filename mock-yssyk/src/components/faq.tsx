"use client"
// components/DynamicDropdown.js
import { useState } from 'react';

const faqData = [
  { question: "If you sneeze & fart at the same time, is that a screenshot?", answer: "That would be an amusing way to think about it, but in reality, no physical phenomenon occurs other than the simultaneous actions." },
  { question: "How do they get those boats in glass bottles?", answer: "Boat models are carefully constructed outside the bottle and then inserted through the neck. This is usually done with small tools and a lot of patience." },
  { question: "I swallowed an ice-cube, but I haven't pooped it out yet? What gives?", answer: "The ice cube most likely melted soon after you swallowed it and has become part of the water in your system." },
  { question: "Should I tell my parents I'm adopted? I'm nervous", answer: "This is a personal decision and should be considered carefully. It's important to communicate openly and honestly." },
  { question: "Should I tell my parents I'm adopted? I'm nervous", answer: "This is a personal decision and should be considered carefully. It's important to communicate openly and honestly." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current open item
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="space-y-2 bg-white">
      {faqData.map((faq, index) => (
        <div key={index} className="border p-4 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h3 className="font-semibold">{faq.question}</h3>
            <button>
              {openIndex === index ? '-' : '+'}
            </button>
          </div>
          {openIndex === index && (
            <p className="mt-4">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

