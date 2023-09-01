// De Sprite-klasse herken je van het voorbeeld dat we aan het
// boek hebben toegevoegd. Maar deze versie kan wat meer:
//  * Deze versie houdt zelf de lijst van alle sprites bij, en
//    zodra de functie "startEngine" wordt aangeroepen, zullen
//    alle sprites in de lijst zichzelf 60 keer per seconde updaten.
//  * Sprites hebben een `remove()` methode, waarmee ze uit het
//    spel gehaald kunnen worden.
//  * Sprites hebben nu properties voor hun width en height
//  * Er zijn ook static properties voor de width en height van de
//    <div> waar de sprites in zitten.
//  * De constructor-functie, en de update-methode zijn allebei
//    niet veranderd.
//
// Er is ook nog een extra subklasse gemaakt die gebruikt kan worden
// om botsingen (collisions) met andere sprites te detecteren.

class Sprite {
  // "Sprite" is een traditionele naam voor
  // bewegende plaatjes.

  constructor(imageUrl, x, y, xSpeed, ySpeed) {
    // Bewaar lokatie en snelheid.
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;

    // Maak een <image> element aan voor deze sprite.
    this.element = document.createElement("img");
    this.element.src = imageUrl;

    // Zet 'm op de goede plek met CSS transform en translate.
    this.element.style.transform = `translate( ${this.x}px, ${this.y}px )`;

    // Position:absolute is nodig om bovenstaande translate-truuk
    // te laten werken.
    this.element.style.position = "absolute";

    // voeg de <image> toe aan de <div>
    document.getElementById("animationDiv").appendChild(this.element);

    // the Sprite-class maintains the list of moving sprites itself.
    // Here we add the sprite to the list.
    Sprite.allSprites.push(this);
    console.log(Sprite.allSprites.length, "sprites in allSprites");
  }

  update() {
    // Bereken nieuwe plek.
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Zet 'm daar neer.
    this.element.style.transform = `translate( ${this.x}px, ${this.y}px )`;
  }

  remove() {
    // take this sprite out of the sprite-list
    const index = Sprite.allSprites.indexOf(this);
    if (index >= 0) {
      // the sprite was in the list;
      Sprite.allSprites.splice(index, 1); // deletes the item at 'index'
      console.log(Sprite.allSprites.length, "sprites in allSprites");
    }
    // take the image out of the DOM;
    document.getElementById("animationDiv").removeChild(this.element);
  }

  // Width and height of this sprite are read from the <img> element
  get width() {
    return this.element.clientWidth;
  }
  get height() {
    return this.element.clientHeight;
  }

  // Width and height of the game-world are read from the <div> that
  // contains all sprites.
  static get gameWidth() {
    return document.getElementById("animationDiv").clientWidth;
  }
  static get gameHeight() {
    return document.getElementById("animationDiv").clientHeight;
  }

  // Deze functie laat alle sprites bewegen.
  static startEngine() {
    function moveSprites() {
      Sprite.allSprites.forEach(ufo => ufo.update());
    }
    // setInterval maakt een timer die een functie periodiek aanroept. We roepen
    // 'm nu 60 keer per second aan (om de 17 milliseconden).
    setInterval(moveSprites, 17);
  }
}
// The Sprite-class maintains the list of moving sprites itself.
// Here we create the list as a property on the class itself.
Sprite.allSprites = [];

//////////////////////////////////////////////////////////////////////////////////////////

// CollidingSprite is een subklasse van Sprite, en kan, bij iedere update
// checken of-ie bostst met een andere sprite in de allSprites lijst.
// Deze klasse is bedoeld als een *abstracte* klasse. Je moet subklasses
// maken, en die subklasses bepalen hoe ze beslissen of er een botsing is,
// en wat ze doen wanneer er een botsing ontedkt wordt.

class CollidingSprite extends Sprite {
  constructor(...args) {
    super(...args);
  }
  update() {
    super.update();
    const colliders = Sprite.allSprites.filter(
      other => other !== this && this.isCollision(other)
    );
    colliders.forEach(other => {
      this.handleCollisionWith(other);
    });
  }

  // This *abstract* method checks if the other sprite collides with this one.
  // Return true to indicate a collision.
  // Override this method in subclasses to compare positions, and/or to ignore
  // certain sprite-types, or to use any other criterium.
  isCollision(otherSprite) {
    return false;
  }

  // This *abstract* method will be called when there is a collision between
  // this and the other Sprite. Override it in subclasses to respond to the
  // collision (with explosions, or score-increases, or bouncing etc.)
  handleCollisionWith(otherSprite) {
    throw new Error(
      `Method "collisionWith()" must be overridden in subclasses.`
    );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////

// BouncingSprite herken je van het voorbeeld in het boek.
// Maar deze versie is gebaseerd op CollidingSprite, en kan
// dus met botsingen omgaan.

class BouncingSprite extends CollidingSprite {
  constructor(url, x, y, xSpeed, ySpeed) {
    super(url, x, y, xSpeed, ySpeed);
  }

  update() {
    super.update();
    if (this.x < 0 || this.x > Sprite.gameWidth - this.width) {
      // Voorbij linkerrand (0) of rechterrand (wereld-breedte - image-breedte).
      this.xSpeed = -this.xSpeed; // Draai xSpeed de andere kant op.
    }
    if (this.y < 0 || this.y > Sprite.gameHeight - this.height) {
      this.ySpeed = -this.ySpeed;
    }
  }
}
