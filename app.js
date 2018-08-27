angular.module("Webmail", [])
  .controller("WebmailCtrl", function($scope) {
    $scope.dossiers = [{
        value: "RECEPTION",
        label: 'Boite de réception',
        emails: [{
            id: 1,
            from: "Albator",
            to: "joel",
            subject: "Je reviens",
            date: "20/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 2,
            from: "Capitaine Flam",
            to: "joel",
            subject: "Bisous de l'espace",
            date: "18/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          },
          {
            id: 3,
            from: "Pikachu",
            to: "joel",
            subject: "Pika pika !",
            date: "15/03/2014",
            content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika."
          },
          {
            id: 4,
            from: "Barbapapa",
            to: "joel",
            subject: "Hulahup Barbatruc",
            date: "13/03/2014",
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
            to: "joel",
            subject: "Bon anniversaire",
            date: "20/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 6,
            from: "Hiro Nakamura",
            to: "joel",
            subject: "Konichiwa",
            date: "18/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          },
          {
            id: 7,
            from: "Asuka Langley Soryu",
            to: "joel",
            subject: "Ca va chier",
            date: "20/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          }
        ]
      },
      {
        value: "ENVOYES",
        label: "Envoyés",
        emails: [{
            id: 8,
            from: "joel",
            to: "Albator",
            subject: "Bien la famille ?",
            date: "20/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 9,
            from: "joel",
            to: "Capitaine Flam",
            subject: "Gloubiboulga Night",
            date: "18/03/2014",
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
            to: "joel",
            subject: "Envie d'un nouveau frigo ?",
            date: "20/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis."
          },
          {
            id: 11,
            from: "Sofinnoga",
            to: "joel",
            subject: "Besoin d'argent ?",
            date: "18/03/2014",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>."
          }
        ]
      }
    ];
    $scope.dossierCourant = null;
    $scope.selectionDossier = function(dossier) {
      $scope.dossierCourant = dossier
    }
  })