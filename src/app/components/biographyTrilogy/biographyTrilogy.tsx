import Paragraph from "@/app/ui/paragraph/paragraph";
import Image from "next/image";

export default function BiographyTrilogy() {
  return (
    <section className="text-justify p-6 bg-blue-color text-white mb-6 w-full">
      <div className="flex justify-center p-0">
        <Image
          src="/books.png"
          alt="All books"
          width={400}
          height={400}
          className="object-contain w-64 h-64 md:w-80 md:h-96 lg:w-80 lg:h-96 m-0"
        />
      </div>
      <h3 className="text-3xl font-extrabold mb-6 text-center">Biographie</h3>

      <Paragraph>
        Les deux trilogies « Gaïa » et sa suite, « le Nouveau Monde » sont des
        fictions contemporaines qui n'ont pour seule ambition que de mettre
        l'homme face à ses responsabilités, à un moment crucial où la survie de
        notre planète et de l'ensemble des espèces repose entre ses mains.
      </Paragraph>

      <Paragraph>
        « Car si l'homme n'a pas la sagesse de respecter la vie, alors le monde
        ne risque-t-il pas de continuer sans lui ? »
        <span className="italic block mt-2">*Théodore Monod</span>
      </Paragraph>

      <Paragraph>
        Les trois cycles de la trilogie « Gaïa », que sont « Game Over », « la
        Révolte des animaux » et « le Voyage ultime », sont construits autour de
        la théorie de James Lovelock*, célèbre scientifique britannique, père de
        l'hypothèse « Gaia », selon laquelle l'ensemble terre-atmosphère possède
        les caractéristiques essentielles des êtres vivants.
      </Paragraph>

      <Paragraph>
        La Terre, gigantesque organisme vivant, dont les écosystèmes naturels
        sont les organes, dont l'air et l'eau sont les fluides vitaux, et
        l'Homme, l'une des innombrables cellules au même titre que les autres
        espèces animales et végétales.
      </Paragraph>

      <Paragraph>
        De cette hypothèse fascinante, est née cette trilogie : Trois cycles,
        trois époques, trois personnalités emblématiques issues d'une même
        lignée, trois fictions originales dont Gaïa** est le lien, l'épicentre
        pour une seule quête : l'Harmonie du Monde, toutes les espèces vivantes
        en totale harmonie dans le respect du pacte originel.
      </Paragraph>

      <span className="block mt-4 italic text-sm">
        *James Lovelock : Pour illustrer sa théorie — appelée hypothèse Gaïa —,
        l'écologiste anglais James Lovelock utilise, dès 1970, le nom et l'image
        de la déesse-mère Gaïa, personnifiant « la Terre comme un être vivant »
        (titre de son ouvrage fondateur).
      </span>
      <span className="block mt-4 italic text-sm mb-6">
        **Gaïa : Dans la mythologie grecque, Gaïa est la déesse primordiale
        identifiée à la « déesse mère » et à la mère des Titans.
      </span>

      <Paragraph>
        Les deux premiers cycles de la trilogie du « Nouveau Monde » : « les
        bicéphales », et « Morpheus ou la révolution poétique » mettent en scène
        le personnage de Népomucène, fils de Gaïa, « Créateur de Monde », déjà
        entrevu dans « le Voyage ultime ». À la recherche de sa mère, Népomucène
        doit affronter les bicéphales, des êtres humains dotés de deux cerveaux,
        qui ont éradiqué l'imagination et la puissance créatrice du cortex des
        humains monocéphales, pour les asservir.
      </Paragraph>

      <Paragraph>
        Cet affrontement, ainsi que ses excursions dans le passé des hommes de «
        l'Ancien Monde », sont des champs d'expérimentations qui n'ont pour
        d'autre finalité que de transcender la condition humaine de Népomucène.
        Il doit franchir et réussir ces étapes, pour prendre un jour la place de
        sa mère, car tel est son destin.
      </Paragraph>

      <Paragraph>
        Il est aidé dans cette quête par Morpheus, un traître à la solde des
        bicéphales qui a pris fait et cause pour Népomucène, en menant sa
        révolution, « une révolution des esprits », et par la Chimère, illustre
        représentante des créatures de « l'entre-deux-mondes » qui n'existent
        que grâce à l'imagination des hommes.
      </Paragraph>

      <Paragraph>
        Le troisième et dernier cycle de cette trilogie est en cours de
        rédaction pour une publication prévue sur 2026.
      </Paragraph>
    </section>
  );
}
