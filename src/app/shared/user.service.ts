import {Injectable} from '@angular/core';
import {User, UserType} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  signedInAs: string = "CBS Outdoor & Adventure"

  constructor() { }

  getUser() {
    return this.signedInAs
  }

  private _users: User[] = [];

  get users(): User[] {

    if (!this._users.length) {
      const names = [
        "Emil",
        "Daniel",
        "Også Daniel",
        "Amanda Hump",
        "Anita B. Jainow",
        "Andre Dickenme",
        "Mike Horacio",
        "Elvis Jackson",
        "Smølfine",
        "The artist formerly known as Emil",
        "Suka Blyant",
        "Sukker Blyant",
        "Faxe Kondi",
        "Faxe Kondi Free (0 Kalorier)",
        "D'Marcus Williums",
        "T.J. Juckson",
        "T'Variusness King",
        "Tyroil Smoochie-Wallace",
        "D'Squarius Green, JR.",
        "Ibrahim Moizoos",
        "Jackmerius Tacktheritrix",
        "D'Isiah T. Billings-Clyde",
        "D'Jasper Probincrux III",
        "Leoz Maxwell Jilliumz",
        "Javaris Jamar Javarison-Lamar",
        "Davoin Shower-Handel",
        "Hingle McCringleberry",
        "L'Carpetron Dookmarriot",
        "J'Dinkalage Morgoone",
        "Xmus Jaxon Flaxon-Waxon",
        "Saggitariutt Jefferspin",
        "D'Glester Hardunkichud",
        "Swirvithan L'Goodling-Splatt",
        "Quatro Quatro",
        "Ozamataz Buckshank",
        "Beezer Twelve Washingbeard",
        "Shakiraquan T.G.I.F Carter",
        "X-Wing @Aliciousness",
        "Sequester Grundelplith M.D.",
        "Scoish Velociraptor Maloish",
        "T.J. A.J. R.J. Backslashinfourth V.",
        "EEEEE EEEEEEEEE",
        "Donkey Teeth",
        "Tourque [Construction Noise] Lewith",
        "[The player formerly known as mousecop]",
        "Dan Smith",
        "Coznesster Smiff",
        "Elipses Corter",
        "Nyquillus Dillwad",
        "Bismo Funyuns",
        "Decatholac Mango",
        "Mergatroid Skittle",
        "Quiznatodd Bidness",
        "D'Pez Poopsie",
        "Quackadilly Blip",
        "Goolius Boozler",
        "Bisquiteen Trisket",
        "Fartrell Cluggins",
        "Blyrone Blashinton",
        "Cartoons Plural",
        "Jammie Jammie-Jammie",
        "Fudge",
        "Equine Ducklings",
        "Dahistorius Lamystorius",
        "Ewokoniad Sigourneth Juniorstein",
        "Man Georges",
        "Eqqsquizitine Buble-Schwinslow",
        "Huka'lakanaka Hakanakaheekalucka'Hukahakafaka",
        "King Prince Chambermaid",
        "Ladennifer Jadaniston",
        "Ladadadaladadadadada Dala-dadaladaladalada",
        "Harvard University",
        "[ Morse Code ]",
        "⬥︎♓︎︎■︎︎♑︎ ♎︎♓︎■︎♑︎⬧ (Wing Dings)",
        "Firstname Lastname",
        "God",
        "Squeeeeeeeeeeps",
        "Benedict Cumberbatch",
        "A.A. Ron Balakay",
        "Creme De La Creme",
        "Cosgrove Shumway",
        "Ha Ha Clinton-Dix",
        "Doin Ahanahue",
        "Legume Duprix",
        "Leger Douzable",
        "Quisperny G'Dunzoid Sr.",
        "Grunky Peep",
        "D'Brickashaw Ferguson",
        "Strunk Flugget",
        "Stumptavian Roboclick",
        "Cornellius 'Tank' Carradine",
        "Vagonius Thicket-Suede",
        "Marmadune Shazbot",
        "Swordless Mimetown",
        "Prince Amukamara",
        "J.R. Junior Juniors Jr.",
        "Faux Doadles",
        "Fozzy Whittaker",
        "Myriad Profiteroles",
        "Busters Brownce",
        "Turdine Cupcake",
        "Rerutweeds Myth",
        "Ishmaa'ily Kitchen",
        "Takittothu' Limit",
        "Snarf Mintz-Plasse",
        "Frostee Rucker",
        "Splendiferous Finch",
        "Triple Parakeey-Shoes",
        "Logjammer D'Baggagecling",
        "Exquisite Tea",
        "Les Mis 'Arables",
        "Job Interviewer",
        "Your Boss"
      ];

      const password = '123'

      const images = [
        'https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147',
        'https://www.vhv.rs/dpng/d/421-4210353_patrick-star-spongebob-style-patrick-star-drooling-hd.png',
        'http://pngimg.com/uploads/squirrel/squirrel_PNG15802.png',
        'https://voresmad.dk/-/media/voresmad/recipes/p/pebernoedder1.jpg',
        'https://seeklogo.com/images/H/hentai-haven-logo-B9D8C4B3B8-seeklogo.com.png',
        'https://lh3.googleusercontent.com/proxy/xJRokTn6K0T061BhoJaCq91KhpIoXbCVk-jW_b2YveiV_LZl9VBj02L9XRsfFRBieXp-6aI1S3e4j8oVo3sjX3F9DHI549jT_3y829u_iDsHA-cjybjH9c-KpeJWRj163-1oaxCg'
      ]

      const programmes = [
        'MSc in Business Administration and Management Science',
        'B.S in B.S',
        'MSc in Business Administration and E-business',
        'NEET'
      ]

      function rand(arr: any[]) {
        return arr[Math.floor(Math.random() * arr.length)];
      }


      for (let i = 0; i < 10; i++) {
        this._users.push(
          new User(
            rand(names),
            password,
            rand(images),
            Math.random() > 0.5,
            rand(programmes),
            Math.random() > 0.9 ? UserType.VOLUNTEER : UserType.ADMIN,
            new Date(),
            new Date(),
            []
          )
        )
      }
    }

    return this._users;
  }
}
