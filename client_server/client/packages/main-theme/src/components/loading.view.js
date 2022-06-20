import {styled, keyframes, css} from "frontity"

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg) }
`

const loader_style = css`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 15px solid blue;
    width: 100px;
    height: 100px;
    animation: ${spin} 2s linear infinite;
`

const Container = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const Loading = () => {
    return (
        <Container>
            <div className="loader" css={loader_style} />
        </Container>
    )
}

export default Loading