import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import Intro from './components/Intro';
import Logo from './components/Logo';
import Data from './components/Data';
import Methods from './components/Methods';
import Conclusion from './components/Conclusion';
import About from './components/About';

function App() {
  const data = [
    {
      date: 'Dec. 1964',
      description: 'In his study, Bowers collected data from 99 schools around the US, receiving responses from about 5,000 students. A major finding of his study was that the problem of cheating was grossly underestimated by the college community. In fact, Bowers produces within his findings that at least half of the students had engaged in some form of academic dishonesty. The results produced by the study are still, to this day, regarded as being some of the most substantial - primarily because of its sheer quantitative volume -  within the field of academic dishonesty.'
      ,source: 'Bowers, William J. 1964. Student Dishonesty and Its Control in College. New York: Bureau of Applied Social Research, Columbia University.'
    },
    {
      date: 'Sep. 2012',
      description: 'Throughout the book, McCabe describes his quantitative findings from over 4,000 students, including that more than 60 percent of students had admitted to cheating in some form or another. Though a sharp increase in cheating since Bowers\' study was not found, McCabe highlights that the results point to a minor increase in academic dishonesty since 1964. McCabe also found that one major way for schools to reduce cheating was through the use of signed honesty statements.'
      ,source: 'McCabe, Donald L., Kenneth D. Butterfield, and Linda K. Treviño. 2012. Cheating in College: Why Students Do It and What Educators Can Do About It. Baltimore: Johns Hopkins University Press.'
    },
    {
      date: 'Apr. 2015',
      description: 'In this study, Beasley finds that gender is not correlated to acts of cheating, but instead finds that race plays a significant role in the reporting of cheating. According to Beasley, international undergraduates were far more likely to be caught than the domestic students. From his findings he noted that international students were 5 times more likely to be reported than domestic students in engaging in acts of cheating.'
      ,source: 'Beasley, Eric M. 2016. Comparing the Demographics of Students Reported for Academic Dishonesty to Those of the Overall Student Population. Ethics & Behavior 26 (1): 45-62'
    },
    {
      date: 'Nov. 2022',
      description: 'The release of ChatGPT. With this new technology, the world of cheating becomes opened up in a lot of different ways. Firstly, we no longer have a one-to-one function between the work that\'s handed in and what it\'s been plagiarized from. When a piece of academic work comes from ChatGPT, it can be impossible to verify for certain that the chatbot actually produced the work. Second, even when assignments aren\'t directly online, students can have a digital brain (one which gets smarter over time) complete the work for them.'
      ,source: 'chat.openai.com'
    },
    {
      date: 'May. 2023',
      description: 'My research and onward. My goal is not to conclusively state that cheating will rise as ChatGPT is used throughout universities, but rather to present the perspective of students on ChatGPT to other students, teachers, and future researchers. My hope is that this becomes a topic for future discussions: how will we combat this new medium of cheating, and how is cheating progressing (or diminishing) alongside this new technology?'
      ,source: 'me!'
    },
  ];


  return (
    <body 
      id="app"
    >
      <Logo/>
      <Tab/>
      
      <Intro
        id="intro-section"
        data={data}
      />
      <Methods/>
      <Data/>
      <Conclusion/>
      <About/>
    </body>
  );
}

export default App;
