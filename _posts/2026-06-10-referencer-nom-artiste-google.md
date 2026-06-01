---
layout: post
title: "Comment référencer son nom d'artiste sur Google : guide pratique"
date: 2026-06-10
description: "Nom, technique, ville, données structurées — les leviers concrets pour qu'un artiste soit trouvé sur Google par les galeristes et collectionneurs."
author: "Aldjia Boughias"
categories: [SEO, Artistes]
tags: [seo artiste, référencement artiste, portfolio artiste, google artiste]
image: /assets/images/referencer-nom-artiste-google.jpg
---

Être artiste en 2026, c'est aussi exister sur Google. Quand un galeriste cherche votre nom après un vernissage, quand un collectionneur veut en savoir plus sur votre travail, quand un commissaire d'exposition explore des pistes — la première chose qu'ils font, c'est une recherche en ligne. Ce qui apparaît dans ces résultats dit quelque chose sur votre sérieux, votre accessibilité, votre présence professionnelle.

Ce guide est pratique. Pas de théorie abstraite sur "le SEO". Des leviers concrets, applicables, qui font la différence entre un artiste introuvable et un artiste visible.

## Pourquoi l'indexation de votre nom propre est prioritaire

Avant de viser "peintre abstrait Paris" ou "photographe art contemporain", commencez par un objectif plus simple et plus urgent : que votre prénom + nom soit bien référencé.

Quand quelqu'un tape "Sophie Tiercelin artiste" ou "Jean-Marc Dubois sculpteur", il faut que votre site soit le premier résultat — pas votre page Instagram, pas une mention dans un article de journal, pas la page d'une galerie qui vous représentait il y a cinq ans. Votre site.

Pour y parvenir, quelques règles simples :

**Votre nom complet doit apparaître dans la balise `<title>` de votre page d'accueil.** Pas juste "Bienvenue" ou le nom de domaine. Quelque chose comme : `Sophie Tiercelin — Peintre contemporaine, Paris`. Cette balise est ce que Google affiche dans ses résultats — elle doit être explicite.

**La balise `<meta name="description">` doit mentionner votre nom, votre technique et votre localisation.** C'est le texte qui s'affiche sous votre lien dans Google. 160 caractères maximum, chaque mot compte.

**Votre page "À propos" ou "Biographie" doit être une page autonome** avec une URL propre (ex: `/about/` ou `/biographie/`), pas juste une section de la page d'accueil. Les moteurs d'exploration indexent les pages, pas les sections.

## Pages dédiées par série : une stratégie souvent négligée

La plupart des portfolios d'artistes présentent toutes les œuvres dans une seule galerie. C'est visuellement logique, mais c'est SEO-médiocre.

Imaginez que vous fassiez de la peinture à l'huile sur toile de grand format et que vous exposiez aussi des aquarelles. Si votre site a une seule page "Galerie", Google ne sait pas comment la catégoriser. En revanche, si vous avez une page `/series/peintures-huile/` et une page `/series/aquarelles/`, chacune peut ranker pour des requêtes différentes.

**Créez une page par série ou par corps de travail.** Chaque page doit avoir :
- Un titre H1 descriptif : "Série *Horizons* — peintures à l'huile, 2023–2025"
- Un texte de présentation de 200 à 400 mots expliquant la démarche de cette série
- Des œuvres avec des attributs `alt` remplis : `alt="Sophie Tiercelin, Horizon #3, huile sur toile, 120×80 cm, 2024"`

Ces attributs alt ne sont pas là pour décorer. Ils permettent à Google Images de comprendre ce que montrent vos images — et d'envoyer du trafic sur vos pages quand quelqu'un cherche "peinture abstraite bleue grand format" ou "aquarelle paysage contemporain".

## Les données structurées Person et VisualArtwork

Les données structurées (schema.org) sont des balises JSON invisibles pour les visiteurs mais lues par Google. Elles lui permettent de comprendre qui vous êtes et ce que vous faites — pas juste d'indexer du texte, mais de créer une représentation structurée de votre identité professionnelle.

**Le type `Person`** vous permet de déclarer votre nom, votre métier, votre formation, vos liens réseaux sociaux, votre localisation. Un exemple minimal :

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sophie Tiercelin",
  "jobTitle": "Artiste peintre",
  "url": "https://sophietiercelin.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paris",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.instagram.com/sophietiercelin",
    "https://www.linkedin.com/in/sophie-tiercelin"
  ]
}
```

**Le type `VisualArtwork`** permet de structurer chaque œuvre. C'est particulièrement utile si vous vendez en ligne ou si vous souhaitez que vos œuvres remontent dans Google Images avec des informations précises :

```json
{
  "@context": "https://schema.org",
  "@type": "VisualArtwork",
  "name": "Horizon #3",
  "creator": { "@type": "Person", "name": "Sophie Tiercelin" },
  "artMedium": "Huile sur toile",
  "width": "80 cm",
  "height": "120 cm",
  "dateCreated": "2024",
  "artworkSurface": "Toile de lin"
}
```

Ces balises ne sont pas complexes à implémenter, mais elles demandent une organisation propre de votre contenu. C'est l'un des avantages d'un site sur mesure par rapport à un template Squarespace : vous pouvez les intégrer précisément là où elles sont utiles.

## CV HTML plutôt que PDF

Votre CV d'artiste (expositions, prix, résidences, publications, formations) est un contenu de grande valeur pour le SEO. Le problème : la plupart des artistes le proposent en PDF à télécharger.

Google indexe mal le contenu des PDF. Il indexe très bien le texte HTML.

**Créez une page `/cv/` en HTML** avec votre parcours complet. Structurez-la en sections claires : expositions individuelles, expositions collectives, résidences, prix et distinctions, publications, collections. Chaque ligne d'une exposition est une occasion de mentionner le nom de la galerie, la ville, l'année — autant de termes que Google peut indexer.

Si une galerie vous a représenté à Lyon, votre page CV peut vous faire ranker sur "artiste exposé à [nom de la galerie Lyon]". C'est de la longue traîne, mais ce sont souvent les recherches les plus qualifiées.

## L'importance de la constance

Le SEO n'est pas une action ponctuelle. C'est une pratique régulière. Mettre à jour votre site après chaque exposition, ajouter vos nouvelles œuvres avec des descriptions soignées, publier un texte de temps en temps sur votre démarche — ces actions s'accumulent et construisent une autorité que Google reconnaît sur la durée.

Un site mis à jour régulièrement est exploré plus souvent par les robots de Google. C'est mécanique.

---

Si vous souhaitez mettre en place tout cela pour votre portfolio, je vous accompagne de la conception à la mise en ligne. Découvrez [mon offre pour les artistes](/secteurs/artistes/) ou [prenez rendez-vous]({{ site.cal_url }}) pour un premier échange de 30 minutes.
