import {
    StyledSection,
    SectionHeader,
    SectionTitle,
    SectionBody,
} from "./styled";

const Section = ({ title, body }) => (
    <StyledSection>
        {title && (
            <SectionHeader>
                <SectionTitle>{title}</SectionTitle>
            </SectionHeader>
        )}
        <SectionBody>{body}</SectionBody>
    </StyledSection>
);

export default Section;
