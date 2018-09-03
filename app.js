angular.module("Webmail", ["ngSanitize"])
  // le service location nous permet d'inclure l'etat de l'application dans l'url.
  .controller("WebmailCtrl", function($scope, $location, $filter) {
    $scope.dossiers = [{
        value: "RECEPTION",
        label: 'Boite de réception',
        emails: [{
            id: 1,
            from: "Albator",
            to: "Joel",
            subject: "Je reviens",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 2,
            from: "Capitaine Flam",
            to: "Joel",
            subject: "Bisous de l'espace",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          },
          {
            id: 3,
            from: "Pikachu",
            to: "Joel",
            subject: "Pika pika !",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika."
          },
          {
            id: 4,
            from: "Barbapapa",
            to: "Joel",
            subject: "Hulahup Barbatruc",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      },
      {
        value: "ARCHIVES",
        label: "Archives",
        emails: [{
            id: 5,
            from: "Candy",
            to: "Joel",
            subject: "Bon anniversaire",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 6,
            from: "Hiro Nakamura",
            to: "Joel",
            subject: "Konichiwa",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          },
          {
            id: 7,
            from: "Asuka Langley Soryu",
            to: "Joel",
            subject: "Ca va chier",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          }
        ]
      },
      {
        value: "ENVOYES",
        label: "Envoyés",
        emails: [{
            id: 8,
            from: "Joel",
            to: "Albator",
            subject: "Bien la famille ?",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 9,
            from: "Joel",
            to: "Capitaine Flam",
            subject: "Gloubiboulga Night",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      },
      {
        value: "SPAM",
        label: "Courrier indésirable",
        emails: [{
            id: 10,
            from: "Rue du discount",
            to: "Joel",
            subject: "Envie d'un nouveau frigo ?",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 11,
            from: "Sofinnoga",
            to: "Joel",
            subject: "Besoin d'argent ?",
            date: new Date(2012, 6, 24, 15, 30),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      }

    ];
    $scope.dossierCourant = null; // on initialiser le dossier courant à null pour commencer
    $scope.emailSelectionne = null // on initialise le emailSelectionne à null pour commencer
    // on implemente verEmail dans le controller
    $scope.versEmail = function(dossier, email) {
      $location.path("/" + dossier.value + "/" + email.id)
    }
    $scope.selectionDossier = function(dossier) {
      $scope.dossierCourant = dossier;
      $scope.emailSelectionne = null; // pour restaurer les ysteme de mail après la selection d'un mail
    };
    $scope.selectionEmail = function(email) {
      $scope.emailSelectionne = email;
    }
    // on ajoute les functions du tri
    //on initialise une variable pour le tri
    $scope.champTri = null;
    $scope.triDescendant = false;
    $scope.triemails = function(champ) {
      if ($scope.champTri == champ) {
        $scope.triDescendant = !$scope.triDescendant;
      } else {
        $scope.champTri = champ;
        $scope.triDescendant = false;
      }

    }

    //l'utilisation du filtre date selon la date

    // on crè une fonction pour trié les emails
    $scope.cssChevronsTri = function(champ) {
      return {
        glyphicon: $scope.champTri == champ,
        'glyphicon-chevron-up': $scope.champTri == champ && !$scope.triDescendant,
        'glyphicon-chevron-down': $scope.champTri == champ && $scope.triDescendant

      };
    }
    // recherche


    // watch permet de surveiller un function pour voir
    $scope.$watch(function() {
      // pour acceder au service $location
      return $location.path();
      // juste après le 2em paramètre de la méthode wath est appeler
    }, function(newPath) {
      var tabPath = newPath.split('/');
      //testé la longueur du tableau
      if (tabPath.length > 1) {
        // on recupère la valeur du dossier
        var valDossier = tabPath[1];
        //on regarde sur chacuns des dossiers pour récuperer le bon
        $scope.dossiers.forEach(function(item) {
          if (item.value == valDossier) {
            // on appele la méthode du dossier et on lui passe le dossier en question
            $scope.selectionDossier(item)
          }
        });
        // s'il y'a un autre élément dans tabPath alors dans le dossiers il y'a  l'ID du mail
      }
      if (tabPath.length > 2) {
        var idMail = tabPath[2];
        $scope.dossierCourant.emails.forEach(function(item) {
          // on verifie si c'est bien le mail que l'on recherche
          if (item.id == idMail) {
            // si oui alors on affiche notre mails
            $scope.selectionEmail(item);
          }
        })
      }
    });
    // on ajoute l'attribut recherche

    $scope.recherche = null;
    $scope.razRecherche = function() {
      $scope.recherche = null;

    }

  })
  .filter("surbrillanceRecherche", function() {
    return function(input, recherche) {
      if (recherche) {
        // Rechercher en ignorant la casse;
        return input.replace(new RegExp("(" + recherche + ")", "gi"),
          // on capture la valeur de la recherche avec "("+recherche +")"
          "<span class ='surbrillanceRecherche'>$1</span>")
      }
      return input;
    }
  });