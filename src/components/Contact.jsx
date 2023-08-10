import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div id="contact" className="flex h-80 flex-col items-center py-12 ">
      <h2 className="mb-12 text-2xl">Contact</h2>
      <div className="mb-4 flex h-14 items-center justify-between gap-8 rounded bg-third px-4">
        <a href="mailto:arthurtrovato@gmail.com" className=" text-white">
          arthurtrovato@gmail.com
        </a>
        <button
          onClick={() => {
            // Copy the text inside the text field
            navigator.clipboard.writeText("arthurtrovato@gmail.com");

            // Alert the copied text
            alert("Adresse email copié");
          }}
          className=""
        >
          <FontAwesomeIcon
            icon="fa-solid fa-copy"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
      <div className="mb-4 flex h-14 items-center justify-between gap-8 rounded bg-third px-4">
        <a href="tel:+33760434390" className=" text-white">
          07 60 43 43 90
        </a>
        <button
          onClick={() => {
            // Copy the text inside the text field
            navigator.clipboard.writeText("0760434390");

            // Alert the copied text
            alert("Numéro de téléphone copié");
          }}
          className=""
        >
          <FontAwesomeIcon
            icon="fa-solid fa-copy"
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
    </div>
  );
}
