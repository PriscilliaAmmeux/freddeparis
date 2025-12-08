import Navigation from "../navigation/navigation";

export default function Header() {
  return (
    <header className="background-image flex flex-col items-center justify-center h-full w-full">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>
      <div className="text-white text-center mb-10">
        <div className="md:hidden" aria-hidden="false">
          <p className="text-2xl font-cinzel">Deux trilogies</p>
          <p className="text-2xl mb-10">de Science-Fiction</p>
          <p className="text-3xl font-orbitron">Gaia</p>
          <p className="text-2xl font-cinzel">et</p>
          <p className="text-3xl font-orbitron">Le Nouveau Monde</p>
        </div>
        <div className="hidden md:block" aria-hidden="true">
          <p className="text-3xl mb-10 font-rajdhani">
            Deux trilogies de Science-Fiction
          </p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-5xl font-orbitron">Gaia</p>
            <p className="text-3xl font-cinzel">et</p>
            <p className="text-5xl font-orbitron">Le Nouveau Monde</p>
          </div>
        </div>
      </div>
      <h1 className="flex flex-col md:flex-row items-center text-center md:text-left text-white custom-font text-2xl md:text-3xl ">
        <span className="md:mr-2 font-rajdhani">Frédéric</span>
        <span className="font-rajdhani">DEPARIS</span>
      </h1>
    </header>
  );
}
