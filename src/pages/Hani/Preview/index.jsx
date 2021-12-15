export const Preview = () => {
    // document.body.style.background = '#191b1b';
    document.body.style.background = 'black';
    let vidsrc = "https://firebasestorage.googleapis.com/v0/b/netflix-86f08.appspot.com/o/Cover%2FGUARDIAN%20-%20THE%20LONELY%20AND%20GREAT%20GOD%20(GOBLIN)%20-%20OFFICIAL%20TRAILER%20_%20Gong%20Yoo%2C%20Lee%20Dong%20Wook%2C%20Kim%20Go%20Eun.mp4?alt=media&token=fbed9bbb-1645-44fc-884e-32b4f805732b" 

    return (
    <div className="container-fluid text-center align-center">
        <video id='preview' src={vidsrc} controls style={{height:'99vh'}}></video>
    </div>
    )
}