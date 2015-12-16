

// various buzzy descriptors
var envs = ['optimized','scared the shit out of','transformed','commemorated', 'measured','glorified','lmpacted','sullied','exceeded expectations of', 'overwhelmed', 'shook a stick at'];

// things that sound cool to do
var cool = ['Offshore','The Fish Bowl','Leadership','the whole WebEx', 'our agile methodolgy','Rally'];

// connector words
var conn = ['with'];

// technologies that are hot
var hot = ['rockstar devs','agile methodology','"faster not smarter"','wireless headsets','badges','recurring meetings','a smart card','a microwave','multi-function printers','K-cups','IntelliJ','a computer','contractors', 'network cables',  'weekend work', '200% sprint velocity', 'road warriors',  'the Waze Lady'];

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
