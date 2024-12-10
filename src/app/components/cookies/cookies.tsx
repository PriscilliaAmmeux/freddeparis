"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function setCookie(name: string, value: string, hours: number) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name: string) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export default function Cookies() {
  const [showPopup, setShowPopup] = useState(false);
  const [showCustomizePopup, setShowCustomizePopup] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [advertisingCookies, setAdvertisingCookies] = useState(false);

  useEffect(() => {
    const cookiesAccepted = getCookie("cookiesAccepted");
    if (!cookiesAccepted) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    setAnalyticsCookies(true);
    setAdvertisingCookies(true);
    setCookie("cookiesAccepted", "true", 24);
    setShowPopup(false);
  };

  const handleCustomize = () => {
    setShowPopup(false);
    setShowCustomizePopup(true);
  };

  const handleCancel = () => {
    setShowCustomizePopup(false);
  };

  const handleSave = () => {
    setCookie("analyticsCookies", analyticsCookies.toString(), 24);
    setCookie("advertisingCookies", advertisingCookies.toString(), 24);
    setCookie("cookiesAccepted", "true", 24);
    setShowCustomizePopup(false);
  };

  const handleRefused = () => {
    setAnalyticsCookies(false);
    setAdvertisingCookies(false);
    setCookie("cookiesAccepted", "false", 24);
    setShowPopup(false);
  };

  return (
    <section>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex flex-row items-center">
              <Image
                src="/cookies.webp"
                alt="Cookie"
                width={100}
                height={100}
              />
              <p className="pb-2 font-bold text-black">
                Salut c&apos;est nous, les COOKIES !
              </p>
            </div>
            <p className="mb-4 text-black">
              En cliquant sur &laquo; Tout accepter &raquo;, vous acceptez
              l&apos;utilisation de cookies techniques nécessaires au bon
              fonctionnement du site, ainsi que des cookies à des fins
              statistiques.
              <a href="/legalNotices" className="text-blue-700 underline">
                En savoir plus
              </a>{" "}
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleAccept}
                className="bg-green-800 text-white px-4 py-2 rounded hover:underline">
                Tout accepter
              </button>
              <button
                onClick={handleRefused}
                className="bg-red-700 text-white px-4 py-2 rounded hover:underline">
                Tout refuser
              </button>
              <button
                onClick={handleCustomize}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:underline">
                Personnaliser mes choix
              </button>
            </div>
          </div>
        </div>
      )}

      {showCustomizePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              Personnaliser les cookies
            </h3>
            <div className="mb-4">
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  checked={analyticsCookies}
                  onChange={() => setAnalyticsCookies(!analyticsCookies)}
                  className="mr-2 form-checkbox text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                />
                Autoriser les cookies analytiques (statistiques)
              </label>
            </div>
            <div className="mb-4">
              <label className="flex items-center text-black">
                <input
                  type="checkbox"
                  checked={advertisingCookies}
                  onChange={() => setAdvertisingCookies(!advertisingCookies)}
                  className="mr-2 form-checkbox text-blue-600 bg-white border-gray-300 focus:ring-blue-500"
                />
                Autoriser les cookies publicitaires
              </label>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:underline">
                Annuler
              </button>
              <button
                onClick={handleSave}
                className="bg-green-800 text-white px-4 py-2 rounded hover:underline">
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
