import ParaGroup from '../ParaGroup/ParaGroup';
import WritingPart from '../WritingPart/WritingPart';
import './Home.scss';

const Home = () => {
  return (
    <main className="mainContainer">
      <div className="container mx-auto">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="leftHeading fs-md-1 fs-6">Home/Writing Assistant</h1>
          <div className="rightBtnGroup">
            <button className="button">Save</button>
            <button className="button d-md-inline d-none">Filter</button>
          </div>
        </div>

        <div className="row g-5">
          {/* Writing Part */}
          <div className="col-md-7 col">
            <WritingPart />
          </div>

          <div className="col-md-5 col">
            {/* Paragraph Group */}
            <ParaGroup />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
