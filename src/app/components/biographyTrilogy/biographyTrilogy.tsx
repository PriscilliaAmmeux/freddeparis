import Image from "next/image";

export default function BiographyTrilogy() {
  return (
    <section className="text-justify p-6 bg-blue-color color-text-white mb-6 w-full">
      <Image
        src="/books.png"
        alt="All books"
        width={200}
        height={200}
        className=" w-48 h-48 md:w-48 md:h-64 lg:w-48 lg:h-64"
      />
      <h3 className="text-2xl font-bold mb-4">Biographie</h3>
      <p className="mb-4">
        Les deux trilogies « Gaïa » et sa suite, « le Nouveau Monde » sont des
        fictions contemporaines qui n’ont pour seule ambition que de mettre
        l’homme face à ses responsabilités, à un moment crucial ou la survie de
        notre planète et de l’ensemble des espèces repose entre ses mains.
      </p>
      <p className="mb-4">
        « Car si l’homme n’a pas la sagesse de respecter la vie, alors le monde
        ne risque-t-il pas de continuer sans lui » *
        <span className="italic">*Théodore Monod</span>
      </p>
      <p className="mb-4">
        Les trois cycles de la trilogie « Gaïa », que sont « Game Over », « la
        Révolte des animaux » et « le Voyage ultime », sont construits autour de
        la théorie de James Lovelock*, célèbre scientifique britannique, père de
        l’hypothèse « Gaia », selon laquelle l’ensemble terre-atmosphère possède
        les caractéristiques essentielles des êtres vivants.
      </p>
      <p className="mb-4">
        La Terre, gigantesque organisme vivant, dont les écosystèmes naturels
        sont les organes, dont l’air et l’eau sont les fluides vitaux, et
        l’Homme, l’une des innombrables cellules au même titre que les autres
        espèces animales et végétales.
      </p>
      <p className="mb-4">
        De cette hypothèse fascinante, est née cette trilogie : Trois cycles,
        trois époques, trois personnalités emblématiques issues d’une même
        lignée, trois fictions originales dont Gaïa** est le lien, l’épicentre
        pour une seule quête : l’Harmonie du Monde, toutes les espèces vivantes
        en totale harmonie dans le respect du pacte originel.
        <span className="block mt-2 italic">
          *James Lovelock : Pour illustrer sa théorie — appelée hypothèse Gaïa
          —, l'écologiste anglais James Lovelock utilise, dès 1970, le nom et
          l'image de la déesse-mère Gaïa, personnifiant « la Terre comme un être
          vivant » (titre de son ouvrage fondateur). Selon lui, la Terre est un
          superorganisme, un système intelligent, s'autorégulant, pour permettre
          le développement de la Vie, objectif permis au moyen des lois
          gaïennes.
        </span>
        <span className="block mt-2 italic">
          **Gaïa : Dans la mythologie grecque, Gaïa est la déesse primordiale
          identifiée à la « déesse mère » et à la mère des Titans. Unie à
          Ouranos, le dieu du Ciel, elle engendra les six Titans et les six
          Titanides, puis les Cyclopes, suivi des Hécatonchires (les monstres
          aux cent bras) et enfin les Géants.
        </span>
      </p>
      <p className="mb-4">
        Les deux premiers cycles de la trilogie du « Nouveau Monde » : « les
        bicéphales », et « Morpheus ou la révolution poétique » mettent en scène
        le personnage de Népomucène, fils de Gaïa, « Créateur de Monde », déjà
        entrevu dans « le Voyage ultime ». A la recherche de sa mère, Népomucène
        doit affronter les bicéphales, des êtres humains dotés de deux cerveaux,
        qui ont éradiqué l’imagination et la puissance créatrice du cortex des
        humains monocéphales, pour les asservir.
      </p>
      <p className="mb-4">
        Cet affrontement, ainsi que ses excursions dans le passé des hommes de «
        l’Ancien Monde », sont des champs d’expérimentations qui n’ont pour
        d’autre finalité que de transcender la condition humaine de Népomucène.
        Il doit franchir et réussir ces étapes, pour prendre un jour la place de
        sa mère, car tel est son destin.
      </p>
      <p className="mb-4">
        Il est aidé dans cette quête par Morpheus, un traite à la solde des
        bicéphales qui a pris fait et cause pour Népomucène, en menant sa
        révolution, « une révolution des esprits », et par la Chimère, illustre
        représentante des créatures de « l’entre-deux-mondes » qui n’existent
        que grâce à l’imagination des hommes.
      </p>
      <p className="mb-4">
        Le troisième et dernier cycle de cette trilogie est en cours de
        rédaction pour une publication prévue sur 2026.
      </p>
    </section>
  );
}
