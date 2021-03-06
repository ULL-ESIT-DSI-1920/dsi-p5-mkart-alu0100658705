import powerups from "../assets/images/champ-*.png";
export class KartPlayer extends HTMLElement {
  constructor(name, config) {
    super();
    this.attachShadow({
      mode: "open"
    });
    this.name = name;
    this.image = config.image;
    this.y = config.y;
    this.x = 0;
    this.opacidad = 1;
    this.b = -1;
    this.power = this.create_power();
    this.power_selected = "";
    this.active = 0;
  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return `
    :host {
      --x: ${this.x}px;
      position: absolute;
      display: inline-block;
      top: ${this.y}px;
      transform: translateX(var(--x));
      transition: transform 0.35s;
      will-change: transform;
    }
    #powerup {
      display: block;
      opacity: ${this.active};
      top: 1px;
      left: 10px;
      position:relative;
    }
    #avatar{
      opacity: ${this.opacidad};
      -webkit-filter: drop-shadow(${this.b}px  ${this.b}px  0 gold)
                      drop-shadow(-${this.b}px  -${this.b}px 0 gold);
      filter: drop-shadow(${this.b}px  ${this.b}px  0 gold) 
          drop-shadow(-${this.b}px) -${this.b}px 0 gold);
     }
   `;
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>${this.styles}</style>
        <img id="powerup" src="${this.power_selected}" width=64 heigt=64>
        <img id="avatar" src="${this.image}" alt="${this.name}" width=128 height=128>
      `;
  }

  addToRoad(road) {
    road.appendChild(this);
  }

  inc() {
    if (this.object() == 1) {
      this.x += this.powerUp();
      this.active = 1;
      if (this.powerUp() == 100) {
        this.power_selected = this.power[0];
      } else if (this.powerUp() == 50) {
        this.power_selected = this.power[2];
      } else {
        this.power_selected = this.power[1];
      }
    } else {
      this.active = 0;
      this.x += 20;
    }
    this.render();
  }

  powerUp() {
    var velocidad = [100, 50, 0];
    return velocidad[Math.floor(Math.random() * velocidad.length)];
  }

  object() {
    var act = [0, 0, 1]
    return act[Math.floor(Math.random() * act.length)]
  }

  win() {
    this.b = 5;
    this.active = 0;
    this.render();
  }

  lose() {
    this.opacidad = 0.5;
    this.active = 0;
    this.render();
  }

  isWinner() {
    if (this.x >= 950) {
      return true;
    }
  }

  restart() {
    this.x = 0;
    this.opacidad = 1;
    this.b = -1;
    this.render();
  }

  create_power() {
    var array = []
    for (const [name, image] of Object.entries(powerups)) {
      array.push(image);
    }
    return array;
  }
}

customElements.define("kart-player", KartPlayer);