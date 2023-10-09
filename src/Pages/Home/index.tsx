import { Container} from "./styles";
import Header from "../../Components/Header";
import CardHeaderTask from "../../Components/CardHeaderTask";

export default function Home(){
    return(
        <Container>
            <Header/>
            <CardHeaderTask/>
        </Container>
    )
}