//imports
import { Howl } from 'howler';
//import Styles
import '../styles/question.css';
//import Images
import selectedLE from '../assets/images/bg-option-left-wrong.png';
import selectedRI from '../assets/images/bg-option-right-wrong.png';
//import Audio
import audioWho from '../assets/sounds/who-was-correct.mp3';

export default function Question({ quest,  setAnsSelected, setAnsCorrect, setId }) {

    //Variables
    const { question, answers } = quest;
    const verifyClick = true;

    const soundWho = new Howl({
        src: [audioWho],
        playing: false,
        volume: 0.05,
        loop: false,
    })

    //Functions
    function handleSelectAnswer(e) {
        const answerSelect = e.target.parentNode.accessKey;
        const answers = e.target.parentNode.parentNode.childNodes;
        let ansCorrect = 0;
        let ansWrong = 'false';
        while (ansWrong === 'false') {
            answers.forEach((answer) => {
                if (answer.attributes.correct.value === 'true') {
                    ansCorrect = answer.accessKey;
                    ansWrong = 'true';
                }
            });
        };
        setAnsSelected(handleSelected(answerSelect));
        setAnsCorrect(ansCorrect);
        setId(answerSelect);
    }

    function handleSelected(id) {
        soundWho.play();
        switch (id) {
            case '1':
                document.getElementById('ans1').style.backgroundImage = `url(${selectedLE})`;
                document.getElementById('ans2').style.backgroundImage = ``;
                document.getElementById('ans3').style.backgroundImage = ``;
                document.getElementById('ans4').style.backgroundImage = ``;
                break;
            case '2':
                document.getElementById('ans2').style.backgroundImage = `url(${selectedRI})`;
                document.getElementById('ans1').style.backgroundImage = ``;
                document.getElementById('ans3').style.backgroundImage = ``;
                document.getElementById('ans4').style.backgroundImage = ``;
                break;
            case '3':
                document.getElementById('ans3').style.backgroundImage = `url(${selectedLE})`;
                document.getElementById('ans1').style.backgroundImage = ``;
                document.getElementById('ans2').style.backgroundImage = ``;
                document.getElementById('ans4').style.backgroundImage = ``;
                
                break;
            case '4':
                document.getElementById('ans4').style.backgroundImage = `url(${selectedRI})`;
                document.getElementById('ans1').style.backgroundImage = ``;
                document.getElementById('ans2').style.backgroundImage = ``;
                document.getElementById('ans3').style.backgroundImage = ``;
                break;
        }
        return true;
    }

    return (
        <>
            <div className='container_question'>
                <div className='question'>
                    <h2>{question}</h2>
                </div>
            </div>
            <div className='container_answers' onClick={(e) =>  handleSelectAnswer(e)} id='container_answers'>
                {
                    answers.map(({ id, answer, correct }) => {
                        switch (id) {
                            case 1:
                                return (
                                    <div className='answer1 select_le' key={id} accessKey={id} correct={correct.toString()} id='ans1'>
                                        <p className='ans1' id='p1'><span className='vineta'>A:</span>&nbsp;{answer}</p>
                                    </div>
                                )
                            case 2:
                                return (
                                    <div className='answer2 select_ri' key={id} accessKey={id} correct={correct.toString()} id='ans2'>
                                        <p className='ans2' id='p2'><span className='vineta'>B:</span>&nbsp;{answer}</p>
                                    </div>
                                )
                            case 3:
                                return (
                                    <div className='answer3 select_le' key={id} accessKey={id} correct={correct.toString()} id='ans3'>
                                        <p className='ans3' id='p3'><span className='vineta'>C:</span>&nbsp;{answer}</p>
                                    </div>
                                )
                            case 4:
                                return (
                                    <div className='answer4 select_ri' key={id} accessKey={id} correct={correct.toString()} id='ans4'>
                                        <p className='ans4' id='p4'><span className='vineta'>D:</span>&nbsp;{answer}</p>
                                    </div>
                                )
                        }
                    })
                }
            </div>
        </>
    )
}