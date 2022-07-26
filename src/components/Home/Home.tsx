import './Home.scss';

const Home = () => {
  return (
    <main className="mainContainer ">
      <div className="container mx-auto">
        <div className="row g-5">
          <div className="col-md-7">
            <article className="left">
              <h1 className="leftHeading">Home/Writing Assistant</h1>
              <p className='leftWritingPara'>
                Enter input to get{' '}
                <span className="blueColor">Writing Assistant</span>
              </p>
              <div className="leftWritingMenu">
                <div className="leftFieldBox">
                  <label htmlFor="word-count">
                    Words count:{' '}
                  </label>
                  <input className="leftInputCountField numberField" type="number" />
                </div>
                <div className="leftFieldBox">
                  <label htmlFor="prompt">Prompt: </label>
                  <select className="leftInputCountField" name="prompt" id="">
                    <option value="Select">Select</option>
                  </select>
                </div>

                <div className="leftFieldBox">
                  <label htmlFor="prompt">Creativity: </label>
                  <select className="leftInputCountField" name="prompt" id="">
                    <option value="Select">Select</option>
                  </select>
                </div>
              </div>

              <p className="leftWordsCharacterCount">
                <span>Word: 00 </span> | <span> character: 0/250</span>
              </p>
              <div className="leftWritingContent">
                <ul className="top">
                  <li className="keywordShadow">B</li>
                  <li className='keywordShadow'>I</li>
                  <li>hyperlink</li>
                  <li>text cut</li>
                  <li>underline</li>
                  <li>underline</li>
                </ul>
                <p className="leftParagraph">
                  As artificial intelligence continues to evolve, it is becoming
                  increasingly capable of generating original and insightful
                  content. This blog post is a prime example; the title was
                  generated by AI within 10 seconds. AI is quickly becoming a
                  powerful tool for content creators and marketers alike.
                </p>
              </div>
            </article>
          </div>
          <div className="col-md-5">
            <article className="right">
              <div className="rightBtnGroup">
                <button className="button">Save</button>
                <button className="button">Filter</button>
              </div>
              <button className="button rightBtnCenter">Write for me</button>
              <div className="copyParaGroup">
              <p className="rightClearText">Clear</p>
                <div className="rightParaGroup">
                  <span>Copy</span>
                  <p className='rightParagraph'>
                    As artificial intelligence continues to evolve, it is
                    becoming increasingly capable of generating original and
                    insightful content. This blog post is a prime example; the
                    title was generated by AI within 10 seconds. 
                  </p>
                </div>
                <div className="rightParaGroup">
                  <span>Copy</span>
                  <p className='rightParagraph'>
                    As artificial intelligence continues to evolve, it is
                    becoming increasingly capable of generating original and
                    insightful content. This blog post is a prime example; the
                    title was generated by AI within 10 seconds. 
                  </p>
                </div>
                <div className="rightParaGroup">
                  <span>Copy</span>
                  <p className='rightParagraph'>
                    As artificial intelligence continues to evolve, it is
                    becoming increasingly capable of generating original and
                    insightful content. This blog post is a prime example; the
                    title was generated by AI within 10 seconds. 
                  </p>
                </div>
                <div className="rightParaGroup">
                  <span>Copy</span>
                  <p className='rightParagraph'>
                    As artificial intelligence continues to evolve, it is
                    becoming increasingly capable of generating original and
                    insightful content. This blog post is a prime example; the
                    title was generated by AI within 10 seconds. 
                  </p>
                </div>
             
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
