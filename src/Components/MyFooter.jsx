import { Container, Row, Col} from "react-bootstrap";

export default function MyFooter () {


    return (
        <footer>
        <Container>
            <Row>
                <Col >
                <ul className="p-0">
                    <li>Informazioni</li>
                    <li>Linee Guida della Community</li>
                    <li className="mb-4">Privacy e condizioni</li>
                    <li>Sales Solutions</li>
                    <li>Centro sicurezza</li>
                </ul>
                </Col>
                <Col>
                <ul>
                    <li>Accessibilità</li>
                    <li>Carriera</li>
                    <li>Opzione per gli annunci pubblicitari</li>
                    <li>Mobile</li>
                </ul>
                
                </Col>
                <Col>
                  <ul>
                    <li>Talent Solutions</li>
                    <li>Soluzioni di Marketing</li>
                    <li className="mb-4">Pubblicità</li>
                    <li className="mt-2">Piccole Imprese</li>
                  </ul>
                </Col>
                <Col md={4} >
                <ul>
                    <li><span className="size mt-n"><i className="bi bi-question-circle-fill fs-4 me-3 "></i>Domande? </span> <br></br><span className="fw-normal margin"> Visita il nostro centro assistenza</span></li>
                    <li> <span className="size mt-n"><i className="bi bi-gear-fill fs-4 me-3 "></i>Gestisci il tuo account e la tua privacy </span> <br></br> <span className="fw-normal margin">Vai alle impostazioni</span></li>
                    <li><span className="size mt-n"><i className="bi bi-shield-shaded fs-4 me-3"></i>Trasparenza sui contenuti consigliati  </span><br></br> <span className="fw-normal margin">Scopri di più sui contenuti consigliati</span></li>
                </ul>
                    </Col>
                <Col>
                <span className="move">Seleziona lingua</span>
                <br></br>
                <select className="mt-2">
                    <option>Italiano (italiano)</option>
                    <option>Inglese</option>
                    <option>Spagnolo</option>
                    <option>Francese</option>
                </select>
                </Col>
            </Row>
            <Row>
                <Col className="p-0">
                <p>
                   LinkedIn Corporation © 2024   
                </p>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}