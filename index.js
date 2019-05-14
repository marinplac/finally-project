const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const bcryptauth = require("./utils/bc");
const db = require("./utils/db");
const csurf = require("csurf");

const config = require("./config.json");
const bigfile = require("./bigfile");
// console.log("this is big file", bigfile);

const myText = `
ΟΡΦΕΥΣ ΠΡΟΣ ΜΟΥΣΑΙΟΝ

Εὐτυχῶς χρῶ, ἑταῖρε.

Μάνθανε δή, Μουσαῖε, θυηπολίην περισέμνην,
εὐχήν, ἣ δή τοι προφερεστέρη ἐστὶν ἁπασέων.
Ζεῦ βασιλεῦ καὶ Γαῖα καὶ οὐράνιαι φλόγες ἁγναὶ
Ἠελίου, Μήνης θ' ἱερὸν σέλας Ἄστρα τε πάντα
καὶ σύ, Ποσείδαον γαιήοχε, κυανοχαῖτα,
Φερσεφόνη θ' ἁγνὴ Δημήτηρ τ' ἀγλαόκαρπε
Ἄρτεμί <τ'> ἰοχέαιρα, κόρη, καὶ ἤιε Φοῖβε,
ὃς Δελφῶν ναίεις ἱερὸν πέδον· ὅς τε μεγίστας
τιμὰς ἐν μακάρεσσιν ἔχεις, Διόνυσε χορευτά·
Ἆρές τ' ὀμβριμόθυμε καὶ Ἡφαίστου μένος ἁγνὸν
ἀφρογενής τε θεά, μεγαλώνυμα δῶρα λαχοῦσα·
καὶ σύ, καταχθονίων βασιλεῦ, μέγ'  ίροχε δαῖμον,
Ἥβη τ' Εἰλείθυια καὶ Ἡρακλέος μένος ἠύ·
καὶ τὸ Δικαιοσύνης τε καὶ Εὐσεβίης μέγ' ὄνειαρ
κικλήσκω Νύμφας τε κλυτὰς καὶ Πᾶνα μέγιστον
Ἥρην τ', αἰγιόχοιο Διὸς θαλερὴν παράκοιτιν·
Μνημοσύνην τ' ἐρατὴν Μούσας τ' ἐπικέκλομαι ἁγνὰς
ἐννέα καὶ Χάριτάς τε καὶ Ὥρας ἠδ' Ἐνιαυτὸν
Λητώ τ' εὐπλόκαμον, Θείην σεμνήν τε Διώνην
Κουρῆτάς τ' ἐνόπλους Κορύβαντάς τ' ἠδὲ Καβείρους
καὶ μεγάλους Σωτῆρας ὁμοῦ, Διὸς ἄφθιτα τέκνα,
Ἰδαίους τε θεοὺς ἠδ' ἄγγελον Οὐρανιώνων,
Ἑρμείαν κήρυκα, Θέμιν θ', ἱεροσκόπον ἀνδρῶν,
Νύκτα τε πρεσβίστην καλέω καὶ φωσφόρον Ἦμαρ,
Πίστιν τ' ἠδὲ Δίκην καὶ ἀμύμονα Θεσμοδότειραν,
Ῥείαν τ' ἠδὲ Κρόνον καὶ Τηθὺν κυανόπεπλον
Ὠκεανόν τε μέγαν, σύν τ' Ὠκεανοῖο θύγατρας
Ἄτλαντός τε καὶ Αἰῶνος μέγ' ὑπείροχον ἰσχὺν
καὶ Χρόνον ἀέναον καὶ τὸ Στυγὸς ἀγλαὸν ὕδωρ
μειλιχίους τε θεούς, ἀγαθήν τ' ἐπὶ τοῖσι Πρόνοιαν
Δαίμονά τ' ἠγάθεον καὶ Δαίμονα πήμονα θνητῶν,
Δαίμονας οὐρανίους καὶ ἠερίους καὶ ἐνύδρους
καὶ χθονίους καὶ ὑποχθονίους ἠδ' ἐμπυριφοίτους,
καὶ Σεμέλην Βάκχου τε συνευαστῆρας ἅπαντας,
Ἰνὼ Λευκοθέην τε Παλαίμονά τ' ὀλβιοδώτην
Νίκην θ' ἡδυέπειαν ἰδ' Ἀδρήστειαν ἄνασσαν
καὶ βασιλῆα μέγαν Ἀσκληπιὸν ἠπιοδώτην
Παλλάδα τ' ἐγρεμάχην κούρην, Ἀνέμους τε πρόπαντας
καὶ Βροντὰς Κόσμου τε μέρη τετρακίονος αὐδῶ·
Μητέρα τ' ἀθανάτων, Ἄττιν καὶ Μῆνα κικλήσκω
Οὐρανίαν τε θεάν, σύν τ' ἄμβροτον ἁγνὸν Ἄδωνιν
Ἀρχήν τ' ἠδὲ Πέρας–τὸ γὰρ ἔπλετο πᾶσι μέγιστον–
εὐμενέας ἐλθεῖν κεχαρημένον ἦτορ ἔχοντας
τήνδε θυηπολίην ἱερὴν σπονδήν τ' ἐπὶ σεμνήν.
`;

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 1000 * 60 * 60 * 24 * 14,
        secret: `Dazed and confused.`
    })
);
app.use(compression());
app.use(csurf());
app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//routes//

app.get("/getbigfile", (req, res) => {
    res.json({ bigfile: bigfile, myText: myText });
    // res.json(bigfile);
});
app.get("/welcome", function(req, res) {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

//do not ever delete this!//

app.get("*", function(req, res) {
    console.log(req.session);
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(8080, function() {
    console.log("Yes, madam!");
});
