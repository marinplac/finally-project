import React from "react";
import axios from "./axios";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenWord: "",

            form: "",
            origin: "",
            occurence: "",
            elsewhere: "",
            desc: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        axios.get("/getbigfile").then(data => {
            console.log(data, "this data");
            this.setState({
                bigfile: data.data.bigfile
            });
        });
    }

    handleChange(e) {
        console.log(this.state.bigfile);
        // console.log("tunnock's teacakes");
        console.log(e.target.innerHTML, "this is e.target.innerHTML");
        const filteredWord = this.state.bigfile.filter(word => {
            return e.target.innerHTML == word.appears;
        });
        console.log(filteredWord[0]);
        this.setState({
            chosenWord: filteredWord[0].unit,
            form: filteredWord[0].form,
            origin: filteredWord[0].origin,
            occurence: filteredWord[0].occurence,
            elsewhere: filteredWord[0].elsewhere,
            desc: filteredWord[0].desc
        });
    }

    render() {
        // for (var i = 0; i < data.bigfile.length; i++) {
        //     var data = data.bigfile[i];
        //
        //     console.log(data.unit);
        // }
        return (
            <div>
                <div id="titleofpage">
                    <h1>Orphei hymnorum epitheta</h1>
                </div>
                <div id="bigcontainer">
                    <div id="textholderdiv">
                        <span>
                            ΟΡΦΕΥΣ ΠΡΟΣ ΜΟΥΣΑΙΟΝ
                            <br />
                            <br />
                        </span>
                        <span>
                            Εὐτυχῶς χρῶ, ἑταῖρε.
                            <br />
                            <br />
                        </span>
                        <span>
                            Μάνθανε δή, Μουσαῖε, θυηπολίην περισέμνην,
                            <br />
                        </span>
                        <span>
                            εὐχήν, ἣ δή τοι προφερεστέρη ἐστὶν ἁπασέων.
                            <br />
                        </span>
                        <span>
                            Ζεῦ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                βασιλεῦ
                            </span>{" "}
                            καὶ Γαῖα καὶ οὐράνιαι φλόγες ἁγναὶ
                            <br />
                        </span>
                        <span>
                            Ἠελίου, Μήνης θ' ἱερὸν σέλας Ἄστρα τε πάντα
                            <br />
                        </span>
                        <span>
                            καὶ σύ, Ποσείδαον{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                γαιήοχε
                            </span>
                            ,{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                κυανοχαῖτα
                            </span>
                            ,<br />
                        </span>
                        <span>
                            Φερσεφόνη θ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἁγνὴ
                            </span>{" "}
                            Δημήτηρ τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἀγλαόκαρπε
                            </span>
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἄρτεμί τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἰοχέαιρα
                            </span>
                            ,{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                κόρη
                            </span>
                            , καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἤιε
                            </span>{" "}
                            Φοῖβε,
                            <br />
                        </span>
                        <span>
                            ὃς Δελφῶν ναίεις ἱερὸν πέδον· ὅς τε μεγίστας
                            <br />
                        </span>
                        <span>
                            τιμὰς ἐν μακάρεσσιν ἔχεις, Διόνυσε{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                χορευτά·
                            </span>
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἆρές τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ὀμβριμόθυμε
                            </span>{" "}
                            καὶ Ἡφαίστου μένος ἁγνὸν
                            <br />
                        </span>
                        <span>
                            ἀφρογενής τε θεά, μεγαλώνυμα δῶρα λαχοῦσα·
                            <br />
                        </span>
                        <span>
                            καὶ σύ, καταχθονίων βασιλεῦ, μέγ' ίροχε δαῖμον,
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἥβη τ' Εἰλείθυια καὶ Ἡρακλέος μένος ἠύ·
                            <br />
                        </span>
                        <span>
                            καὶ τὸ Δικαιοσύνης τε καὶ Εὐσεβίης μέγ' ὄνειαρ
                            <br />
                        </span>
                        <span>
                            κικλήσκω Νύμφας τε κλυτὰς καὶ Πᾶνα μέγιστον
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἥρην τ', αἰγιόχοιο Διὸς θαλερὴν παράκοιτιν·
                            <br />
                        </span>
                        <span>
                            Μνημοσύνην τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἐρατὴν
                            </span>{" "}
                            Μούσας τ'ἐπικέκλομαι{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἁγνὰς
                            </span>
                            <br />
                        </span>
                        <span>
                            ἐννέα καὶ Χάριτάς τε καὶ Ὥρας ἠδ' Ἐνιαυτὸν
                            <br />
                        </span>
                        <span>
                            Λητώ τ'
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                εὐπλόκαμον
                            </span>
                            , Θείην{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                σεμνήν
                            </span>{" "}
                            τε Διώνην
                            <br />
                        </span>
                        <span>
                            Κουρῆτάς τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἐνόπλους
                            </span>{" "}
                            Κορύβαντάς τ' ἠδὲ Καβείρους
                            <br />
                        </span>
                        <span>
                            καὶ μεγάλους Σωτῆρας ὁμοῦ, Διὸς ἄφθιτα τέκνα,
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἰδαίους τε θεοὺς ἠδ' ἄγγελον Οὐρανιώνων,
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἑρμείαν{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                κήρυκα
                            </span>
                            , Θέμιν θ', ἱεροσκόπον ἀνδρῶν,
                            <br />
                        </span>
                        <span>
                            Νύκτα τε{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                πρεσβίστην
                            </span>{" "}
                            καλέω καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                φωσφόρον
                            </span>{" "}
                            Ἦμαρ,
                            <br />
                        </span>
                        <span>
                            Πίστιν τ' ἠδὲ Δίκην καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἀμύμονα
                            </span>{" "}
                            Θεσμοδότειραν,
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ῥείαν τ' ἠδὲ Κρόνον καὶ Τηθὺν{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                κυανόπεπλον
                            </span>
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ὠκεανόν τε{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                μέγαν
                            </span>
                            , σύν τ' Ὠκεανοῖο θύγατρας
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἄτλαντός τε καὶ Αἰῶνος μέγ' ὑπείροχον ἰσχὺν
                            <br />
                        </span>
                        <span>
                            καὶ Χρόνον{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἀέναον
                            </span>{" "}
                            καὶ τὸ Στυγὸς ἀγλαὸν ὕδωρ
                            <br />
                        </span>
                        <span>
                            μειλιχίους τε θεούς, ἀγαθήν τ' ἐπὶ τοῖσι Πρόνοιαν
                            <br />
                        </span>
                        <span>
                            Δαίμονά τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἠγάθεον
                            </span>{" "}
                            καὶ Δαίμονα πήμονα θνητῶν,
                            <br />
                        </span>
                        <span>
                            Δαίμονας{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                οὐρανίους
                            </span>{" "}
                            καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἠερίους
                            </span>{" "}
                            καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἐνύδρους
                            </span>
                            <br />
                        </span>
                        <span>
                            καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                χθονίους
                            </span>{" "}
                            καὶ{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ὑποχθονίους
                            </span>{" "}
                            ἠδ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἐμπυριφοίτους
                            </span>
                            ,<br />
                        </span>
                        <span>
                            καὶ Σεμέλην Βάκχου τε συνευαστῆρας ἅπαντας,
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἰνὼ Λευκοθέην τε Παλαίμονά τ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ὀλβιοδώτην
                            </span>
                            <br />
                        </span>
                        <span>
                            Νίκην θ'{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἡδυέπειαν
                            </span>{" "}
                            ἰδ' Ἀδρήστειαν ἄνασσαν
                            <br />
                        </span>
                        <span>
                            καὶ βασιλῆα μέγαν Ἀσκληπιὸν{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἠπιοδώτην
                            </span>
                            <br />
                        </span>
                        <span>
                            Παλλάδα τ' ἐγρεμάχην κούρην, Ἀνέμους τε{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                πρόπαντας
                            </span>
                            <br />
                        </span>
                        <span>
                            καὶ Βροντὰς Κόσμου τε μέρη τετρακίονος αὐδῶ·
                            <br />
                        </span>
                        <span>
                            Μητέρα τ' ἀθανάτων, Ἄττιν καὶ Μῆνα κικλήσκω
                            <br />
                        </span>
                        <span>
                            Οὐρανίαν τε θεάν, σύν τ'
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                {" "}
                                ἄμβροτον
                            </span>{" "}
                            <span
                                className="highlight"
                                onClick={e => this.handleChange(e)}
                            >
                                ἁγνὸν Ἄδωνιν
                            </span>
                            <br />
                        </span>
                        <span>
                            {" "}
                            Ἀρχήν τ' ἠδὲ Πέρας–τὸ γὰρ ἔπλετο πᾶσι μέγιστον–
                            <br />
                        </span>
                        <span>
                            εὐμενέας ἐλθεῖν κεχαρημένον ἦτορ ἔχοντας
                            <br />
                        </span>
                        <span>
                            τήνδε θυηπολίην ἱερὴν σπονδήν τ' ἐπὶ σεμνήν.
                            <br />
                        </span>
                        `
                    </div>
                    <div id="smallwindow">
                        <p>{this.state.chosenWord}</p>
                        <p>{this.state.form}</p>
                        <p>{this.state.origin}</p>
                        <p>{this.state.occurence}</p>
                        <p>{this.state.elsewhere}</p>
                        <p>{this.state.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}
