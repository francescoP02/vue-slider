// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Vue.config.devtools = true;

const app = new Vue(
    {
        el : '#root',
        data : {
            currentSlide: 0,
            slides : [
                {
                    "image": "img/01.jpg",
                    "title": "Svezia",
                    "text": "Svezium ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."
                },
                {
                    "image": "img/02.jpg",
                    "title": "Svizzera",
                    "text": "Lorem ipsum helveticus"
                },
                {
                    "image": "img/03.jpg",
                    "title": "Gran Bretagna",
                    "text": "Lorem ipsum, perfida Britannia sit amet consectetur adipisicing elit."
                },
                {
                    "image": "img/04.jpg",
                    "title": "Germania",
                    "text": "Lorem germanicum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
                },
                {
                    "image": "img/05.jpg",
                    "title": "Paradise",
                    "text": "Et temporibus paradisiensis voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,"
                }
            ],
        },

        methods: {
            goForward: function() {
                this.currentSlide >= this.slides.length - 1 ? this.currentSlide = 0 : this.currentSlide++;
                console.log(this.currentSlide);
            },

            goBack: function() {
                this.currentSlide <= 0 ? this.currentSlide = this.slides.length - 1 : this.currentSlide--;
                console.log(this.currentSlide);
            },

            clickedThumb: function(index) {
                this.currentSlide = index;
            },
        }
    }
)