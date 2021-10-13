import Main from "./sub-components/Main";

const ProjectMetaData = () => {
  return (
    <Main className="project-metadata">
      <div className="project-metadata-grid">
        <div>
          <p>$89,914</p>
          <span className="text-gray">of $100,000 backed</span>
        </div>
        <div>
          <p>5,007</p>
          <span className="text-gray">total backers</span>
        </div>
        <div>
          <p>56</p>
          <span className="text-gray">days left</span>
        </div>
      </div>
      <div className="project-progress">
        <div className="project-progress-amount"></div>
      </div>
    </Main>
  );
};

export default ProjectMetaData;
