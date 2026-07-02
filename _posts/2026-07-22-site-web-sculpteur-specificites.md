---
layout: post
audience: clients
title: "Créer un site web pour sculpteur : les spécificités que votre développeur doit connaître"
date: 2026-07-22
description: "Vues multiples, dimensions, matériaux, poids, exposition in situ — ce qu'un site de sculpteur doit montrer que la plupart des développeurs ne savent pas."
author: "Aldjia Boughias"
categories: [Artistes, Développement web]
tags: [site web sculpteur, portfolio sculpteur, site artiste plasticien, portfolio sculpture]
image: /assets/images/site-web-sculpteur-specificites.jpg
---

Un site pour sculpteur n'est pas un site pour peintre. Ce n'est pas non plus un site pour photographe. Les sculptures sont des objets dans l'espace — tridimensionnels, souvent monumentaux, toujours situés dans un contexte particulier. Un site web qui l'ignore rate une partie essentielle du travail.

J'ai accompagné des artistes plasticiens dont la pratique est tridimensionnelle, et à chaque fois, j'ai constaté que les plateformes génériques et les développeurs non spécialisés font les mêmes erreurs. Cet article liste les spécificités que votre site doit prendre en compte.

## La galerie multi-vues : une nécessité, pas une option

Une peinture se montre de face. Une sculpture se montre de partout.

La plupart des portfolios d'artistes présentent une image par œuvre — parfois deux. Pour un sculpteur, c'est insuffisant. Une pièce peut avoir une face frontale lisible, un profil révélateur, une vue de dos essentielle, et une vue en contre-plongée qui change tout.

**Votre site doit pouvoir afficher 4 à 8 vues par pièce**, idéalement dans une galerie légère et navigable au clavier. Ce n'est pas un luxe — c'est ce que font les galeries d'art sérieuses dans leurs catalogues en ligne.

D'un point de vue technique, cela demande :
- Une structure de données par pièce, pas une simple liste d'images
- Un système de galerie qui charge les images de façon performante (lazy loading, formats WebP)
- Une navigation fluide entre les vues sans recharger la page

## La fiche technique : titre, technique, dimensions, poids

Chaque œuvre d'un sculpteur a des caractéristiques qui doivent être documentées précisément. Non seulement pour les acheteurs et collectionneurs, mais aussi pour les institutions culturelles, les artistes en résidence, les transporteurs.

Une fiche technique complète pour une sculpture comprend :

- **Titre** (et éventuellement numéro de série)
- **Année de création**
- **Matériaux** : il ne suffit pas d'écrire "métal" — acier Corten, bronze patiné, inox brossé, fonte, aluminium brut, chacun a ses implications visuelles, techniques et logistiques
- **Dimensions** : hauteur × largeur × profondeur, en cm, avec la base si applicable
- **Poids** : indispensable pour les questions de transport, d'installation et d'assurance
- **Tirage** : édition unique, numérotée (ex : 3/5), épreuve d'artiste
- **Statut** : disponible, vendu, collection particulière, collection institutionnelle

Ces informations ont aussi une valeur SEO : une fiche structurée avec "sculpture bronze patiné, 85 × 40 × 35 cm" peut ranker sur des requêtes très spécifiques que des collectionneurs et des galeries utilisent effectivement.

## Les pièces vendues, les pièces disponibles

Un sculpteur dont la pratique est active vend des œuvres — et il est important que son site reflète cette réalité sans perdre la trace des œuvres vendues.

Deux approches sont possibles :

**L'approche catalogue** : toutes les œuvres restent visibles, qu'elles soient disponibles ou non. Les pièces vendues sont indiquées comme telles. C'est la logique des galeries et des maisons de ventes — un artiste dont les œuvres trouvent des acquéreurs est un artiste crédible.

**L'approche portfolio** : seules les œuvres disponibles à la vente ou à l'acquisition sont mises en avant. Les autres sont archivées dans une section "Travaux antérieurs" ou "Expositions passées".

Les deux approches se défendent. L'important est que votre site gère la mise à jour de ce statut simplement — idéalement via un back-office ou un fichier de données que vous pouvez modifier sans toucher au code.

## L'exposition in situ : montrer l'échelle

Une sculpture de 3 mètres de haut dans une salle blanche peut sembler intimidante sur une photo studio. Placée dans son contexte d'exposition, en rapport avec l'architecture et le corps humain, elle devient lisible.

**Les vues in situ sont essentielles pour les grandes pièces.** Si vous exposez régulièrement, documentez systématiquement vos installations : la sculpture dans l'espace d'exposition, avec des personnes dans le champ si possible (pour donner l'échelle), avec les conditions d'éclairage réelles.

Ces photos peuvent être présentées dans une section dédiée "Installations" ou intégrées à la fiche de chaque pièce. Elles répondent aussi à une question que les collectionneurs et les institutions se posent toujours : "Comment ça tient dans l'espace ?"

## Les visites d'atelier en ligne

La visite d'atelier est une pratique courante dans le monde de la sculpture — les collectionneurs et les galeristes viennent voir l'artiste au travail, comprendre les processus, voir les pièces en cours.

Un site peut prolonger cette expérience avec :
- Une section "Atelier" avec des photos ou vidéos du processus de création (fonte, taille, assemblage, soudure)
- Une vidéo courte présentant l'espace de travail
- Un formulaire de demande de visite d'atelier

Cette section humanise votre travail et permet à des interlocuteurs lointains (collectionneurs internationaux, galeries) de comprendre votre démarche sans se déplacer.

## Le transport et l'installation : ne pas éviter le sujet

Les sculptures posent des questions logistiques que les œuvres sur papier ou sur toile ne posent pas. Un collectionneur qui s'intéresse à une pièce de 200 kg pense immédiatement au transport, à l'installation, à l'assurance.

Votre site peut intégrer une section pratique sur ce sujet :
- Collaboration avec des spécialistes du transport d'œuvres d'art
- Conditions d'emballage et de livraison
- Pièces disponibles en édition transportable vs pièces nécessitant un montage spécifique

Ce n'est pas une question secondaire. C'est souvent ce qui débloque ou bloque une acquisition.

## Et la photogrammétrie 3D ?

Une tendance de fond dans la documentation des sculptures : la photogrammétrie, qui permet de créer un modèle 3D navigable à partir de photos. Des outils comme Three.js permettent ensuite d'intégrer ces modèles directement dans un site web, permettant aux visiteurs de faire tourner la pièce dans tous les sens.

C'est encore une approche de niche, mais elle est particulièrement pertinente pour les sculpteurs dont le travail repose sur des détails qui ne peuvent pas être capturés par une seule photo.

Si c'est quelque chose qui vous intéresse, c'est techniquement possible — et c'est le genre de fonctionnalité qui distingue un portfolio vraiment conçu pour votre pratique d'un template générique.

---

Vous êtes sculpteur et vous cherchez un site qui respecte la complexité de votre travail ? Découvrez [mon offre pour les artistes plasticiens](/secteurs/artistes/), consultez les [tarifs](/tarifs/) ou [prenez rendez-vous](/contact/) pour un premier échange. Je lis aussi avec plaisir [cet article sur les données structurées schema.org pour les artistes](/blog/schema-org-artiste-visualartwork/), qui explique comment bien documenter vos œuvres pour Google.
