import "../App.css";

const Data = () => {
    return (
        <div
            className="data"
            id="datum"
        >   
            <h5>
                Data
            </h5>
            <h6>
                From the data collected &nbsp;<a href="src\spread\Chatbots+in+Education_April+11,+2023_13.06.zip" download>here</a>, the following was said by a few of the students answering the given questions:
            </h6>
            <div
                className="data-questions"
            >
                <h2>
                    Q1: How have you used ChatGPT?<span></span>
                </h2>
            </div>
            <div style={{ paddingBottom: '2vw' }}>   
                <Chatbubble
                    quote={"I used it as a paraphrasing tool."}
                    left={true}
                />
                <Chatbubble
                    quote={"I have honestly only used ChatGPT to help summarize articles or books to help get an idea of how certain things compare to one another."}
                    left={false}
                />
                <Chatbubble
                    quote={"Yes, my roommates and I were watching this show 'Haunting of the Hill House.' Once we finished the show we wanted to watch something with a similar vibe and to find a similar show we decided to ask ChatGPT."}
                    left={true}
                />
                <Chatbubble
                    quote={"Used it for explanations on homework problems."}
                    left={true}
                />
            </div>
            <div
                className="data-questions"
            >
                <h2>
                    Q2: What is the risk/reward of ChatGPT vs. Chegg?<span></span>
                </h2>
            </div>
            <div style={{ paddingBottom: '2vw' }}>
                <Chatbubble
                    quote={"[Chegg is more rewarding to cheaters because] Chegg is engineered with the concept of providing specific homework problems from textbooks. So it will be more specific and organized based on certain classes and the resources associated with the class."}
                    left={false}
                />
                <Chatbubble
                    quote={"[ChatGPT is less risky for cheaters because] previous resources like Chegg are monitored by academic institutions more so than ChatGPT."}
                    left={true}
                />
                <Chatbubble
                    quote={"[ChatGPT is less risky for cheaters because] the versatility of ChatGPT makes this possible. The fact that you can get a different response each time you input something makes it tough to catch cheating."}
                    left={true}
                />
            </div>
        </div>
    );
}

const Chatbubble = (props) => {
    return (
        <div
           className={`chat-data ${props.left ? 'left' : 'right'}`}
        >
            <div className="chat-container">
                <p>
                    {props.quote}
                </p>
            </div>
        </div>
    );
}

export default Data;