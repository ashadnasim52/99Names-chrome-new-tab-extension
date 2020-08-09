// // api key of pexel.com
// const apiKey = '563492ad6f91700001000001ae97147d028f472c9edbf583ab605b29';

// const url = 'https://api.pexels.com/v1/search?query=nature&per_page=1&page=1';

// fetch(url, {
// headers: {
// Authorization: apiKey,
// },
// })
// .then((response) => response.json())
// .then((data) => {
// console.log(data);
// console.log(data.photos[0].src.large);
// document.body.style.background = `${data.photos[0].src.large} no-repeat center center`;
// });

data = [
	['ٱلْرَّحْمَـانُ', 'AR-RAHMAAN', 'The Most or Entirely Merciful'],
	['ٱلْرَّحِيْمُ', 'AR-RAHEEM', 'The Bestower of Mercy'],
	['ٱلْمَلِكُ', 'AL-MALIK', 'The King and Owner of Dominion'],
	['ٱلْقُدُّوسُ', 'AL-QUDDUS', 'The Absolutely Pure'],
	['ٱلْسَّلَامُ', 'AS-SALAM', 'The Perfection and Giver of Peace'],
	['ٱلْمُؤْمِنُ', 'AL-MU’MIN', 'The One Who gives Emaan and Security'],
	['ٱلْمُهَيْمِنُ', 'AL-MUHAYMIN', 'The Guardian, The Witness, The Overseer'],
	['ٱلْعَزِيزُ', 'AL-AZEEZ', 'The All Mighty'],
	['ٱلْجَبَّارُ', 'AL-JABBAR', 'The Compeller, The Restorer'],
	['ٱلْمُتَكَبِّرُ', 'AL-MUTAKABBIR', 'The Supreme, The Majestic'],
	['ٱلْخَالِقُ', 'AL-KHAALIQ', 'The Creator, The Maker'],
	['ٱلْبَارِئُ', 'AL-BAARI’', 'The Originator'],
	['ٱلْمُصَوِّرُ', 'AL-MUSAWWIR', 'The Fashioner'],
	['ٱلْغَفَّارُ', 'AL-GHAFFAR', 'The All- and Oft-Forgiving'],
	['ٱلْقَهَّارُ', 'AL-QAHHAR', 'The Subduer, The Ever-Dominating'],
	['ٱلْوَهَّابُ', 'AL-WAHHAAB', 'The Giver of Gifts'],
	['ٱلْرَّزَّاقُ', 'AR-RAZZAAQ', 'The Provider'],
	['ٱلْفَتَّاحُ', 'AL-FATTAAH', 'The Opener, The Judge'],
	['ٱلْعَلِيمُ', 'AL-‘ALEEM', 'The All-Knowing, The Omniscient'],
	['ٱلْقَابِضُ', 'AL-QAABID', 'The Withholder'],
	['ٱلْبَاسِطُ', 'AL-BAASIT', 'The Extender'],
	['ٱلْخَافِضُ', 'AL-KHAAFIDH', 'The Reducer, The Abaser'],
	['ٱلْرَّافِعُ', 'AR-RAAFI’', 'The Exalter, The Elevator'],
	['ٱلْمُعِزُّ', 'AL-MU’IZZ', 'The Honourer, The Bestower'],
	['ٱلْمُذِلُّ', 'AL-MUZIL', 'The Dishonourer, The Humiliator'],
	['ٱلْسَّمِيعُ', 'AS-SAMEE’', 'The All-Hearing'],
	['ٱلْبَصِيرُ', 'AL-BASEER', 'The All-Seeing'],
	['ٱلْحَكَمُ', 'AL-HAKAM', 'The Judge, The Giver of Justice'],
	['ٱلْعَدْلُ', 'AL-‘ADL', 'The Utterly Just'],
	['ٱلْلَّطِيفُ', 'AL-LATEEF', 'The Subtle One, The Most Gentle'],
	['ٱلْخَبِيرُ', 'AL-KHABEER', 'The Acquainted, the All-Aware'],
	['ٱلْحَلِيمُ', 'AL-HALEEM', 'The Most Forbearing'],
	['ٱلْعَظِيمُ', 'AL-‘ATHEEM', 'The Magnificent, The Supreme'],
	['ٱلْغَفُورُ', 'AL-GHAFOOR', 'The Forgiving, The Exceedingly Forgiving'],
	['ٱلْشَّكُورُ', 'ASH-SHAKOOR', 'The Most Appreciative'],
	['ٱلْعَلِيُّ', 'AL-‘ALEE', 'The Most High, The Exalted'],
	['ٱلْكَبِيرُ', 'AL-KABEER', 'The Greatest, The Most Grand'],
	[
		'ٱلْحَفِيظُ',
		'AL-HAFEEDH',
		'The Preserver, The All-Heedful and All-Protecting',
	],
	['ٱلْمُقِيتُ', 'AL-MUQEET', 'The Sustainer'],
	['ٱلْحَسِيبُ', 'AL-HASEEB', 'The Reckoner, The Sufficient'],
	['ٱلْجَلِيلُ', 'AL-JALEEL', 'The Majestic'],
	['ٱلْكَرِيمُ', 'AL-KAREEM', 'The Most Generous, The Most Esteemed'],
	['ٱلْرَّقِيبُ', 'AR-RAQEEB', 'The Watchful'],
	['ٱلْمُجِيبُ', 'AL-MUJEEB', 'The Responsive One'],
	['ٱلْوَاسِعُ', 'AL-WAASI’', 'The All-Encompassing, the Boundless'],
	['ٱلْحَكِيمُ', 'AL-HAKEEM', 'The All-Wise'],
	['ٱلْوَدُودُ', 'AL-WADOOD', 'The Most Loving'],
	['ٱلْمَجِيدُ', 'AL-MAJEED', 'The Glorious, The Most Honorable'],
	['ٱلْبَاعِثُ', 'AL-BA’ITH', 'The Resurrector, The Raiser of the Dead'],
	['ٱلْشَّهِيدُ', 'ASH-SHAHEED', 'The All- and Ever Witnessing'],
	['ٱلْحَقُّ', 'AL-HAQQ', 'The Absolute Truth'],
	['ٱلْوَكِيلُ', 'AL-WAKEEL', 'The Trustee, The Disposer of Affairs'],
	['ٱلْقَوِيُّ', 'AL-QAWIYY', 'The All-Strong'],
	['ٱلْمَتِينُ', 'AL-MATEEN', 'The Firm, The Steadfast'],
	['ٱلْوَلِيُّ', 'AL-WALIYY', 'The Protecting Associate'],
	['ٱلْحَمِيدُ', 'AL-HAMEED', 'The Praiseworthy'],
	['ٱلْمُحْصِيُ', 'AL-MUHSEE', 'The All-Enumerating, The Counter'],
	['ٱلْمُبْدِئُ', 'AL-MUBDI', 'The Originator, The Initiator'],
	['ٱلْمُعِيدُ', 'AL-MU’ID', 'The Restorer, The Reinstater'],
	['ٱلْمُحْيِى', 'AL-MUHYEE', 'The Giver of Life'],
	['ٱلْمُمِيتُ', 'AL-MUMEET', 'The Bringer of Death, the Destroyer'],
	['ٱلْحَىُّ', 'AL-HAYY', 'The Ever-Living'],
	['ٱلْقَيُّومُ', 'AL-QAYYOOM', 'The Sustainer, The Self-Subsisting'],
	['ٱلْوَاجِدُ', 'AL-WAAJID', 'The Perceiver'],
	['ٱلْمَاجِدُ', 'AL-MAAJID', 'The Illustrious, the Magnificent'],
	['ٱلْوَاحِدُ', 'AL-WAAHID', 'The One'],
	['ٱلْأَحَد', 'AL-AHAD', 'The Unique, The Only One'],
	['ٱلْصَّمَدُ', 'AS-SAMAD', 'The Eternal, Satisfier of Needs'],
	['ٱلْقَادِرُ', 'AL-QADEER', 'The Capable, The Powerful'],
	['ٱلْمُقْتَدِرُ', 'AL-MUQTADIR', 'The Omnipotent'],
	['ٱلْمُقَدِّمُ', 'AL-MUQADDIM', 'The Expediter, The Promoter'],
	['ٱلْمُؤَخِّرُ', 'AL-MU’AKHKHIR', 'The Delayer, the Retarder'],
	['ٱلأَوَّلُ', 'AL-AWWAL', 'The First'],
	['ٱلْآخِرُ', 'AL-AAKHIR', 'The Last'],
	['ٱلْظَّاهِرُ', 'AZ-DHAAHIR', 'The Manifest'],
	['ٱلْبَاطِنُ', 'AL-BAATIN', 'The Hidden One, Knower of the Hidden'],
	['ٱلْوَالِي', 'AL-WAALI', 'The Governor, The Patron'],
	['ٱلْمُتَعَالِي', 'AL-MUTA’ALI', 'The Self Exalted'],
	['ٱلْبَرُّ', 'AL-BARR', 'The Source of Goodness, the Kind Benefactor'],
	['ٱلْتَّوَّابُ', 'AT-TAWWAB', 'The Ever-Pardoning, The Relenting'],
	['ٱلْمُنْتَقِمُ', 'AL-MUNTAQIM', 'The Avenger'],
	['ٱلْعَفُوُّ', 'AL-‘AFUWW', 'The Pardoner'],
	['ٱلْرَّؤُفُ', 'AR-RA’OOF', 'The Most Kind'],
	[
		'مَالِكُ ٱلْمُلْكُ',
		'MAALIK-UL-MULK',
		'Master of the Kingdom, Owner of the Dominion',
	],
	[
		'ذُو ٱلْجَلَالِ وَٱلْإِكْرَامُ',
		'DHUL-JALAALI WAL-IKRAAM',
		'Possessor of Glory and Honour, Lord of Majesty and Generosity',
	],
	['ٱلْمُقْسِطُ', 'AL-MUQSIT', 'The Equitable, the Requiter'],
	['ٱلْجَامِعُ', 'AL-JAAMI’', 'The Gatherer, the Uniter'],
	['ٱلْغَنيُّ', 'AL-GHANIYY', 'The Self-Sufficient, The Wealthy'],
	['ٱلْمُغْنِيُّ', 'AL-MUGHNIThe Enricher'],
	['ٱلْمَانِعُ', 'AL-MANI’', 'The Withholder'],
	['ٱلْضَّارُ', 'AD-DHARR', 'The Distresser'],
	['ٱلْنَّافِعُ', 'AN-NAFI’', 'The Propitious, the Benefactor'],
	['ٱلْنُّورُ', 'AN-NURThe Light, The Illuminator'],
	['ٱلْهَادِي', 'AL-HAADI', 'The Guide'],
	['ٱلْبَدِيعُAL-BADEE’', 'The Incomparable Originator'],
	['ٱلْبَاقِي', 'AL-BAAQI', 'The Ever-Surviving, The Everlasting'],
	['ٱلْوَارِثُ', 'AL-WAARITHThe Inheritor, The Heir'],
	['ٱلْرَّشِيدُ', 'AR-RASHEED', 'The Guide, Infallible Teacher'],
	['ٱلْصَّبُورُ', 'AS-SABOOR', 'The Forbearing, The Patien'],
];

console.log(data);

random = data[Math.floor(Math.random() * data.length)];

console.log(random);

document.getElementById('first').textContent = random[1];
document.getElementById('second').textContent = random[0];
document.getElementById('third').textContent = random[2];
