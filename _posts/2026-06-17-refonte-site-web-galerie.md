---
layout: post
audience: clients
title: "Refonte de site web pour une galerie d'art : par où commencer ?"
date: 2026-05-20
description: "Votre site de galerie existe, mais il ne travaille plus pour vous. Avant de tout refaire, il faut comprendre ce qui ne va pas — et ce qui mérite d'être préservé. Ce que j'examine systématiquement avant une refonte."
image: /assets/images/refonte-site-galerie.jpg
tags: [galerie d'art, refonte site web, migration SEO, développement web, audit, art contemporain]
---

Refaire un site, ce n'est pas simplement changer l'apparence. C'est l'une des opérations les plus risquées pour le référencement naturel d'une structure — et l'une des plus mal préparées.

Beaucoup de galeries arrivent avec un site qui "date un peu", une mise en page qui ne passe plus sur mobile, un back-office que personne ne met à jour parce qu'il est trop compliqué. Elles veulent repartir de zéro. C'est compréhensible. C'est aussi souvent une erreur.

Repartir de zéro, c'est potentiellement perdre tout le référencement construit sur l'ancien site — les positions Google, les liens entrants, les pages indexées, l'historique de crawl. Si votre site existe depuis plusieurs années, même médiocrement construit, il a accumulé une autorité que vous ne voyez pas mais que Google mesure.

Avant de refaire, il faut auditer. Et avant d'auditer, il faut savoir quoi regarder.

## Ce que j'examine en premier : les URLs existantes

C'est la question la plus importante, et celle qui détermine tout le travail de migration.

Pour chaque URL qui existe sur l'ancien site et qui génère du trafic, il faut décider : est-ce qu'on la garde telle quelle ? Est-ce qu'on la modifie ? Est-ce qu'on la supprime ?

Si on la modifie ou la supprime sans mettre en place une redirection (301), on perd le référencement associé. Google a peut-être indexé la page d'un de vos artistes, une fiche d'exposition, un article de blog. Un collectionneur a peut-être mis cette page en favori. Un autre site a peut-être fait un lien vers elle. Tout cela disparaît si l'URL change sans redirection.

La migration SEO, c'est l'art de changer le site sans perdre ce que l'ancien a construit. C'est méticuleux, parfois fastidieux, toujours nécessaire.

## Ce que j'analyse ensuite : le contenu qui a de la valeur

Pas tout le contenu. Pas le Lorem ipsum que personne n'a jamais lu. Mais certaines pages de votre ancien site ont peut-être une vraie valeur SEO — même si le design est daté.

**Les pages artistes** : si vous représentez des artistes depuis plusieurs années et que leurs pages sont indexées sous leurs noms, c'est du référencement précieux. Un collectionneur qui cherche le nom d'un artiste que vous représentez doit toujours atterrir chez vous — pas sur une page 404 générée par une refonte mal planifiée.

**Les archives d'expositions** : beaucoup de galeries suppriment leurs anciennes expositions après la refonte, estimant qu'elles n'ont plus d'intérêt. C'est une erreur. Une exposition de 2019 sur un artiste qui a ensuite connu un regain d'intérêt peut générer du trafic des années après. Ces pages doivent être migrées et conservées.

**Les articles de blog** (si vous en avez) : les anciens articles bien référencés doivent être migrés avec leurs URLs ou redirigés. Supprimer un article qui se positionnait sur des requêtes de longue traîne, c'est supprimer du trafic qualifié.

## Le diagnostic technique : ce qui ralentit le site actuel

La vitesse de chargement est un facteur de classement Google et un facteur de conversion directe. Un site qui met plus de trois secondes à charger perd une part significative de ses visiteurs avant même qu'ils aient vu quoi que ce soit.

Les causes les plus courantes sur les sites de galeries que j'audite :

**Les images non optimisées.** Des photos d'œuvres importées en 8 Mo directement depuis un appareil photo, sans compression ni redimensionnement. Chaque page charge plusieurs dizaines de mégaoctets. Résultat : le site est inutilisable sur mobile avec une connexion normale.

**Les plugins inutilisés.** Sur les sites WordPress anciens, on trouve souvent dix, quinze, vingt plugins actifs dont la moitié ne servent plus à rien mais continuent de charger des ressources à chaque page.

**L'hébergement sous-dimensionné.** Un hébergement mutualisé à bas prix peut suffire pour un site personnel. Pour une galerie qui reçoit du trafic soutenu lors des vernissages ou des foires, il génère des ralentissements précisément aux moments où la visibilité est la plus importante.

**L'absence de mise en cache.** Sans cache, chaque visiteur force le serveur à recalculer entièrement chaque page à chaque visite. C'est lent et coûteux.

## Ce qu'on garde, ce qu'on améliore, ce qu'on refait

La refonte d'un site de galerie n'est pas forcément un remplacement total. Selon les cas, la bonne approche peut être :

**Une refonte partielle.** On conserve l'architecture et les URLs qui fonctionnent, on modernise le design, on améliore les performances techniques et l'expérience mobile. C'est souvent la solution la plus intelligente pour des galeries avec un historique en ligne solide.

**Une migration complète avec plan de redirection.** On repart sur une nouvelle architecture, un nouveau CMS ou framework, un nouveau design — mais avec un mapping précis de toutes les anciennes URLs vers les nouvelles. Pas une seule page importante n'est perdue.

**Une reconstruction ciblée.** On identifie les pages qui comptent vraiment (artistes, expositions récentes, contact, quelques articles de blog performants) et on les reconstruit proprement, en laissant le reste de côté ou en le redirigeant vers des pages existantes.

Le choix dépend de l'état du référencement actuel, de l'ampleur du changement souhaité, et du budget disponible.

## La question des données structurées : souvent absentes, toujours nécessaires

La plupart des anciens sites de galeries n'ont aucune donnée structurée schema.org. C'est normal — cette pratique s'est généralisée progressivement, et peu de prestataires généralistes la mettent en place.

La refonte est l'occasion idéale de les implémenter correctement dès le départ :
- `LocalBusiness` pour la galerie (adresse, horaires, géolocalisation)
- `VisualArtwork` pour les œuvres du catalogue
- `Person` pour les artistes représentés
- `ExhibitionEvent` pour les expositions

Ces balises ne changent rien à l'apparence du site. Elles changent la façon dont Google le comprend — et ouvrent la voie aux résultats enrichis dans les pages de recherche.

## Ce que j'attends d'une refonte réussie

Une refonte réussie, c'est un site qui :

- **Charge en moins de deux secondes** sur mobile avec une connexion standard
- **Conserve ou améliore les positions Google** sur les requêtes clés — artistes représentés, localisation, type de galerie
- **Est mis à jour régulièrement** parce que l'interface le permet sans assistance technique
- **Convertit les visiteurs en contacts** : formulaire de demande d'information accessible en deux clics, lien vers le contact direct visible sur chaque page
- **Représente votre galerie** avec la même exigence esthétique que votre espace physique

Ce n'est pas un projet standard. C'est un projet de confiance — entre vous, votre image, et les outils qu'on construit ensemble pour la servir.

---

*Votre site actuel ne reflète plus votre galerie ? Avant de tout refaire, [prenons 30 minutes pour auditer ce qui existe]({{ site.cal_url }}) — et décider ensemble ce qui mérite d'être gardé, amélioré ou reconstruit. Sans engagement.*

---

**À explorer :**
[Site web pour galerie d'art](/secteurs/galeries-art/) · [Combien coûte un site web pour une galerie ?](/blog/prix-site-web-galerie-art/) · [SEO pour galeries d'art](/blog/seo-galeries-art/) · [Pourquoi le site d'une galerie n'est pas un site comme les autres](/blog/site-internet-galerie-art/) · [Tarifs](/tarifs/)

<div class="text-center mt-5">
  <a href="/blog/" class="btn btn-outline-primary">
    ← Retour au blog
  </a>
</div>
