import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className=" bg-orange-50 font2 py-8">
      <div className=" w-[90%] mx-auto">
        <h1 className=" text-xl capitalize text-center font-bold">
          frequently asked questions
        </h1>
        <p className=" text-gray-500 capitalize text-sm text-center mb-6"></p>

        <Accordion
          title="Do you really love your girlfriend?"
          answer="Depend on the mood you fins me,I can lie she is wonderful and all but most times she's a BITCH."
        />

        <Accordion
          title="Ass or Boobs?"
          answer="Depend on the mood you fins me,I can lie she is wonderful and all but most times she's a BITCH."
        />

        <Accordion
          title="1M naira or a Night with Ayra star?"
          answer="Depend on the mood you fins me,I can lie she is wonderful and all but most times she's a BITCH."
        />

        <Accordion
          title="J cole, Kendrick lamar or Drake?"
          answer="Depend on the mood you fins me,I can lie she is wonderful and all but most times she's a BITCH."
        />
      </div>
    </div>
  );
};

export default Faq;
