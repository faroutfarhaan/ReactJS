//  const Shimmer = () => {
//     return (
//     <div className="shimmer-container" >
//         <div className="shim-card">
//         <div className="shim-card"> </div>
//         <div className="shim-card"> </div>
//         <div className="shim-card"> </div>
//         <div className="shim-card"> </div>
//         <div className="shim-card"> </div>
//         <div className="shim-card"> </div>

       

//     </div>
//     )
// };
// export default Shimmer;


const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(10)].map((_, index) => ( // Create 10 shimmer cards
        <div key={index} className="shimmer-card">
          <div className="shimmer-image"></div> 
          <div className="shimmer-text-line"></div>
          <div className="shimmer-text-line"></div>
          <div className="shimmer-text-line"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

