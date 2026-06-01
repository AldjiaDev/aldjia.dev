---
layout: post
title: "Les données structurées schema.org pour les artistes : VisualArtwork, Person, Event"
date: 2026-07-08
description: "Comment utiliser schema.org pour que Google comprenne que vos pages sont des œuvres d'art — et vous valorise dans les résultats enrichis."
author: "Aldjia Boughias"
categories: [SEO, Technique]
tags: [schema.org artiste, données structurées portfolio, VisualArtwork JSON-LD, SEO artiste]
image: /assets/images/blog/schema-org-artiste-visualartwork.jpg
---

Si vous avez déjà entendu parler de "données structurées" ou de "schema.org" sans bien comprendre ce que c'est, ni pourquoi ça vous concerne en tant qu'artiste, cet article est fait pour vous.

L'idée est simple : Google lit le texte de vos pages, mais ne les *comprend* pas toujours. Il sait qu'il y a du texte, des images, des liens. Mais est-ce que cette page parle d'une peinture, d'un vernissage, d'un artiste ? Pas toujours évident.

Les données structurées sont un vocabulaire standardisé — schema.org — qui permet de dire explicitement à Google : "cette page décrit une œuvre d'art" ou "cette personne est une artiste plasticienne". En retour, Google peut afficher des résultats enrichis dans ses pages de résultats.

## C'est quoi un résultat enrichi ?

Un résultat enrichi, c'est un résultat Google qui affiche plus qu'un simple titre + description. Ce peut être une étoile de note, une photo, un prix, une date, une information contextuelle.

Pour les artistes, les résultats enrichis peuvent prendre plusieurs formes :
- **Google Knowledge Panel** — un encadré avec votre photo, votre nom, votre activité, vos liens officiels
- **Résultats d'images enrichis** — vos œuvres avec leur titre, médium et auteur directement dans Google Images
- **Résultats d'événements** — votre prochain vernissage avec la date, le lieu et un lien direct

Ces affichages augmentent la visibilité et la crédibilité. Ils signalent aussi à Google que votre site est une source d'information structurée et fiable.

## Le type Person : déclarer votre identité professionnelle

Le premier schema à mettre en place sur votre site est `Person`. Il permet à Google de comprendre qui vous êtes.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prénom Nom",
  "jobTitle": "Artiste peintre",
  "url": "https://votre-site.com",
  "description": "Artiste plasticienne spécialisée en peinture abstraite, basée à Bordeaux.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bordeaux",
    "addressCountry": "FR"
  },
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "École des Beaux-Arts de Bordeaux"
    }
  ],
  "knowsAbout": [
    "Peinture abstraite",
    "Acrylique",
    "Art contemporain"
  ],
  "sameAs": [
    "https://www.instagram.com/votrenom",
    "https://www.linkedin.com/in/votrenom"
  ],
  "image": "https://votre-site.com/assets/images/portrait.jpg"
}
```

Les propriétés `alumniOf` (votre formation) et `knowsAbout` (vos domaines de compétence) sont particulièrement utiles pour que Google associe votre profil à des requêtes pertinentes.

Ce bloc JSON-LD se place dans la balise `<head>` de vos pages. Il est invisible pour vos visiteurs mais fondamental pour les moteurs de recherche.

## Le type VisualArtwork : structurer vos œuvres

C'est le schema le plus spécifique aux artistes — et le moins utilisé, car peu de plateformes généralistes l'implémentent. `VisualArtwork` permet de déclarer une œuvre avec toutes ses caractéristiques.

```json
{
  "@context": "https://schema.org",
  "@type": "VisualArtwork",
  "name": "Série Horizons #7",
  "creator": {
    "@type": "Person",
    "name": "Prénom Nom"
  },
  "artMedium": "Huile sur toile",
  "artworkSurface": "Toile de lin",
  "width": {
    "@type": "Distance",
    "name": "80 cm"
  },
  "height": {
    "@type": "Distance",
    "name": "120 cm"
  },
  "dateCreated": "2024",
  "image": "https://votre-site.com/assets/images/horizons-7.jpg",
  "description": "Grande composition en aplats de bleu et de blanc, jouant avec les tensions entre espace vide et matière accumulée.",
  "genre": "Peinture abstraite",
  "url": "https://votre-site.com/series/horizons/horizons-7/"
}
```

Ce type de données est particulièrement utile si vous avez des pages dédiées à chaque œuvre. Google Images peut alors afficher vos œuvres avec le titre, le médium et l'auteur directement dans les résultats — ce qui augmente les clics et la crédibilité.

Pour les séries, on peut aussi envisager le type `Collection` comme conteneur de plusieurs `VisualArtwork`, ce qui aide Google à comprendre la structure de votre portfolio.

## Le type Event : annoncer vos vernissages

Si vous avez un agenda d'expositions, le type `Event` permet d'annoncer vos vernissages et expositions d'une façon que Google peut afficher directement dans ses résultats.

```json
{
  "@context": "https://schema.org",
  "@type": "ExhibitionEvent",
  "name": "Exposition individuelle — Horizons",
  "startDate": "2026-09-12",
  "endDate": "2026-10-20",
  "location": {
    "@type": "Place",
    "name": "Galerie du Marais",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 rue de Bretagne",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  },
  "organizer": {
    "@type": "Person",
    "name": "Prénom Nom",
    "url": "https://votre-site.com"
  },
  "url": "https://votre-site.com/agenda/exposition-horizons-2026/",
  "description": "Exposition individuelle autour de la série Horizons — 15 peintures sur toile, du 12 septembre au 20 octobre 2026."
}
```

Pour que ces données soient utiles, votre agenda doit être structuré en pages dédiées (une page par exposition), pas une simple liste textuelle sur une page "Agenda".

## Comment valider vos données structurées

Une fois implémentées, vous pouvez vérifier que vos données sont correctement lues par Google en utilisant :

- **[validator.schema.org](https://validator.schema.org)** — collez votre URL ou votre code JSON pour voir si la syntaxe est valide
- **Google Search Console > Améliorations** — Google vous indique quels types de données structurées il a détectées sur votre site et s'il y a des erreurs

Ces outils sont gratuits et ne nécessitent aucune compétence technique particulière pour les utiliser.

## La réalité : tout ça demande un site bien construit

Les données structurées ne sont pas une baguette magique. Elles doivent s'appuyer sur un site avec des pages bien organisées (une page par série, une page par œuvre si besoin, une page agenda), des URLs stables, et un contenu textuel de qualité.

C'est pourquoi je les intègre systématiquement dans les portfolios que je crée pour [les artistes](/secteurs/artistes/). Ce n'est pas une option ajoutée à la fin — c'est pensé dès la conception de la structure du site.

---

Pour en savoir plus sur la mise en pratique, lisez notre article sur [comment référencer son nom d'artiste sur Google](/blog/referencer-nom-artiste-google/). Ou [prenez rendez-vous](/contact/) pour discuter de votre projet.
