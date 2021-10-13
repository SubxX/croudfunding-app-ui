import Main from "./sub-components/Main";
import Product from "./sub-components/Product";

const ProjectDetails = () => {
  return (
    <Main className="project-details">
      <p>About this project</p>
      <div className="sub-points text-gray">
        <span>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates yout screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make comfortable while at work, helping you stay focused
          and task at hand.
        </span>
        <span>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens and USB
          sticks to bew stored under the stand.
        </span>
      </div>
      <div className="products-wrapper">
        <Product />
        <Product />
      </div>
    </Main>
  );
};

export default ProjectDetails;
