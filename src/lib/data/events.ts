import aceclutchers from '$lib/assets/events/aceclutchers.jpg';
import autocoders from '$lib/assets/events/autocoders.jpg';
import binarybishops from '$lib/assets/events/binarybishops.jpg';
import communix from '$lib/assets/events/communix.jpg';
import bountyhunt from '$lib/assets/events/bountyhunt.png';
import harddrive from '$lib/assets/events/harddrive.jpg';
import WEB_F from '$lib/assets/Event_cards/WEB_F.png';
import BH_F from '$lib/assets/Event_cards/BH_F.png';
import ACE_F from '$lib/assets/Event_cards/ACE_F.png';
import COM_F from '$lib/assets/Event_cards/COM_F.png';
import AUTO_F from '$lib/assets/Event_cards/AUTO_F.png';
import SMASH_F from '$lib/assets/Event_cards/SMASH_F.png';
import HD_F from '$lib/assets/Event_cards/HD_F.png';
import seminar_1 from "$lib/assets/events/seminar_1.jpeg"
import seminar_2 from "$lib/assets/events/seminar_2.jpeg"

export interface Event {
  id: string;
  name: string;
  desc: string;
  long_desc: string;
  card_image: string;
  image: string;
  icon: string;
  amount: number[];
  date: string;
  players: number[];
  type: string[];
  payment_links: string[];
  hide: boolean;
}


