// const Games = async ({params} : {params :{games : string}}) => {
//   const {games} = await params;


//   return (
//     <div>
//       hey {games}
//     </div>
//   )
// }

// export default Games;




const Gamesss = async ({ params }: { params: { gamesid: string } }) => {
  const resolvedParams = await params; // Wait for params to resolve

  
  return (
      <div>
          hey {resolvedParams.gamesid}
      </div>
  );
};

export default Gamesss;
