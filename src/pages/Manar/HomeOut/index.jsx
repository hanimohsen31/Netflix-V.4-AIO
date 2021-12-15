import { Section } from "../../../components/Manar/Section";
import { Questions } from "../../../components/Manar/Questions";
import { SectionReverse } from "../../../components/Manar/SectionReverse";
import {Header} from "../../../components/Manar/Header";
import {FooterInnerBlack} from "../../../components/Manar/FooterInnerBlack";

export const HomeOut = () => {
    document.body.style.background = 'black';
    return (
        <>
            <Header/>
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <Section />
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <SectionReverse />
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <Section/>
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <SectionReverse />
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <Questions />
            
            <hr style={{height:'7px',backgroundColor:'#191b1b',margin:'0'}}/>
            <FooterInnerBlack />
        </>
    )
}