export const events: Event[] = [
  {
    hide: false,
    id: "AutoCoders",
    name: "Autocoders",
    long_desc:
      "AutoCoders is a thrilling tech odyssey where minds ignite in a three-stage coding crescendo. Round 1 sets neurons racing with a grueling quiz, separating code warriors from the rest. Round 2 unfurls an epic battle in competitive coding, a realm where algorithms duel. Round 3 ups the ante, making only the sharpest minds emerge victorious, forging legends in the world of code.",
    desc: "Roudn",
    amount: [50_00, 80_00], // 100.00
    image: autocoders,
    card_image: AUTO_F,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ Nov 2022",
    players: [1, 2],
    type:["", ""],
    payment_links: [
      'https://rzp.io/l/0l3VB4xMnc',
      'https://rzp.io/l/8bn4CfyBU',
      // 'https://rzp.io/l/8K50JlbU',
    ]
  },
  {
    hide: false,
    id: "Communix",
    name: "Communix",
    long_desc:
      "Communix, the battle of orators, unfolds in three captivating rounds. Round 1 unleashes 1v1 debate titans, where words become weapons. Round 2 tests wits with extempore speeches. In Round 3, competitors craft impromptu tales, weaving narratives on the spot using at least ten of the given twenty words. Communix is where great speech meets quick thinking, taking word-pirates on an exciting adventure into uncharted territory.",
    desc: "You can talk but, can you communix!?",
    amount: [40_00], // 100.00
    image: communix,
    card_image: COM_F,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ Nov 2022",
    players: [1],
    type: [""],
    payment_links: [
      "https://rzp.io/l/t13epeW",
    ]
  },
  {
    hide: false,
    id: "WebCraft",
    name: "WebCraft",
    long_desc:
      "Embark on a coding journey from grasshopper to apprentice and, ultimately, master! Our web development event offers challenges for all skill levels. Test your algorithmic skills, learn, and rise through the ranks. Seize this opportunity to prove your coding prowess and become a true web development master!",
    desc: "When you see a good move, look for better one",
    amount: [60_00, 100_00], // 100.00
    image: binarybishops,
    card_image: WEB_F,
    icon: "clarity:bar-code-line",
    date: "13ᵗʰ Nov 2022",
    players: [1, 2, 4],
    type:["", ""],
    payment_links: [
      'https://rzp.io/l/LPNQeJ1zt',
      'https://rzp.io/l/IPGVIAOl2U',
      'https://rzp.io/l/IPGVIAOl2U',
    ]
  },
  {
    hide: false,
    id: "BountyHunt",
    name: "Bounty Hunt",
    long_desc:
      "Jake and The NeverLand Pirates or Jack Sparrow we’ve been pretty curious about those ‘treasure hunting games’ isn’t it? We present to you the most exciting event packed with exhilarating activities. Bring on your squad and unravel the mysteries hidden in the entangling hallways of GCOEN. You may register with a team of 2 - 4 members.",
    desc: "Let the hunt begin… !!!",
    amount: [200_00], // 100.00
    image: bountyhunt,
    card_image: BH_F,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ & 13ᵗʰ Nov 2022",
    players: [4],
    type:[""],
    payment_links: [
      'https://rzp.io/l/C7ZnM1j',
      // "about:blank"
    ]
  },
  {
    hide: false,
    id: "AceClutchers",
    name: "Ace Clutchers",
    long_desc:
      "In Valorant, we're not just good; we're legendary! Our headshots are like poetry, and our strategies, works of art. In BGMI, our squad co-ordination wins us chicken dinners for fortnights in a row. We're also the Kings and Queens of Chess, and you're in for a royal beatdown! So, if you think you can step up to the big leagues, prepare to be schooled.",
    desc: "One life, one chance",
    amount: [200_00, 150_00, 30_00], // 100.00
    image: aceclutchers,
    card_image: ACE_F,
    icon: "clarity:bar-code-line",
    date: "12ᵗʰ & 13ᵗʰ Nov 2022",
    players: [5, 5, 1],
    type:["VALORANT", 'BGMI(SOLO)', 'BGMI'],
    payment_links: [
      'https://rzp.io/l/u5LTH9kE5',
      'https://rzp.io/l/aDRCQH9',
      'https://rzp.io/l/BxK7OAT'
    ]
  },
  {
    hide: false,
    id: "HardDrive",
    name: "Hard Drive",
    long_desc:
      "Join us in a galaxy far, far away for the ``Hard Drive: Galactic Cargo Run.`` You will first be trained in the Jedi temple to handle your robot, then you will go forth to complete your mission. Compete with other Jedis using provided working robots to move eight precious cargo boxes to the center. Time is of the essence, and the fastest Jedi mechanic will claim victory. May the speediest droid-master win this interstellar challenge!",
    desc: "Don’t Rush But be Expeditious!?",
    amount: [40_00], // 100.00
    image: harddrive,
    card_image: HD_F,
    icon: "clarity:bar-code-line",
    date: "13ᵗʰ Nov 2022",
    players: [1],
    type:[""],
    payment_links: [
      'https://rzp.io/l/3ELT4ABmn',
    ]
  },
    {
    hide: false,
    id: "Smash",
    name: "SMASH",
    long_desc:
      "For the one's having a knack of exploring the visionary domain of Aeromodelling  we've got a great talk awaiting for y'all! ✈ With us we'll be having Dr. Rajesh Joshi, the director of Aerovision India. Sir will be hosting a seminar on Aeromodelling.",
    desc: "Don't miss this opportunity, it's going to be fun!!",
    amount: [0], // 100.00
    image: seminar_2,
    card_image: SMASH_F,
    icon: "clarity:bar-code-line",
    date: "13ᵗʰ Nov 2022",
    players: [1],
    type:[""],
    payment_links: [
      'https://chat.whatsapp.com/CdapqnwhvY3E8MJhw7jmHw',
    ]
  },
  // {
  //   hide: false,
  //   id: "events-7",
  //   name: "Seminar on Data Science & Machine Learning",
  //   long_desc:
  //     "For the one's having a knack of exploring the visionary domain of 𝗗𝗮𝘁𝗮 𝘀𝗰𝗶𝗲𝗻𝗰𝗲 𝗮𝗻𝗱 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 .we've got a great talk awaiting for y'all! ✈ With us we'll be having Mr. Hemant Surjuse, BSC in computer science and MCA ,who has served for IBM and currently a part of Bombay stock Exchange. Sir will be hosting a webinar on data science and machine learning. ",
  //   desc: "Don't miss this opportunity, it's going to be fun!!",
  //   amount: [0], // 100.00
  //   image: seminar_1,
  //   card_image: webcraft,
  //   icon: "clarity:bar-code-line",
  //   date: "12ᵗʰ Nov 2022",
  //   players: [1],
  //   type:[""],
  //   payment_links: [
  //     'https://chat.whatsapp.com/E5iuCRmduqx3efCbzHByMf',
  //   ]
  // },
  // {
  //   id: "events-6",
  //   name: "Seminar",
  //   long_desc:
  //     "Coming Soon...",
  //   desc: "Coming Soon",
  //   amount: [0], // 100.00
  //   image: "https://placeimg.com/192/108/tech",
  //   icon: "clarity:bar-code-line",
  //   date: "12 Nov 2022",
  //   players: [1],
  //   type:[""],
  //   payment_links: [
  //     '/register/events-6',
  //   ]
  // },
  // {
  //   id: "events-1",
  //   name: "CoderCut v6.1",
  //   long_desc: "Longer CoderCut v6.9",
  //   desc: "CoderCut v6.9",
    // amount: [50_00, 80_00, 120_00], // 100.00
  //   image: "https://placeimg.com/192/108/tech",
  //   icon: "simple-icons:codereview",
  //   date: "2021-09-01",
  //   players: [1, 2, 3],
  // },
  // {
  //   id: "events-2",
  //   name: "CoderCut v6.2",
  //   long_desc: "Longer CoderCut v6.9",
  //   desc: "CoderCut v6.9",
  //   amount: 102_00, // 100.00
  //   image: "https://placeimg.com/192/108/tech",
  //   icon: "bx:code-block",
  //   date: "2021-09-01",
  //   players: 1,
  // },
];

/* {
    id: "events-3",
    name: "CoderCut v6.3",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 103_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "ci:qr-code-1",
    date: "2021-09-01",
    players: 5,
  },
  {
    id: "events-4",
    name: "CoderCut v6.4",
    desc: "CoderCut v6.9",
    long_desc: "Longer CoderCut v6.9",
    amount: 104_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "cib:code-climate",
    date: "2021-09-01",
    players: 1,
  },
  {
    id: "events-5",
    name: "CoderCut v6.5",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 105_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "carbon:repo-source-code",
    date: "2021-09-01",
    players: 4,
  },
  {
    id: "events-6",
    long_desc: "Longer CoderCut v6.9",
    name: "CoderCut v6.6",
    desc: "CoderCut v6.9",
    amount: 106_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "ant-design:code-sandbox-outlined",
    date: "2021-09-01",
    players: 1,
  },
  {
    id: "events-7",
    name: "CoderCut v6.7",
    long_desc: "Longer CoderCut v6.9",
    desc: "CoderCut v6.9",
    amount: 107_00, // 100.00
    image: "https://placeimg.com/192/108/tech",
    icon: "dashicons:code-standards",
    date: "2021-09-01",
    players: 2,
  }, */
