

// various buzzy descriptors
var envs = ['optimized','scared the shit out of','transformed','commemorated', 'measured','glorified','lmpacted','fragmented','exceeded expectations of', 'overwhelmed', 'outsourced', 'replaced', 'combined', 'ran fast and far ahead of', 'completely blocked', 'backtested', 'exposed', 'compromised', 'bedazzled', 'silenced', 'gained recognization within', 'owned', 'lol\'d at'];

// things that sound cool to do
var cool = ['Offshore','The strangers in the Fish Bowl','Leadership','the whole WebEx', 'our agile metrics','Rally', 'the whole StandUp', 'the Sprint'];

// connector words
var conn = ['with'];

// technologies that are hot
var hot = ['rockstar devs','agile methodology','"faster not smarter"','a confounding wireless headset','badges','recurring meetings','a smart card','lunch at the desk','a performance test','k-cup coffee','IntelliJ','Good for Mobile','contractors',  'weekend work', '200% sprint velocity', 'my odometer',  'the Waze Lady', 'overtime', 'conversions to FTE', 'shitty health insurance', '1000 emails', 'web based training', 'pre-filled timesheets', 'LWAR', 'a strange policy', 'projectors', 'User Stories', 'Epic User Stories', 'compressed timeframes', 'great news', 'Sublime', 'Git', 'my 200 pound ZBook', 'a backpack with 32 zippers',  'an imaginary Mac', 'dual monitors', 'a standup desk', 'SharePoint', 'CQ', 'a half-assed bash script', 'a 500 error', 'a report that services are back up', 'Jabber', 'an awkward silence', 'a voluntary online survey', 'cat pictures'];

// library names that i pulled out of my ass (apologies if some of these actually exist)
var mys = ['Zygote','Mayhem','Squish','Squash','Zoot','Wombat','Morpho','Cerealize','Pretender','Servo','Blitz','Peachy','Pixelizer','Infidel','CrockRocket','Flenser','Shindig','TopHat','Monofilament','Bandbox','Ricochet','Matterhorn','Wicket','Grool','Derringer','Frickulous','Shoehorn','Wexel','Boyband','Surreptitious','Thwank','Shanghai','Borgut','Skunky','WigWam','Bourbon','Whiskey','Absinthe','BeerGut','SlimJim','CruxIO','Shorty','Booty','Castellan','Vermicious','Pickpocket','Confabulator','WalkieTalkie','Melkor','Morgoth','Quip','Trinket','FlyBoy'];

function choose(n, arr) {
    while (arr.length > n) {
        var del = Math.floor(Math.random() * arr.length);
        arr = arr.filter(function(item, i){
            return i !== del;
        });
    }
    return arr;
}

var result = [
choose(1, envs),
choose(1, cool),
choose(1, conn),
choose(2, hot).join(', '),
'and',
choose(1, hot)
];
console.log( 'Remember the time when I '+result.join(' ')+'.');
