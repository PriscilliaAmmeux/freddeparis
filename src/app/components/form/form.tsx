"use client";

import Button from "@/app/ui/button/button";
import Title from "@/app/ui/title/title";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import buttonStyles from "../../styles/button.module.css";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && !form.current.checkValidity()) {
      return alert("Veuillez remplir tous les champs du formulaire."), false;
    }

    if (honeypot !== "") {
      alert("Vous êtes un robot");
      return;
    }

    const regex = /^(06|07)\d{8}$/;
    if (!regex.test(phone)) {
      alert(
        "Veuillez entrer un numéro de téléphone valide exemple 06 XX XX XX XX."
      );
      return;
    }

    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error("Environment variables are not defined");
    }

    if (!form.current) {
      throw new Error("Form is not rendered yet");
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          Swal.fire({
            title: "Succès!",
            text: "Votre message a bien été envoyé.",
            icon: "success",
          });
        },
        () => {
          Swal.fire({
            title: "Erreur!",
            text: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
            icon: "error",
          });
        }
      )
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex-1 flex flex-col bg-white-color text-blue-color md:bg-blue-color md:text-white rounded-md p-6 md:p-8 m-4 md:m-8"
      noValidate>
      <div className="flex justify-center items-center mb-4">
        <Title
          title="Formulaire de contact"
          className="text-blue-color md:text-white"
        />
      </div>

      <label htmlFor="name" className="sr-only">
        Votre nom
      </label>
      <input
        type="text"
        name="user_name"
        placeholder="Votre nom"
        required
        className="mb-4 p-2 border border-gray-300 rounded-md bg-white-color text-black md:bg-blue-dianne md:text-blue-dianne"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email" className="sr-only">
        Votre email
      </label>
      <input
        type="email"
        name="user_email"
        placeholder="mon-mail@exemple.com"
        required
        className="mb-4 p-2 border border-gray-300 rounded-md bg-white-color text-black md:bg-blue-dianne md:text-blue-dianne"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="phone" className="sr-only">
        Votre téléphone
      </label>
      <input
        type="tel"
        name="user_phone"
        placeholder="Votre numéro de téléphone"
        required
        className="mb-4 p-2 border border-gray-300 rounded-md bg-white-color text-black md:bg-blue-dianne md:text-blue-dianne"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="message" className="sr-only">
        Votre message
      </label>
      <textarea
        name="message"
        placeholder="Votre message"
        required
        className="mb-4 p-2 border border-gray-300 rounded-md bg-white-color text-black md:bg-blue-dianne md:text-blue-dianne h-32"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input
        type="text"
        name="honeypot"
        style={{ display: "none", visibility: "hidden", position: "absolute" }}
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
      />

      <Button
        type="submit"
        text="Envoyer mon message"
        className={`${buttonStyles["button-blue-border"]} rounded-md`}
      />
    </form>
  );
}
