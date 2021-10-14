export const Main = ({ children, className, onClick }: any) => {
  return (
    <div className={`main-div ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Main;
