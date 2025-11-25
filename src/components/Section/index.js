import styled from "styled-components";

const StyledSection = styled.section`
    position: relative;
    background: ${({ theme }) => theme.colors.white};
    margin: 20px 0;
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.blackTransparent};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: 1px solid ${({ theme }) => theme.colors.whiteSmoke};
`;

const SectionHeader = styled.header`
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.whiteSmoke};
`;

const SectionTitle = styled.h2`
    margin: 0;
    font-size: 25px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.almostBlack};
    text-align: center;
`;

const SectionBody = styled.div`
    padding: 50px 20px 20px;
`;

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
