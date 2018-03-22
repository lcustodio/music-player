const musics = [
  {
    id: '1',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Bloom',
    length: '5:15'
  },
  {
    id: '2',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Morning Mr Magpie',
    length: '4:41'
  },
  {
    id: '3',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Little by Little',
    length: '4:27'
  },
  {
    id: '4',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Feral',
    length: '3:13'
  },
  {
    id: '5',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Lotus Flower',
    length: '5:01'
  },
  {
    id: '6',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Codex',
    length: '4:47'
  },
  {
    id: '7',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Give Up the Ghost',
    length: '4:50'
  },
  {
    id: '8',
    artist: 'Radiohead',
    album: 'The King of Limbs',
    title: 'Separator',
    length: '5:20'
  },

  {
    id: '9',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Airbag',
    length: '4:44'
  },
  {
    id: '10',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Paranoid Android',
    length: '6:23'
  },
  {
    id: '11',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Subterranean Homesick Alien',
    length: '4:27'
  },
  {
    id: '12',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Exit Music (For a Film)',
    length: '4:24'
  },
  {
    id: '13',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Let Down',
    length: '4:59'
  },
  {
    id: '14',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Karma Police',
    length: '4:21'
  },
  {
    id: '15',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Fitter Happier',
    length: '1:57'
  },
  {
    id: '16',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Electioneering',
    length: '3:50'
  },
  {
    id: '17',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Climbing Up the Walls',
    length: '4:45'
  },
  {
    id: '18',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'No Surprises',
    length: '3:48'
  },
  {
    id: '19',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'Lucky',
    length: '4:19'
  },
  {
    id: '20',
    artist: 'Radiohead',
    album: 'OK Computer',
    title: 'The Tourist',
    length: '5:24'
  },

  {
    id: '21',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Mysterons',
    length: '5:02'
  },
  {
    id: '22',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Sour Times',
    length: '4:11'
  },
  {
    id: '23',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Strangers',
    length: '3:55'
  },
  {
    id: '24',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'It Could Be Sweet',
    length: '4:16'
  },
  {
    id: '25',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Wandering Star',
    length: '4:51'
  },
  {
    id: '26',
    artist: 'Portishead',
    album: 'Dummy',
    title: "It's a Fire",
    length: '3:49'
  },
  {
    id: '27',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Numb',
    length: '3:54'
  },
  {
    id: '28',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Roads',
    length: '5:02'
  },
  {
    id: '29',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Pedestal',
    length: '3:39'
  },
  {
    id: '30',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Biscuit',
    length: '5:01'
  },
  {
    id: '31',
    artist: 'Portishead',
    album: 'Dummy',
    title: 'Glory Box',
    length: '5:06'
  },

  {
    id: '32',
    artist: 'Portishead',
    album: 'Third',
    title: 'Silence',
    length: '4:58'
  },
  {
    id: '33',
    artist: 'Portishead',
    album: 'Third',
    title: 'Hunter',
    length: '3:57'
  },
  {
    id: '34',
    artist: 'Portishead',
    album: 'Third',
    title: 'Nylon Smile',
    length: '3:16'
  },
  {
    id: '35',
    artist: 'Portishead',
    album: 'Third',
    title: 'The Rip',
    length: '4:29'
  },
  {
    id: '36',
    artist: 'Portishead',
    album: 'Third',
    title: 'Plastic',
    length: '3:27'
  },
  {
    id: '37',
    artist: 'Portishead',
    album: 'Third',
    title: 'We Carry On',
    length: '6:27'
  },
  {
    id: '38',
    artist: 'Portishead',
    album: 'Third',
    title: 'Deep Water',
    length: '1:31'
  },
  {
    id: '39',
    artist: 'Portishead',
    album: 'Third',
    title: 'Machine Gun',
    length: '4:43'
  },
  {
    id: '40',
    artist: 'Portishead',
    album: 'Third',
    title: 'Small',
    length: '6:45'
  },
  {
    id: '41',
    artist: 'Portishead',
    album: 'Third',
    title: 'Magic Doors',
    length: '3:32'
  },
  {
    id: '42',
    artist: 'Portishead',
    album: 'Third',
    title: 'Threads',
    length: '5:45'
  }
];

export default musics;
